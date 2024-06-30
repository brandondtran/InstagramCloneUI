import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './pages/LoginPage/LoginPage';
import {ThemeProvider} from "styled-components";
import {theme} from './styles/theme';
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import {NavigationName} from "./constants/NavEnum";
import HomePage from "./pages/HomePage/HomePage";
import {getAllTest} from "./services/http/TestHttpService";

const Stack = createStackNavigator();

let initialRoute = NavigationName.Home;

const handleAppStateChange = async () => {
    await getAllTest()
      .then((resp) => {
        console.log('TEST SUCCESS', resp);
        initialRoute = NavigationName.Home;
      })
      .catch((resp) => {
        console.log('TEST CATCH', resp);
        initialRoute = NavigationName.Login;
      })
      .finally(() => {
        console.log('TEST FINALLY');
      });
};

const App: React.FC = () => {

  // useEffect(() => {
  //   console.log('useEffect');
  //
  //   const sub = AppState.addEventListener('change', handleAppStateChange);
  //
  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     sub.remove();
  //   };
  // }, []);

  handleAppStateChange();

  console.log('after')

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
