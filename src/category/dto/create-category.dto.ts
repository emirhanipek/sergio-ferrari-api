import { IsString, IsNotEmpty, IsOptional, IsNumber, IsEnum } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  kategoriAdi: string;

  @IsString()
  @IsNotEmpty()
  urlSlug: string;

  @IsString()
  @IsOptional()
  kategoriAciklamasi?: string;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  ustKategoriId?: number;

  @IsNumber()
  @IsOptional()
  @Type(() => Number)
  sira?: number;

  @IsString()
  @IsOptional()
  kategoriGorseli?: string;

  @IsEnum(['aktif', 'pasif'])
  @IsOptional()
  kategoriDurumu?: 'aktif' | 'pasif';
}
