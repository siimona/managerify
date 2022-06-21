import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AutoMap } from '@automapper/classes';
import { IsNotEmpty } from 'class-validator';

@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdOn: Date;

  @UpdateDateColumn()
  modifiedOn: Date;

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

  @Column({ nullable: true })
  stock: number;
}
