import { JwtPayload } from './jwt-payload.type';

interface UserJwtPayload extends JwtPayload {
  iat: number;
  exp: number;
  refreshToken: string;
}

export interface IDPRequest extends Request {
  user: UserJwtPayload;
}
