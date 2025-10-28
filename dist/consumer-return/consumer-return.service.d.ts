import { Repository } from 'typeorm';
import { ConsumerReturn } from '../entities/consumer-return.entity';
import { CreateConsumerReturnDto } from './dto/create-consumer-return.dto';
import { UpdateConsumerReturnDto } from './dto/update-consumer-return.dto';
export declare class ConsumerReturnService {
    private consumerReturnRepository;
    constructor(consumerReturnRepository: Repository<ConsumerReturn>);
    create(createConsumerReturnDto: CreateConsumerReturnDto): Promise<ConsumerReturn>;
    findAll(): Promise<ConsumerReturn[]>;
    findByStatus(durum: 'bekliyor' | 'okundu' | 'cevaplandı'): Promise<ConsumerReturn[]>;
    findOne(id: number): Promise<ConsumerReturn>;
    update(id: number, updateConsumerReturnDto: UpdateConsumerReturnDto): Promise<ConsumerReturn>;
    updateStatus(id: number, durum: 'bekliyor' | 'okundu' | 'cevaplandı'): Promise<ConsumerReturn>;
    remove(id: number): Promise<void>;
}
