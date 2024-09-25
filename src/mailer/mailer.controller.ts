import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MailerService } from './mailer.service';
import { CreateMailerDto } from './dto/create-mailer.dto';
import { UpdateMailerDto } from './dto/update-mailer.dto';
import { ApiTags, ApiOperation } from '@nestjs/swagger';

@ApiTags('Рассылка')
@Controller('mailer')
export class MailerController {
  constructor(private readonly mailerService: MailerService) {}

  @Post()
  @ApiOperation({ summary: 'Создать новую рассылку' })
  create(@Body() createMailerDto: CreateMailerDto) {
    return this.mailerService.create(createMailerDto);
  }

  @Get()
  @ApiOperation({ summary: 'Получить список всех рассылок' })
  findAll() {
    return this.mailerService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Получить рассылку по ID' })
  findOne(@Param('id') id: string) {
    return this.mailerService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Обновить данные рассылки' })
  update(@Param('id') id: string, @Body() updateMailerDto: UpdateMailerDto) {
    return this.mailerService.update(+id, updateMailerDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Удалить рассылку' })
  remove(@Param('id') id: string) {
    return this.mailerService.remove(+id);
  }
}
