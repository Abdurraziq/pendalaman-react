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
  const [foundToken, setFoundToken] = useState("");
  const [isLoad, setIsload] = useState(true);

  const checkToken = async () => {
    try {
      let findingToken = await AsyncStorage.getItem("token");
      setFoundToken(findingToken);
      setIsload(false);
    } catch (error) {
      console.error(error);
    }
  };

  const loginAction = async () => {
    let dummyToken = "tOkeN123$%^";

    try {
      await AsyncStorage.setItem("token", dummyToken);
      setFoundToken(dummyToken);
    } catch (error) {
      console.error(error);
    }
  };

  const logoutAction = async () => {
    try {
      await AsyncStorage.removeItem("token");
      setFoundToken("");
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
        {foundToken ? (
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

export default App
