import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Meal extends BaseEntity {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  title!: string;

  @Column()
  image!: string;

  @Column()
  summary!: string;

  @Column("text")
  instructions!: string;

  @Column()
  creator!: string;

  @Column()
  creator_email!: string;

  @Column()
  password!: string;
}
