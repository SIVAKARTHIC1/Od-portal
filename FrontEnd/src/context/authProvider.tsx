/* eslint-disable react-refresh/only-export-components */
import React, {
  createContext,
  Dispatch,
  ReactNode,
  useContext,
  useReducer,
} from "react";

interface user {
  name: string;
  role: string;
  img: string;
}

interface AuthContextType {
  user: user | null;
  isLoading: boolean;
  error: string;
}

type Action =
  | { type: "user/Login"; payload: user }
  | { type: "user/Logout" }
  | { type: "user/loading" }
  | { type: "user/error"; payload: string };

const initialState: AuthContextType = {
  user: {
    name: "gokul",
    role: "student",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&s",
  },
  isLoading: false,
  error: "",
};

function reducer(state: AuthContextType, action: Action): AuthContextType {
  switch (action.type) {
    case "user/Login":
      return { ...state, user: action.payload, isLoading: false, error: "" };
    case "user/Logout":
      return { ...state, user: null, isLoading: false, error: "" };
    case "user/loading":
      return { ...state, isLoading: true, error: "" };
    case "user/error":
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}

const AuthContext = createContext<{
  state: AuthContextType;
  dispatch: Dispatch<Action>;
}>({ state: initialState, dispatch: () => null });

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  // const { user, isLoading, error } = state;

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthContext, AuthContext };
