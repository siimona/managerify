import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { Cron, CronExpression } from '@nestjs/schedule';
import { ProductMobService } from './product-mob/product-mob.service';
import { ProductSlkService } from './product-slk/product-slk.service';

@Injectable()
export class MessageProducerService {
  constructor(
    @InjectQueue('message-queue') private queue: Queue,
    private productMobService: ProductMobService,
    private productSlkService: ProductSlkService,
  ) {}

  async sendMessage(productType: string, id: string) {
    await this.queue
      .add('message-job', {
        message: 'New data is available in the database',
        productType: productType,
        productId: id,
      })
      .catch((err) => {
        console.log(err);
      });
  }

  async handleMobProducts() {
    const priductsMob = await this.productMobService.findUnsentProducts();
    if (priductsMob.length != 0) {
      priductsMob.forEach(async (productMob) => {
        await this.sendMessage(productMob.provider, productMob.id);
        productMob.sent = true;
        console.log('workssssssssssssssssssssssssssssssss');
        await this.productMobService.update(productMob);
      });
    }
  }

  async handleSlkProducts() {
    const productsSlk = await this.productSlkService.findUnsentProducts();
    if (productsSlk.length != 0) {
      productsSlk.forEach(async (productSlk) => {
        await this.sendMessage(productSlk.provider, productSlk.id);
        productSlk.sent = 1;
        await this.productSlkService.update(productSlk);
      });
    }
  }

  @Cron(CronExpression.EVERY_10_SECONDS)
  async handleProducts() {
    await this.handleMobProducts();
    await this.handleSlkProducts();
  }
}
