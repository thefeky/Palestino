import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useUser } from "@clerk/clerk-react";

interface Product {
  productID: string;
  productName: string;
  productImage: string;
  productPrice: number;
  description: string;
  category: string;
  stock: number;
  rating: number;
  seller: string;
  promotion: number;
  featured?: boolean;
}

interface WishlistContextType {
  wishlist: Product[];
  isInWishlist: (productID: string) => boolean;
  addToWishlist: (product: Product) => void;
  removeFromWishlist: (productID: string) => void;
}

const WishlistContext = createContext<WishlistContextType | undefined>(
  undefined
);

function WishlistProvider({ children }: { children: ReactNode }) {
  const { user, isLoaded } = useUser();
  const [wishlist, setWishlist] = useState<Product[]>([]);

  useEffect(() => {
    if (!isLoaded || !user?.id) return;
    const stored = localStorage.getItem(`wishlist-${user.id}`);
    if (stored) {
      try {
        setWishlist(JSON.parse(stored));
      } catch {
        setWishlist([]);
      }
    }
  }, [user?.id, isLoaded]);

  useEffect(() => {
    if (isLoaded && user?.id) {
      localStorage.setItem(`wishlist-${user.id}`, JSON.stringify(wishlist));
    }
  }, [wishlist, user?.id, isLoaded]);

  const isInWishlist = (productID: string) => {
    return wishlist.some((p) => p.productID === productID);
  };

  const addToWishlist = (product: Product) => {
    if (!isInWishlist(product.productID)) {
      setWishlist((prev) => [...prev, product]);
    }
  };

  const removeFromWishlist = (productID: string) => {
    setWishlist((prev) => prev.filter((p) => p.productID !== productID));
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, isInWishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
}

function useWishlist() {
  const context = useContext(WishlistContext);
  if (!context) {
    throw new Error("useWishlist must be used within a WishlistProvider");
  }
  return context;
}

export { WishlistProvider, useWishlist };
