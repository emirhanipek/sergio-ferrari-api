import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseInterceptors,
  UploadedFiles,
  Query,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import {
  productImageStorage,
  imageFileFilter,
} from '../utils/file-upload.config';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Post()
  create(@Body() createProductDto: CreateProductDto) {
    return this.productService.create(createProductDto);
  }

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productService.findOne(+id);
  }

  @Get('category/:categoryId')
  findByCategory(@Param('categoryId') categoryId: string) {
    return this.productService.findByCategory(+categoryId);
  }

  @Get('stock/:stokKodu')
  findByStockCode(@Param('stokKodu') stokKodu: string) {
    return this.productService.findByStockCode(stokKodu);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProductDto: UpdateProductDto) {
    return this.productService.update(+id, updateProductDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productService.remove(+id);
  }

  @Post(':id/images')
  @UseInterceptors(
    FilesInterceptor('images', 6, {
      storage: productImageStorage,
      fileFilter: imageFileFilter,
    }),
  )
  async uploadImages(
    @Param('id') id: string,
    @UploadedFiles() files: Array<Express.Multer.File>,
    @Query('isMain') isMain?: string,
  ) {
    const imagePaths = files.map(
      (file) => `/images/products/${file.filename}`,
    );
    const isMainImage = isMain === 'true';
    return this.productService.addImages(+id, imagePaths, isMainImage);
  }

  @Delete(':id/images/:imageId')
  async removeImage(
    @Param('id') id: string,
    @Param('imageId') imageId: string,
  ) {
    return this.productService.removeImage(+id, +imageId);
  }

  @Patch(':id/images/:imageId/set-main')
  async setMainImage(
    @Param('id') id: string,
    @Param('imageId') imageId: string,
  ) {
    return this.productService.setMainImage(+id, +imageId);
  }
}
