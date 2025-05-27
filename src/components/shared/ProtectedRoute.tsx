// src/components/ProtectedRoute.tsx
import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";

const ProtectedRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null;

  return isSignedIn ? <>{children}</> : <Navigate to="/" replace />;
};

export default ProtectedRoute;
