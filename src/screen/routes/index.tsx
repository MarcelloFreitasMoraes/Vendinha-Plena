import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { AppRoutes } from "./AppStack/index.routes";
import { AuthRouter } from "./AuthStack/index.routes";
import { useAuth } from "../../global/context/useAuth";

export const Routes = () => {
  const authContext = useAuth();  
  const user = authContext?.user;

  return (
    <NavigationContainer>
      {user ? <AppRoutes /> : <AuthRouter />}
    </NavigationContainer>
  );
};

