
export interface AppConfig {
  apiUrl?: string;
  auth: {
    authority: string;
    client_id: string;
    redirect_uri: string;
    response_type: string;
    scope: string;
    post_logout_redirect_uri: string;
    // tokenUrl: string;
    // clientId: string;
    // clientSecret: string;
    // grantType: string;
    // redirectUrl: string;
    // logoutRedirectURI: string;
  }
}

export const defaultAppConfig: AppConfig = {
  apiUrl: 'http://localhost:5258/api',
  auth: {
    authority: "http://localhost:9999/realms/general",
    client_id: "general-client",
    redirect_uri: "https://jjxk1w4-anonymous-8081.exp.direct",
    response_type: "code",
    scope: "openid profile email",
    post_logout_redirect_uri: "https://jjxk1w4-anonymous-8081.exp.direct",
    // tokenUrl: "http://localhost:9999/realms/general/protocol/openid-connect/token",
    // clientId: "general-client",
    // clientSecret: "HgNWk6Yjr7ekgTOHJccwwkjJrWMrmb1R",
    // grantType: 'password',
    // redirectUrl: "http://localhost:3000/callback",
    // logoutRedirectURI: "http://localhost:3000/",
  }
}
