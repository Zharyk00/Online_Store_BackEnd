import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { Response } from 'express';
import { LoginDto } from './login-dto.interface';
import { Login } from './login-schema';
import { LoginService } from './login.service';

@Controller('login')
export class LoginController {
  constructor(private LoginService: LoginService) {}

  @Post()
  logWithNumber(@Body() LoginDto: LoginDto) {
    return this.LoginService.loginUser(LoginDto);
  }

  @Get(':id')
  getAllUser(@Param('id') id: number): Promise<Login> {
    return this.LoginService.getUserById(id);
  }

  @Get()
  getData(@Res() res: Response): Object {
    return res.send(`<h1>Hello node js server</h1>`);
  }
}