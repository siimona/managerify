import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProductInput {
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
