import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field(() => String, { description: 'name' })
  name: string;

  @Field(() => String, { description: 'email' })
  email: string;

  @Field(() => String, { description: 'password' })
  password: string;

  @Field(() => String, { description: 'phone' })
  phone: string;
}
