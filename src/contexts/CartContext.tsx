// src/context/CartContext.tsx
import {
  createContext,
  useContext,
  useEffect,
  useState,
  ReactNode,
} from "react";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

interface CartItem {
  productName: string;
  productPrice: number;
  productImage: string;
  quantity: number;
  stock: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart(
    product: { name: string; price: number; image: string; stock: number },
    quantity?: number
  ): void;
  removeFromCart(productName: string): void;
  updateQuantity(productName: string, quantity: number): void;
  clearCart(): void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

function useCart(): CartContextType {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
}

interface CartProviderProps {
  children: ReactNode;
}

function CartProvider({ children }: CartProviderProps) {
  const { user, isLoaded } = useUser();
  const navigate = useNavigate();
  const userId = user?.id;
  const storageKey = userId ? `cart_${userId}` : null;

  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    if (!userId || !storageKey) return;
    const stored = localStorage.getItem(storageKey);
    if (stored) setCart(JSON.parse(stored));
  }, [userId, storageKey]);

  useEffect(() => {
    if (userId && storageKey) {
      localStorage.setItem(storageKey, JSON.stringify(cart));
    }
  }, [cart, userId, storageKey]);

  function addToCart(
    product: { name: string; price: number; image: string; stock: number },
    quantity: number = 1
  ): void {
    if (!userId) {
      navigate("/sign-in");
      return;
    }
    setCart((prev) => {
      const existing = prev.find((item) => item.productName === product.name);
      if (existing) {
        return prev.map((item) =>
          item.productName === product.name
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          productName: product.name,
          productPrice: product.price,
          productImage: product.image,
          quantity,
          stock: product.stock,
        },
      ];
    });
  }

  function removeFromCart(productName: string): void {
    setCart((prev) => prev.filter((item) => item.productName !== productName));
  }

  function updateQuantity(productName: string, quantity: number): void {
    setCart((prev) =>
      prev.map((item) => {
        if (item.productName !== productName) return item;

        const safeQuantity =
          typeof item.stock === "number"
            ? Math.min(quantity, item.stock)
            : quantity;

        return { ...item, quantity: safeQuantity };
      })
    );
  }

  function clearCart(): void {
    setCart([]);
  }

  if (!isLoaded) return <></>;

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export { CartProvider, useCart };
