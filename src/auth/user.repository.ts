import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserRepository extends Repository<User> {
  
  constructor(
    @InjectRepository(User)
    private readonly repository: Repository<User>
  ) {
    super(User, repository.manager);
  }

  async createUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, password, status } = createUserDto;
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({
      username,
      password: hashedPassword,
      status,
    });

    await this.save(user);
    return user;
  }
}