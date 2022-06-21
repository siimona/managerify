import { CreateProductInput } from './create-product.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProductInput extends PartialType(CreateProductInput) {
  @Field(() => String, { description: 'id' })
  id: string;

  @Field(() => String, { description: 'name' })
  name: string;

  @Field(() => String, { description: 'description' })
  description: string;

  @Field(() => Int, { description: 'price' })
  price: number;

  @Field(() => String, { description: 'sku' })
  sku: string;

  @Field(() => Int, { description: 'weight' })
  weight: number;

  @Field(() => String, { description: 'provider' })
  provider: string;

  @Field(() => String, { description: 'unit' })
  unit: string;

  @Field(() => Int, { description: 'stock' })
  stock: number;
}
