import React from "react";
import { NavigationContainer } from "@react-navigation/native";

import { AppRoutes } from "./AppStack/index.routes";
import { AuthRouter } from "./AuthStack/index.routes";

import { useAuth } from "../../global/context/useAuth";
import { Home } from "../Home";
import LoginScreen from "../Login";
import { View } from "react-native";


export const Routes = () => {
  const authContext = useAuth();
  console.log(authContext,'authContext');
  
  const user = authContext?.user;

  return (
    <NavigationContainer>
      {/* {user ? <AppRoutes /> : <AuthRouter />} */}
      {/* {user ? <AuthRouter /> : <AppRoutes />} */}
      {/* <Home />  */}
      {/* <LoginScreen navigation={undefined} /> */}
      <AuthRouter/>
    </NavigationContainer>
  );
};

