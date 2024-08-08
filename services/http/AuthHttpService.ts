// import axios from 'axios';
// import {defaultAppConfig} from "../../models/Config";
// import {jwtDecode, JwtPayload} from "jwt-decode";
//
//
// interface User {
//   username: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phoneNumber: string;
// }
//
// const getToken = async (usernameOrEmail: string, password: string): Promise<boolean> => {
//
//   const params = new URLSearchParams();
//   params.append('client_id', defaultAppConfig.auth.clientId);
//   params.append('client_secret', defaultAppConfig.auth.clientSecret); // if using confidential client
//   params.append('grant_type', defaultAppConfig.auth.grantType);
//   params.append('username', usernameOrEmail);
//   params.append('password', password);
//
//   try {
//     const response = await fetch(defaultAppConfig.auth.tokenUrl, {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/x-www-form-urlencoded',
//       },
//       body: params.toString()
//     });
//
//     if (response.ok) {
//       const data = await response.json();
//       console.log('Access Token:,', data.access_token);
//
//       // Decode the JWT
//       const decodedToken: any = jwtDecode(data.access_token);
//       console.log('Decoded Token:', decodedToken);
//
//       return true;
//     } else {
//       console.error('Login failed:', response.statusText);
//     }
//   } catch (error) {
//     console.error('Error:', error);
//   }
//
//   return false;
// };
//
// export { getToken };
