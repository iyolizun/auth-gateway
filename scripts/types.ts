interface User {
  id: string;
  email: string;
  username: string;
  createdAt: Date;
  updatedAt: Date;
}

interface TokenPayload {
  userId: string;
  email: string;
  exp: number;
  iat: number;
}

interface AuthResponse {
  user: User;
  token: string;
}

interface LoginRequest {
  email: string;
  password: string;
}

interface RegisterRequest {
  email: string;
  username: string;
  password: string;
}

interface ErrorResponse {
  message: string;
  statusCode: number;
}

type AuthOperation = 'login' | 'register';

export { User, TokenPayload, AuthResponse, LoginRequest, RegisterRequest, ErrorResponse, AuthOperation };