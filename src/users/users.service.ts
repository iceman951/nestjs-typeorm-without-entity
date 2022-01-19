import { Injectable, NotFoundException } from '@nestjs/common';
import { Connection } from 'typeorm';

@Injectable()
export class UsersService {
  constructor(private readonly connection: Connection) {}
  async findById(id: number) {
    const users = await this.connection.query(
      `SELECT * FROM public.user WHERE ID=${id} ORDER BY id ASC`,
    );
    if (users.length == 0) {
      throw new NotFoundException(`userId: ${id} not found`);
    }
    return users;
  }
}
