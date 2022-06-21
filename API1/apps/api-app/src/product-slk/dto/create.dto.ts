import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class ProductSlkDto {
  @AutoMap()
  id?: number;

  @AutoMap()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @AutoMap()
  @ApiProperty()
  info: string;

  @AutoMap()
  @ApiProperty()
  price: number;

  @AutoMap()
  @IsNotEmpty()
  @ApiProperty()
  sku: string;

  @AutoMap()
  @ApiProperty()
  stock: number;

  @AutoMap()
  @ApiProperty()
  weight: number;

  @AutoMap()
  @ApiProperty()
  provider: string;

  @AutoMap()
  @ApiProperty()
  category: string;

  @AutoMap()
  @ApiProperty()
  sent: number;
}
