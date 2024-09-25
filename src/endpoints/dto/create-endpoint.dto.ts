import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty, IsEnum } from 'class-validator';

enum HttpMethod {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  PATCH = 'PATCH',
  DELETE = 'DELETE',
}

export class CreateEndpointDto {
  @ApiProperty({ description: 'URL конечной точки' })
  @IsString()
  @IsNotEmpty()
  url: string;

  @ApiProperty({ description: 'HTTP метод', enum: HttpMethod })
  @IsEnum(HttpMethod)
  method: HttpMethod;

  @ApiProperty({ description: 'Описание конечной точки' })
  @IsString()
  @IsNotEmpty()
  description: string;
}
