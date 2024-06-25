import React from 'react';
import {IgcPageTitle, IgcPageView} from "../../components/styled/StyledComponents";
import {userStore} from "../../stores/UserStore";

const HomePage: React.FC<{ navigation: any }> = () => {
  return (
    <IgcPageView>
      <IgcPageTitle>HOME PAGE</IgcPageTitle>
      <IgcPageTitle>{userStore.user.username}</IgcPageTitle>
      <IgcPageTitle>{userStore.user.email}</IgcPageTitle>
    </IgcPageView>
  );
};


export default HomePage;
