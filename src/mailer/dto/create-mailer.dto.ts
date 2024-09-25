import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsArray } from 'class-validator';

export class CreateMailerDto {
  @ApiProperty({ description: 'Тема рассылки' })
  @IsString()
  @IsNotEmpty()
  subject: string;

  @ApiProperty({ description: 'Текст сообщения' })
  @IsString()
  @IsNotEmpty()
  body: string;

  @ApiProperty({ description: 'Список email-адресов получателей' })
  @IsArray()
  @IsNotEmpty()
  recipients: string[];
}
