import { createContext, useContext, useEffect, useReducer } from "react";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || {
    id: "",
    name: "",
    role: "",
    img: "",
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

export const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    console.log(storedUser);
    if (storedUser) {
      dispatch({ type: "user/Login", payload: JSON.parse(storedUser) });
    } else {
      dispatch({ type: "user/Logout" });
    }
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export { useAuthContext, AuthContext };
