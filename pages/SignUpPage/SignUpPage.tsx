import React, {useState} from 'react';
import {IgcFormView, IgcPageTitle, IgcPageView, IgcTextInput} from "../../components/styled/StyledComponents";
import {Button} from "react-native";
import {userStore} from "../../stores/UserStore";
import {NavigationName} from "../../constants/NavEnum";

const SignUpPage: React.FC<{ navigation: any }> = ({navigation}) => {
  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSignUp = () => {
    userStore.createUser({username, email, password})
      .then(() => {
        console.log('success');
        navigation.navigate(NavigationName.Home);
      });
  };

  return (
    <IgcPageView>
      <IgcPageTitle>Sign Up</IgcPageTitle>
      <IgcFormView>
        <IgcTextInput
          placeholder="Username"
          value={username}
          onChangeText={setUsername}
        />
        <IgcTextInput
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <IgcTextInput
          placeholder="Password"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <Button title="Sign Up" onPress={handleSignUp} />
      </IgcFormView>
    </IgcPageView>
  );
};

export default SignUpPage;
