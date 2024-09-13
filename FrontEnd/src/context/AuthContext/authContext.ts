import { createContext, useContext } from "react";

interface user {
  name: string;
  role: string;
}

interface AuthContextType {
  user: user | null;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};

export { useAuthContext, AuthContext };

export type { user };
