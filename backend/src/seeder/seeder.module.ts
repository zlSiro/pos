import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from '../config/typeorm.config';
import { SeederService } from './seeder.service';
import { Product } from '../products/entities/product.entity';
import { Category } from '../categories/entities/category.entity';

@Module({
  imports: [
      ConfigModule.forRoot({
        isGlobal: true
      }),
      TypeOrmModule.forRootAsync({
        useFactory: typeOrmConfig,
        inject: [ConfigService]
      }),
      TypeOrmModule.forFeature([Product, Category])
    ],
  providers: [SeederService]
})
export class SeederModule {}
