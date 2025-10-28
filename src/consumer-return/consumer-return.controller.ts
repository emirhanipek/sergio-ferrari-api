import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Query,
} from '@nestjs/common';
import { ConsumerReturnService } from './consumer-return.service';
import { CreateConsumerReturnDto } from './dto/create-consumer-return.dto';
import { UpdateConsumerReturnDto } from './dto/update-consumer-return.dto';

@Controller('consumer-returns')
export class ConsumerReturnController {
  constructor(
    private readonly consumerReturnService: ConsumerReturnService,
  ) {}

  @Post()
  create(@Body() createConsumerReturnDto: CreateConsumerReturnDto) {
    return this.consumerReturnService.create(createConsumerReturnDto);
  }

  @Get()
  findAll(@Query('durum') durum?: 'bekliyor' | 'okundu' | 'cevaplandı') {
    if (durum) {
      return this.consumerReturnService.findByStatus(durum);
    }
    return this.consumerReturnService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.consumerReturnService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateConsumerReturnDto: UpdateConsumerReturnDto,
  ) {
    return this.consumerReturnService.update(+id, updateConsumerReturnDto);
  }

  @Patch(':id/status')
  updateStatus(
    @Param('id') id: string,
    @Body('durum') durum: 'bekliyor' | 'okundu' | 'cevaplandı',
  ) {
    return this.consumerReturnService.updateStatus(+id, durum);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.consumerReturnService.remove(+id);
  }
}
