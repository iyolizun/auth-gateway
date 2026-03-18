// types.ts
import { Context } from 'koa';

export enum TokenType {
  ACCESS_TOKEN = 'access_token',
  REFRESH_TOKEN = 'refresh_token',
}

export enum AuthStatus {
  UNAUTHORIZED = 'unauthorized',
  FORBIDDEN = 'forbidden',
}

export enum AuthError {
  INVALID_CREDENTIALS = 'invalid_credentials',
  MISSING_AUTH_HEADER = 'missing_auth_header',
  INVALID_AUTH_HEADER = 'invalid_auth_header',
}

export interface AuthContext extends Context {
  user: any;
  token: string;
  tokenType: TokenType;
  refreshToken: string;
}

export interface User {
  id: number;
  username: string;
  email: string;
  role: string;
}