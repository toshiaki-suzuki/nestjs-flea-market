import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { UserRepository } from "./user.repository";
import { User } from "src/entities/user.entity";
import { use } from "passport";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private userRepository: UserRepository) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // RequestのどこにJWTがあるかを指定
      ignoreExpiration: false, // JWTの有効期限を確認するかどうか,
      secretOrKey: 'secretKey123' // JWTの署名に使うキー
    });
  }

  async validate(payload: {id: string, username: string}): Promise<User> {
    const { id, username } = payload;
    const user = await this.userRepository.findOne({ where: { id, username } });
    if (user) {
      return user;
    }
    throw new UnauthorizedException();
  }
}