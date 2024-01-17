import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/entities/user.entity";
import { Repository } from "typeorm";
import { CreateUserDto } from "./dto/create-user.dto";

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
    const user = this.create({
      username,
      password,
      status,
    });
    await this.save(user);
    return user;
  }
}