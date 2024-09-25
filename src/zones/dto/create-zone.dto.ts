import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsNumber, Min } from 'class-validator';

export class CreateZoneDto {
  @ApiProperty({ description: 'Название зоны' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Описание зоны' })
  @IsString()
  description: string;

  @ApiProperty({ description: 'Вместимость зоны' })
  @IsNumber()
  @Min(1)
  capacity: number;
}
