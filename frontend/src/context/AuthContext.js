import { createContext, useEffect, useReducer } from "react";

const initial_state = {
  user: null,
  loading: false,
  error: null,
};

// 🌟 Try loading user from localStorage safely
if (typeof window !== "undefined") {
  try {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      initial_state.user = JSON.parse(storedUser);
    }
  } catch (error) {
    console.error("Error parsing user from localStorage:", error);
  }
}

export const AuthContext = createContext(initial_state);

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return { user: null, loading: true, error: null };
    case "LOGIN_SUCCESS":
      return { user: action.payload, loading: false, error: null };
    case "LOGIN_FAILURE":
      return { user: null, loading: false, error: action.payload };
    case "REGISTER_SUCCESS":
      return { user: null, loading: false, error: null };
    case "LOGOUT":
      return { user: null, loading: false, error: null };
    default:
      return state;
  }
};

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, initial_state);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (state.user) {
        localStorage.setItem("user", JSON.stringify(state.user));
      } else {
        localStorage.removeItem("user"); // ✅ Fixes "null" being stored as a string
      }
    }
  }, [state.user]); // ✅ Only updates when `user` changes

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        loading: state.loading,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
