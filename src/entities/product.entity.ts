import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import { Category } from './category.entity';
import { ProductImage } from './product-image.entity';

@Entity('products')
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  urunAdi: string;

  @Column({ type: 'int' })
  kategoriId: number;

  @ManyToOne(() => Category, (category) => category.urunler, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'kategoriId' })
  kategori: Category;

  @OneToMany(() => ProductImage, (image) => image.product, {
    cascade: true,
  })
  images: ProductImage[];

  @Column({ type: 'decimal', precision: 10, scale: 2 })
  fiyat: number;

  @Column({ type: 'int', default: 0 })
  stokAdedi: number;

  @Column({ type: 'varchar', length: 100, unique: true })
  stokKodu: string;

  @Column({ type: 'varchar', length: 100, nullable: true })
  renk: string;

  @Column({ type: 'varchar', length: 255, nullable: true })
  malzeme: string;

  @Column({ type: 'text', nullable: true })
  urunAciklamasi: string;

  @Column({ type: 'json', nullable: true })
  ozellikler: Record<string, any>;

  @Column({ type: 'enum', enum: ['aktif', 'pasif'], default: 'aktif' })
  durum: 'aktif' | 'pasif';

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
