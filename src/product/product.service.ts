import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Product } from '../entities/product.entity';
import { ProductImage } from '../entities/product-image.entity';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(Product)
    private productRepository: Repository<Product>,
    @InjectRepository(ProductImage)
    private productImageRepository: Repository<ProductImage>,
  ) {}

  async create(createProductDto: CreateProductDto): Promise<Product> {
    const product = this.productRepository.create(createProductDto);
    return await this.productRepository.save(product);
  }

  async findAll(): Promise<Product[]> {
    return await this.productRepository.find({
      relations: ['kategori', 'images'],
      order: { createdAt: 'DESC' },
    });
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { id },
      relations: ['kategori', 'images'],
    });

    if (!product) {
      throw new NotFoundException(`Ürün ID ${id} bulunamadı`);
    }

    return product;
  }

  async findByCategory(categoryId: number): Promise<Product[]> {
    return await this.productRepository.find({
      where: { kategoriId: categoryId },
      relations: ['kategori', 'images'],
      order: { createdAt: 'DESC' },
    });
  }

  async findByStockCode(stokKodu: string): Promise<Product> {
    const product = await this.productRepository.findOne({
      where: { stokKodu },
      relations: ['kategori', 'images'],
    });

    if (!product) {
      throw new NotFoundException(`Stok kodu ${stokKodu} bulunamadı`);
    }

    return product;
  }

  async update(
    id: number,
    updateProductDto: UpdateProductDto,
  ): Promise<Product> {
    const product = await this.findOne(id);
    Object.assign(product, updateProductDto);
    return await this.productRepository.save(product);
  }

  async remove(id: number): Promise<void> {
    const product = await this.findOne(id);
    await this.productRepository.remove(product);
  }

  async addImages(
    id: number,
    imagePaths: string[],
    isMain: boolean = false,
  ): Promise<Product> {
    const product = await this.findOne(id);

    // If this is the main image, set all other images to non-main
    if (isMain) {
      await this.productImageRepository.update(
        { productId: id },
        { isMain: false },
      );
    }

    const images = imagePaths.map((path, index) => {
      const image = new ProductImage();
      image.productId = id;
      image.imagePath = path;
      image.sira = product.images ? product.images.length + index : index;
      image.isMain = isMain && index === 0;
      return image;
    });

    await this.productImageRepository.save(images);
    return await this.findOne(id);
  }

  async removeImage(id: number, imageId: number): Promise<Product> {
    const image = await this.productImageRepository.findOne({
      where: { id: imageId, productId: id },
    });

    if (!image) {
      throw new NotFoundException(`Görsel bulunamadı`);
    }

    await this.productImageRepository.remove(image);
    return await this.findOne(id);
  }

  async setMainImage(productId: number, imageId: number): Promise<Product> {
    // Set all images to non-main
    await this.productImageRepository.update(
      { productId },
      { isMain: false },
    );

    // Set the selected image as main
    const image = await this.productImageRepository.findOne({
      where: { id: imageId, productId },
    });

    if (!image) {
      throw new NotFoundException(`Görsel bulunamadı`);
    }

    image.isMain = true;
    await this.productImageRepository.save(image);

    return await this.findOne(productId);
  }
}
