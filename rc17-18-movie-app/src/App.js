import React from "react";
import AppRouter from "./router/AppRouter";
import AuthProvider from "./context/authProvider";

const App = () => {
  return (
    <div>
      <AuthProvider>
        <AppRouter />
      </AuthProvider>
    </div>
  );
};

export default App;
