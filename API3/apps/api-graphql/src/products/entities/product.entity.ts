import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String, { description: 'id' })
  id: string;

  @Column()
  @Field(() => Date, { description: 'createdOn' })
  createdOn: Date;

  @Column()
  @Field(() => Date, { description: 'modifiedOn' })
  modifiedOn: Date;

  @Column()
  @Field(() => String, { description: 'name' })
  name: string;

  @Column()
  @Field(() => String, { description: 'description' })
  description: string;

  @Column()
  @Field(() => Int, { description: 'price' })
  price: number;

  @Column()
  @Field(() => String, { description: 'sku' })
  sku: string;

  @Column()
  @Field(() => Int, { description: 'weight' })
  weight: number;

  @Column()
  @Field(() => String, { description: 'provider' })
  provider: string;

  @Column()
  @Field(() => String, { description: 'unit' })
  unit: string;

  @Column()
  @Field(() => Int, { description: 'stock' })
  stock: number;
}
