import { ConsumerReturnService } from './consumer-return.service';
import { CreateConsumerReturnDto } from './dto/create-consumer-return.dto';
import { UpdateConsumerReturnDto } from './dto/update-consumer-return.dto';
export declare class ConsumerReturnController {
    private readonly consumerReturnService;
    constructor(consumerReturnService: ConsumerReturnService);
    create(createConsumerReturnDto: CreateConsumerReturnDto): Promise<import("../entities/consumer-return.entity").ConsumerReturn>;
    findAll(durum?: 'bekliyor' | 'okundu' | 'cevaplandı'): Promise<import("../entities/consumer-return.entity").ConsumerReturn[]>;
    findOne(id: string): Promise<import("../entities/consumer-return.entity").ConsumerReturn>;
    update(id: string, updateConsumerReturnDto: UpdateConsumerReturnDto): Promise<import("../entities/consumer-return.entity").ConsumerReturn>;
    updateStatus(id: string, durum: 'bekliyor' | 'okundu' | 'cevaplandı'): Promise<import("../entities/consumer-return.entity").ConsumerReturn>;
    remove(id: string): Promise<void>;
}
