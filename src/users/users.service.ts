import { Injectable } from '@nestjs/common';
import { User } from './models/user';
import { v4 as uuidv4 } from 'uuid';
import { CreateUserInput } from './dto/input/create-user.input';

@Injectable()
export class UsersService {
  private users: User[] = [
    {
      email: 'dan@example.com',
      password: 'password',
      userId: '123',
      age: 20,
    },
  ];

  public createUser(createUserData: CreateUserInput): User {
    const user: User = {
      userId: uuidv4(),
      ...createUserData,
    };

    this.users.push(user);

    return user;
  }

  public getUserByEmail(email: string): User | undefined {
    return this.users.find((user) => user.email === email);
  }
}
