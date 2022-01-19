import { Controller, Get, Param } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('/auth')
export class UsersController {
  constructor(private usersService: UsersService) {}
  @Get('/:id')
  async findById(@Param('id') id: string) {
    const user = await this.usersService.findById(parseInt(id));
    return user;
  }
}
