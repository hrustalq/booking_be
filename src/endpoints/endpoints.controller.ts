import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { EndpointsService } from './endpoints.service';
import { CreateEndpointDto } from './dto/create-endpoint.dto';
import { UpdateEndpointDto } from './dto/update-endpoint.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Конечные точки')
@Controller('endpoints')
export class EndpointsController {
  constructor(private readonly endpointsService: EndpointsService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новую конечную точку' })
  create(@Body() createEndpointDto: CreateEndpointDto) {
    return this.endpointsService.create(createEndpointDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить список всех конечных точек' })
  findAll() {
    return this.endpointsService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить конечную точку по ID' })
  findOne(@Param('id') id: string) {
    return this.endpointsService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить данные конечной точки' })
  update(
    @Param('id') id: string,
    @Body() updateEndpointDto: UpdateEndpointDto,
  ) {
    return this.endpointsService.update(+id, updateEndpointDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить конечную точку' })
  remove(@Param('id') id: string) {
    return this.endpointsService.remove(+id);
  }
}
