import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsOptional } from 'class-validator';

export class CreateBranchDto {
  @ApiProperty({ description: 'Название филиала' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({ description: 'Адрес филиала' })
  @IsString()
  @IsNotEmpty()
  address: string;

  @ApiProperty({ description: 'Контактный телефон филиала' })
  @IsString()
  @IsNotEmpty()
  phone: string;

  @ApiProperty({ description: 'Описание филиала', required: false })
  @IsOptional()
  @IsString()
  description?: string;
}
