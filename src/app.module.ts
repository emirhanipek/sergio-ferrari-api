import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './db/database.module';
import { CategoryModule } from './category/category.module';
import { ProductModule } from './product/product.module';
import { ConsumerReturnModule } from './consumer-return/consumer-return.module';

@Module({
  imports: [DatabaseModule, CategoryModule, ProductModule, ConsumerReturnModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
