import { Column, Entity } from 'typeorm';
import { BaseEntity } from './baseEntity';
import { AutoMap } from '@automapper/classes';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class ProductMob extends BaseEntity {
  @AutoMap()
  @IsNotEmpty()
  @Column({ unique: true })
  name: string;

  @AutoMap()
  @Column({ nullable: true })
  description: string;

  @AutoMap()
  @Column({ nullable: true })
  price: number;

  @AutoMap()
  @IsNotEmpty()
  @Column({ nullable: false })
  sku: string;

  @AutoMap()
  @Column({ nullable: true })
  weight: number;

  @AutoMap()
  @Column({ nullable: true })
  provider: string;

  @AutoMap()
  @Column({ nullable: true })
  unit: string;

  @AutoMap()
  @Column({ nullable: true })
  category: string;

  @Column({ nullable: true })
  sent: boolean;
}
