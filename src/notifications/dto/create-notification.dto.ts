import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber } from 'class-validator';

export class CreateNotificationDto {
  @ApiProperty({
    description: 'ID пользователя, которому отправляется уведомление',
  })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ description: 'Заголовок уведомления' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Текст уведомления' })
  @IsString()
  @IsNotEmpty()
  message: string;
}
