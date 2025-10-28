import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('consumer_returns')
export class ConsumerReturn {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 100 })
  ad: string;

  @Column({ type: 'varchar', length: 100 })
  soyad: string;

  @Column({ type: 'varchar', length: 255 })
  eposta: string;

  @Column({ type: 'varchar', length: 20 })
  telefon: string;

  @Column({ type: 'varchar', length: 255 })
  konu: string;

  @Column({ type: 'text' })
  mesaj: string;

  @Column({ type: 'enum', enum: ['bekliyor', 'okundu', 'cevaplandı'], default: 'bekliyor' })
  durum: 'bekliyor' | 'okundu' | 'cevaplandı';

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
