import BaseAPI from './base';

export type Token = {
  name: string;
  email: string;
  picture: string;
  sub: string;
  accessToken: string;
  refreshToken: string;
  iat: number;
  exp: number;
  jti: string;
};

enum InvalidTokenCode {
  INTERNAL_ERROR = -1,
  BAD_REQUEST = -2,
  EXPIRED = -401,
}

type ValidToken = {
  expiresInMillis: number;
  id: number;
  expires_in: number;
  app_id: number;
  appId: number;
};

type InvalidToken = {
  msg: string;
  code: InvalidTokenCode;
};

class TokenAPI extends BaseAPI {
  validateToken(token: Token) {
    return this.call<ValidToken | InvalidToken>(
      'https://kapi.kakao.com/v1/user/access_token_info',
      {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${token.accessToken}`,
        },
        ignorePath: true,
      },
    ).then((res) => {
      if ('code' in res) {
        if (Object.values(InvalidTokenCode).includes(res.code)) {
          return false;
        }
      }

      if ('expiresInMillis' in res) {
        if (res.expiresInMillis > 0) {
          return true;
        }
      }

      return false;
    });
  }
}

const tokenAPI = new TokenAPI();
export default tokenAPI;
