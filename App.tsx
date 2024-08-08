import * as React from 'react';
import {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './pages/LoginPage/LoginPage';
import {ThemeProvider} from "styled-components";
import {theme} from './styles/theme';
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import {NavigationName} from "./constants/NavEnum";
import HomePage from "./pages/HomePage/HomePage";
import {getAllTest} from "./services/http/TestHttpService";
import * as SplashScreen from 'expo-splash-screen';
import {View} from "react-native";

const Stack = createStackNavigator();

let initialRoute = NavigationName.Home;

function ActivityIndicator(props: { size: string, color: string }) {
  return null;
}

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const prepareApp = async (): Promise<void> => {
      try {
        // Prevent splash screen from auto-hiding
        await SplashScreen.preventAutoHideAsync();
        await getAllTest()
          .then((resp) => {
            console.log('TEST SUCCESS', resp);
            initialRoute = NavigationName.Home;
          })
          .catch((resp) => {
            // TODO: 401 re-route to login. Else, display an error toast.
            console.log('TEST CATCH', resp);
            initialRoute = NavigationName.Login;
          });
      } catch (e) {
        console.warn(e);
      } finally {
        // Hide splash screen and set loading to false
        await SplashScreen.hideAsync();
        setIsLoading(false);
      }
    };

    prepareApp();
  }, []);

  if (isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#0000ff"/>
      </View>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,  // Remove the bottom border
              shadowColor: 'transparent',  // Remove shadow on iOS
              elevation: 0,  // Remove shadow on Android
            },
          }}
        >
          <Stack.Screen name={NavigationName.Home} component={HomePage}/>
          <Stack.Screen name={NavigationName.Login} component={LoginPage}/>
          <Stack.Screen name={NavigationName.SignUp} component={SignUpPage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
