import { useUser } from "@clerk/clerk-react";
import { Navigate } from "react-router-dom";
import { PropsWithChildren } from "react";

const PublicOnlyRoute: React.FC<PropsWithChildren> = ({ children }) => {
  const { isLoaded, isSignedIn } = useUser();

  if (!isLoaded) return null;

  return isSignedIn ? <Navigate to="/" replace /> : <>{children}</>;
};

export default PublicOnlyRoute;
