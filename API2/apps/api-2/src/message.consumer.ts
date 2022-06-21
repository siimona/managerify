import { Process, Processor } from '@nestjs/bull';
import { Job } from 'bull';
import { ProductService } from './product/product.service';

@Processor('message-queue')
export class MessageConsumer {
  constructor(private productService: ProductService) {}

  @Process('message-job')
  async readOperationJob(
    job: Job<{ message: string; productType: string; productId: string }>,
  ) {
    if (job.data) {
      console.log(job.data);
      const product = await this.productService.getProduct(
        job.data.productId,
        job.data.productType,
      );
      await this.productService.save(product);
    }
  }
}
