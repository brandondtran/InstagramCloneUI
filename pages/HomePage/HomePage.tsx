import React from 'react';
import {IgcPageTitle, IgcPageView} from "../../components/styled/StyledComponents";
import {userStore} from "../../stores/UserStore";
import {Button} from "react-native";
import {getAllTest} from "../../services/http/TestHttpService";

const onTestPress = async () => {
    getAllTest()
        .then((resp) => {
            console.log('TEST SUCCESS', resp);
        })
        .catch((resp) => {
            console.log('TEST CATCH', resp);
        })
        .finally(() => {
           console.log('TEST FINALLY');
        });
}

const HomePage: React.FC<{ navigation: any }> = () => {
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
