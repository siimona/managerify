import { Column, Entity } from 'typeorm';
import { BaseEntity } from './baseEntity';
import { AutoMap } from '@automapper/classes';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class ProductSlk extends BaseEntity {
  @AutoMap()
  @IsNotEmpty()
  @Column({ unique: true })
  name: string;

  @AutoMap()
  @Column({ nullable: true })
  info: string;

  @AutoMap()
  @Column({ nullable: true })
  price: number;

  @AutoMap()
  @IsNotEmpty()
  @Column({ nullable: false })
  sku: string;

  @AutoMap()
  @Column({ nullable: true })
  stock: number;

  @AutoMap()
  @Column({ nullable: true })
  weight: number;

  @AutoMap()
  @Column({ nullable: true })
  provider: string;

  @AutoMap()
  @Column({ nullable: true })
  category: string;

  @Column({ type: 'tinyint', nullable: true })
  sent: number;
}
