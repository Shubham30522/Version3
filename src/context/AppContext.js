import { createContext, useState } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [signupData, setsignupData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    collegeId: "",
    collegeName: "",
    stateName: "",
    cityName: "",
    facultyName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  //Functions
  const updateSignupData = (formData) => {
    setsignupData(formData);
  };
  const value = {
    loading,
    setLoading,
    signupData,
    setsignupData,
    isLoggedIn,
    setIsLoggedIn,
    updateSignupData,
    formData,
    setFormData,
    isSignup,
    setIsSignup,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider as default };
