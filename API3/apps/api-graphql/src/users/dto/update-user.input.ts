import { CreateUserInput } from './create-user.input';
import { InputType, Field, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => String, { description: 'name' })
  name: string;

  @Field(() => String, { description: 'email' })
  email: string;

  @Field(() => String, { description: 'password' })
  password: string;

  @Field(() => String, { description: 'phone' })
  phone: string;
}
