import { IsEnum, IsNotEmpty, IsString, MaxLength, Min, MinLength } from "class-validator";
import { UserStatus } from "../user-status.enum";

export class CreateUserDto {
  @IsNotEmpty()
  @IsString()
  username: string;

  @IsString()
  @MinLength(8)
  @MaxLength(32)
  password;

  @IsEnum(UserStatus)
  status: UserStatus;
}