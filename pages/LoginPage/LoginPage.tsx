import React, {useState} from 'react';
import {Button, Text, View} from 'react-native';
import {IgcFormView, IgcLink, IgcPageTitle, IgcPageView, IgcTextInput} from "../../components/styled/StyledComponents";
import {NavigationName} from "../../constants/NavEnum";

const LoginPage: React.FC<{ navigation: any }> = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
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
          <IgcLink onPress={() => navigation.navigate(NavigationName.SignUp)}>Sign Up</IgcLink>
        </View>
      </IgcFormView>
    </IgcPageView>
  );
};


export default LoginPage;
