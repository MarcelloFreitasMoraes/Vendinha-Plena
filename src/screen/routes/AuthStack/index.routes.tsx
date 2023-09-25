// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import  LoginScreen  from "../../Login";
// // import { PreloadScreen } from "../../screens/PreLoad";

// import { INavigationAuthStackProps } from "./types";
// import { Home } from "../../Home";

// export function AuthRouter() {
//   const { Navigator, Screen } =
//     createNativeStackNavigator<INavigationAuthStackProps>();

//   return (
//     <Navigator
//      initialRouteName="LoginScreen"
//       screenOptions={{ headerShown: false }}
//     >
//       <Screen name="LoginScreen" component={LoginScreen} />
//        {/* <Screen name="Home" component={Home} />  */}
//     </Navigator>
//   );
// }

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../Login";

export function AuthRouter() {
  const { Navigator, Screen } = createNativeStackNavigator();

  return (
      <Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>
        <Screen name="Login" component={Login} />
      </Navigator>
  );
}
