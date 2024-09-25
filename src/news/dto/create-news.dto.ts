import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional, IsDate } from 'class-validator';

export class CreateNewsDto {
  @ApiProperty({ description: 'Заголовок новости' })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({ description: 'Содержание новости' })
  @IsString()
  @IsNotEmpty()
  content: string;

  @ApiProperty({ description: 'Автор новости' })
  @IsString()
  @IsNotEmpty()
  author: string;

  @ApiProperty({ description: 'Дата публикации', required: false })
  @IsOptional()
  @IsDate()
  publishDate?: Date;
}
