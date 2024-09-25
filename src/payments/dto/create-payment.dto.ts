import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsNotEmpty, Min, IsString } from 'class-validator';

export class CreatePaymentDto {
  @ApiProperty({ description: 'ID бронирования, к которому относится платеж' })
  @IsNumber()
  @IsNotEmpty()
  bookingId: number;

  @ApiProperty({ description: 'Сумма платежа' })
  @IsNumber()
  @Min(0)
  @IsNotEmpty()
  amount: number;

  @ApiProperty({ description: 'Метод оплаты' })
  @IsString()
  @IsNotEmpty()
  paymentMethod: string;
}
