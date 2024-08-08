import React, {useState} from 'react';
import {Button, Text, TouchableOpacity, View} from 'react-native';
import {
  IgcFormView,
  IgcLinkText,
  IgcPageTitle,
  IgcPageView,
  IgcTextInput
} from "../../components/styled/StyledComponents";
import {NavigationName} from "../../constants/NavEnum";
import authStore from "../../stores/AuthStore";

const LoginPage: React.FC<{ navigation: any }> = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = async () => {
    await authStore.login();
    // await authStore.loginWithPassword(username, password);
  };

  return (
    <IgcPageView>
      <IgcPageTitle>Instagram Clone</IgcPageTitle>
      <IgcFormView>
        <IgcTextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <IgcTextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Login" onPress={handleLogin}/>
        <View style={{flexDirection: 'row', gap: 5, alignItems: 'center', justifyContent: 'center'}}>
          <Text>Don't have an account?</Text>
          <TouchableOpacity onPress={() => navigation.navigate(NavigationName.SignUp)}>
            <IgcLinkText>Sign Up</IgcLinkText>
          </TouchableOpacity>
        </View>
      </IgcFormView>
    </IgcPageView>
  );
};

export default LoginPage;
