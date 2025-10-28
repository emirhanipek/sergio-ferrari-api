import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ConsumerReturn } from '../entities/consumer-return.entity';
import { CreateConsumerReturnDto } from './dto/create-consumer-return.dto';
import { UpdateConsumerReturnDto } from './dto/update-consumer-return.dto';

@Injectable()
export class ConsumerReturnService {
  constructor(
    @InjectRepository(ConsumerReturn)
    private consumerReturnRepository: Repository<ConsumerReturn>,
  ) {}

  async create(
    createConsumerReturnDto: CreateConsumerReturnDto,
  ): Promise<ConsumerReturn> {
    const consumerReturn = this.consumerReturnRepository.create(
      createConsumerReturnDto,
    );
    return await this.consumerReturnRepository.save(consumerReturn);
  }

  async findAll(): Promise<ConsumerReturn[]> {
    return await this.consumerReturnRepository.find({
      order: { createdAt: 'DESC' },
    });
  }

  async findByStatus(
    durum: 'bekliyor' | 'okundu' | 'cevaplandı',
  ): Promise<ConsumerReturn[]> {
    return await this.consumerReturnRepository.find({
      where: { durum },
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<ConsumerReturn> {
    const consumerReturn = await this.consumerReturnRepository.findOne({
      where: { id },
    });

    if (!consumerReturn) {
      throw new NotFoundException(`İade talebi ID ${id} bulunamadı`);
    }

    return consumerReturn;
  }

  async update(
    id: number,
    updateConsumerReturnDto: UpdateConsumerReturnDto,
  ): Promise<ConsumerReturn> {
    const consumerReturn = await this.findOne(id);
    Object.assign(consumerReturn, updateConsumerReturnDto);
    return await this.consumerReturnRepository.save(consumerReturn);
  }

  async updateStatus(
    id: number,
    durum: 'bekliyor' | 'okundu' | 'cevaplandı',
  ): Promise<ConsumerReturn> {
    const consumerReturn = await this.findOne(id);
    consumerReturn.durum = durum;
    return await this.consumerReturnRepository.save(consumerReturn);
  }

  async remove(id: number): Promise<void> {
    const consumerReturn = await this.findOne(id);
    await this.consumerReturnRepository.remove(consumerReturn);
  }
}
