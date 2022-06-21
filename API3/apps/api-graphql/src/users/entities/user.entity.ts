import { ObjectType, Field } from '@nestjs/graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
@ObjectType()
export class User {
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
  @Field(() => String, { description: 'email' })
  email: string;

  @Column()
  @Field(() => String, { description: 'password' })
  password: string;

  @Column()
  @Field(() => String, { description: 'phone' })
  phone: string;
}
