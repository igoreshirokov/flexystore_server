import { Module } from '@nestjs/common';
import { CategoriesModule } from './categories/categories.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';
import { ProductsModule } from './products/products.module';
import { BannersModule } from './banners/banners.module';


// Пока нет базы все данные беруться из подготовленных объектов
@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: path.resolve(__dirname, 'static')
    }),
    CategoriesModule,
    ProductsModule, 
    BannersModule
  ],
})
export class AppModule { }
