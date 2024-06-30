import React from 'react';
import {IgcPageTitle, IgcPageView} from "../../components/styled/StyledComponents";
import {userStore} from "../../stores/UserStore";
import {Button} from "react-native";
import {getAllTest} from "../../services/http/TestHttpService";
import {NavigationName} from "../../constants/NavEnum";

const HomePage: React.FC<{ navigation: any }> = ({navigation}) => {

  const onTestPress = async () => {
    getAllTest()
      .then((resp) => {
        console.log('TEST SUCCESS', resp);
      })
      .catch((resp) => {
        console.log('TEST CATCH', resp);
        navigation.navigate(NavigationName.Login)
      })
      .finally(() => {
        console.log('TEST FINALLY');
      });
  }

    return (
        <IgcPageView>
            <IgcPageTitle>HOME PAGE</IgcPageTitle>
            <IgcPageTitle>{userStore.user.username}</IgcPageTitle>
            <IgcPageTitle>{userStore.user.email}</IgcPageTitle>
            <Button title="TEST" onPress={() => onTestPress()}></Button>
        </IgcPageView>
    );
};


export default HomePage;
