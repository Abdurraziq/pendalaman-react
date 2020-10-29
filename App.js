import "react-native-gesture-handler";
import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-community/async-storage";

// importing Screen
import HomeSreen from "./screens/home";
import LoadSreen from "./screens/loading";
import LoginScreen from "./screens/login";

const stack = createStackNavigator();

const App = () => {
  const [foundData, setFoundData] = useState(false);
  const [isLoad, setIsload] = useState(true);

  const checkToken = async () => {
    try {
      let findingEmail = await AsyncStorage.getItem("email");
      let findingPassword = await AsyncStorage.getItem("password");
      setFoundData(findingEmail && findingPassword);
      setIsload(false);
    } catch (error) {
      console.error(error);
    }
  };

  const loginAction = async (login) => {
    const [email, password] = [...login];

    try {
      await AsyncStorage.setItem("email", email);
      await AsyncStorage.setItem("password", password);
      setFoundData(true);
    } catch (error) {
      console.error(error);
    }
  };

  const logoutAction = async () => {
    try {
      await AsyncStorage.removeItem("email");
      await AsyncStorage.removeItem("password");
      setFoundData(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <NavigationContainer>
      <stack.Navigator>
        {foundData ? (
          <stack.Screen name="Home">
            {(props) => <HomeSreen {...props} logout={logoutAction} />}
          </stack.Screen>
        ) : isLoad ? (
          <stack.Screen name="Load" options={{ headerShown: false }}>
            {(props) => <LoadSreen {...props} />}
          </stack.Screen>
        ) : (
          <stack.Screen name="Login">
            {(props) => <LoginScreen {...props} login={loginAction} />}
          </stack.Screen>
        )}
      </stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
