import { MssqlLibraryModule } from '@app/mssql-library';
import { PgLibraryModule } from '@app/pg-library';
import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { BullModule } from '@nestjs/bull';
import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MessageProducerService } from './message.producer.service';
import { ProductMobController } from './product-mob/product-mob.controller';
import { ProductMobService } from './product-mob/product-mob.service';
import { ProductSlkController } from './product-slk/product-slk.controller';
import { ProductSlkService } from './product-slk/product-slk.service';
@Module({
  imports: [
    BullModule.forRoot({
      redis: {
        host: 'redis',
        port: 6379,
      },
    }),
    BullModule.registerQueue({
      name: 'message-queue',
    }),
    AutomapperModule.forRoot({
      options: [{ name: 'classes', pluginInitializer: classes }],
      singular: true,
    }),
    ScheduleModule.forRoot(),
    PgLibraryModule,
    MssqlLibraryModule,
  ],
  controllers: [ProductMobController, ProductSlkController, AppController],
  providers: [
    AppService,
    MessageProducerService,
    ProductMobService,
    ProductSlkService,
  ],
})
export class AppModule {}
