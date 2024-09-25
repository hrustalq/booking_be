import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ description: 'Имя пользователя' })
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  username: string;

  @ApiProperty({ description: 'Электронная почта пользователя' })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @ApiProperty({ description: 'Пароль пользователя' })
  @IsString()
  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
