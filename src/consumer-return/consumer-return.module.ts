import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConsumerReturnService } from './consumer-return.service';
import { ConsumerReturnController } from './consumer-return.controller';
import { ConsumerReturn } from '../entities/consumer-return.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ConsumerReturn])],
  controllers: [ConsumerReturnController],
  providers: [ConsumerReturnService],
  exports: [ConsumerReturnService],
})
export class ConsumerReturnModule {}
