import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageConsumer } from './message.consumer';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { BullModule } from '@nestjs/bull';
import { ProductModule } from './product/product.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';
import { Product } from './product/entity/product.entity';

@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'localhost',
        port: 5003,
      },
    }),
    BullModule.registerQueue({
      name: 'message-queue',
    }),
    AutomapperModule.forRoot({
      options: [{ name: 'classes', pluginInitializer: classes }],
      singular: true,
    }),
    ConfigModule.forRoot({ isGlobal: true }),
    ProductModule,
    TypeOrmModule.forRoot({
      type: 'postgres' as const,
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'productsDb',
      entities: [Product],
      migrationsRun: false,
      logging: true,
      migrationsTableName: 'migrations',
      synchronize: false,
    }),
  ],

  controllers: [AppController],
  providers: [AppService, ConfigService, MessageConsumer],
})
export class AppModule {}
