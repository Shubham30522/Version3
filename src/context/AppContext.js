import { createContext, useState } from "react";

const AppContext = createContext();

function AppContextProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [signupData, setsignupData] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSignup, setIsSignup] = useState(false);


  //Functions
  const updateSignupData = async (data) => {
    // Assuming this function updates your signupData asynchronously
    // You can use a real asynchronous operation here, like an API call

    // Simulate an async operation with a setTimeout
    await setsignupData(data);
    /* return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Update the signupData

        // Resolve the promise to signal that the data is updated
        resolve();
      }, 1000); // Simulated delay for demonstration purposes; replace with actual async operation
    }); */
  };

  const value = {
    loading,
    setLoading,
    signupData,
    setsignupData,
    isLoggedIn,
    setIsLoggedIn,
    updateSignupData,
    isSignup,
    setIsSignup,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export { AppContext, AppContextProvider as default };
