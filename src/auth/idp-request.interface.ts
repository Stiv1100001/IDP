import { JwtPayload } from './jwt-payload.type';

export interface IDPRequest extends Request {
  user: JwtPayload;
  refreshToken: string;
}
