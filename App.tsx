import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import LoginPage from './pages/LoginPage/LoginPage';
import {ThemeProvider} from "styled-components";
import {theme} from './styles/theme';
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import {NavigationName} from "./constants/NavEnum";
import HomePage from "./pages/HomePage/HomePage";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName={NavigationName.Login}
          screenOptions={{
            headerTitle: '',
            headerStyle: {
              borderBottomWidth: 0,  // Remove the bottom border
              shadowColor: 'transparent',  // Remove shadow on iOS
              elevation: 0,  // Remove shadow on Android
            },
          }}
        >
          <Stack.Screen name={NavigationName.Login} component={LoginPage}/>
          <Stack.Screen name={NavigationName.SignUp} component={SignUpPage}/>
          <Stack.Screen name={NavigationName.Home} component={HomePage}/>
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
