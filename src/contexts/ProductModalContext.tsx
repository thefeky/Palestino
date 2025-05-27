import { createContext, useContext, useState, ReactNode } from "react";

export interface ProductDetails {
  id: string;
  name: string;
  description: string;
  image: string;
  price: number;
  promotion: number;
  stock: number;
  rating: number;
  seller: string;
  category: string;
  featured?: boolean;
}

interface ProductModalContextType {
  openModal: (product: ProductDetails) => void;
  closeModal: () => void;
  product: ProductDetails | null;
  isOpen: boolean;
}

const ProductModalContext = createContext<ProductModalContextType | undefined>(
  undefined
);

function ProductModalProvider({ children }: { children: ReactNode }) {
  const [product, setProduct] = useState<ProductDetails | null>(null);
  const isOpen = !!product;

  function openModal(product: ProductDetails) {
    setProduct(product);
  }

  function closeModal() {
    setProduct(null);
  }

  return (
    <ProductModalContext.Provider
      value={{ product, isOpen, openModal, closeModal }}
    >
      {children}
    </ProductModalContext.Provider>
  );
}

function useProductModal() {
  const context = useContext(ProductModalContext);
  if (!context)
    throw new Error(
      "useProductModal must be used within a ProductModalProvider"
    );
  return context;
}

export { ProductModalProvider, useProductModal };
