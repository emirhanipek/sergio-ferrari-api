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
import { Product } from './product.entity';

@Entity('categories')
export class Category {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255 })
  kategoriAdi: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  urlSlug: string;

  @Column({ type: 'text', nullable: true })
  kategoriAciklamasi: string;

  @Column({ type: 'int', nullable: true })
  ustKategoriId: number;

  @ManyToOne(() => Category, (category) => category.altKategoriler, {
    nullable: true,
    onDelete: 'SET NULL',
  })
  @JoinColumn({ name: 'ustKategoriId' })
  ustKategori: Category;

  @OneToMany(() => Category, (category) => category.ustKategori)
  altKategoriler: Category[];

  @Column({ type: 'int', default: 0 })
  sira: number;

  @Column({ type: 'varchar', length: 500, nullable: true })
  kategoriGorseli: string;

  @Column({ type: 'enum', enum: ['aktif', 'pasif'], default: 'aktif' })
  kategoriDurumu: 'aktif' | 'pasif';

  @OneToMany(() => Product, (product) => product.kategori)
  urunler: Product[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
