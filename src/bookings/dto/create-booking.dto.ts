import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsDate, IsNumber, Min } from 'class-validator';

export class CreateBookingDto {
  @ApiProperty({ description: 'ID пользователя, создающего бронирование' })
  @IsNumber()
  @IsNotEmpty()
  userId: number;

  @ApiProperty({ description: 'Дата начала бронирования' })
  @IsDate()
  @IsNotEmpty()
  startDate: Date;

  @ApiProperty({ description: 'Дата окончания бронирования' })
  @IsDate()
  @IsNotEmpty()
  endDate: Date;

  @ApiProperty({ description: 'ID зоны бронирования' })
  @IsNumber()
  @IsNotEmpty()
  zoneId: number;

  @ApiProperty({ description: 'Количество гостей' })
  @IsNumber()
  @Min(1)
  @IsNotEmpty()
  guestCount: number;
}
