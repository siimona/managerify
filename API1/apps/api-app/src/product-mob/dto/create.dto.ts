import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty } from 'class-validator';
import { AutoMap } from '@automapper/classes';

export class ProductMobDto {
  @AutoMap()
  id?: number;

  @AutoMap()
  @IsNotEmpty()
  @ApiProperty()
  name: string;

  @AutoMap()
  @ApiProperty()
  description: string;

  @AutoMap()
  @ApiProperty()
  price: number;

  @AutoMap()
  @IsNotEmpty()
  @ApiProperty()
  sku: string;

  @AutoMap()
  @ApiProperty()
  weight: number;

  @AutoMap()
  @ApiProperty()
  unit: string;

  @AutoMap()
  @ApiProperty()
  provider: string;

  @AutoMap()
  @ApiProperty()
  category: string;

  @AutoMap()
  @ApiProperty()
  sent: boolean;
}
