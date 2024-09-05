import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
  ParseIntPipe,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './DTO/create-user.dto';
import { UpdateUserDto } from './DTO/update-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAll(@Query('role') role?: string): Array<Object> {
    return this.userService.findAll(role);
  }
  @Get('/:id')
  findOne(@Param('id', ParseIntPipe) id: number): Object {
    return this.userService.findOne(id);
  }
  @Post()
  create(
    @Body(new ValidationPipe())
    user: CreateUserDto,
  ) {
    return this.userService.create(user);
  }
  @Put('/:id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body(new ValidationPipe()) userUpdate: UpdateUserDto,
  ) {
    return this.userService.update(id, userUpdate);
  }
  @Delete('/:id')
  delete(@Param('id', ParseIntPipe) id: number) {
    return this.userService.delete(id);
  }
}
