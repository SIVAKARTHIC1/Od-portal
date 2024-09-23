/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";

// Initial state
const initialState = {
  user: {
    name: "gokul",
    role: "student",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQNvWDvQb_rCtRL-p_w329CtzHmfzfWP0FIw&s",
  },
  isLoading: false,
  error: "",
};

// Reducer function
function reducer(state, action) {
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

// Create AuthContext
const AuthContext = createContext({
  state: initialState,
  dispatch: () => null,
});

// Hook to use AuthContext
const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

// AuthProvider component
export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthContext, AuthContext };
