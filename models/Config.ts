
export interface AppConfig {
  apiUrl?: string;
  auth: {
    authority: string;
    client_id: string;
    redirect_uri: string;
    response_type: string;
    scope: string;
    post_logout_redirect_uri: string;
  }
}

export const defaultAppConfig: AppConfig = {
  apiUrl: 'http://localhost:5258/api',
  auth: {
    authority: "http://localhost:8080/auth/realms/myrealm",
    client_id: "myclient",
    redirect_uri: "http://localhost:3000/callback",
    response_type: "code",
    scope: "openid profile email",
    post_logout_redirect_uri: "http://localhost:3000/",
  }
}
