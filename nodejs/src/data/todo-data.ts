import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from "typeorm";

@Entity("todo")
export class TodoData {
  @PrimaryGeneratedColumn()
  id: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @Column({ type: "timestamptz" })
  deadlineAt: Date;

  @Column("text")
  title: string;

  @Column("text")
  description: string;

  @Column({ type: "bool", default: false })
  isDone: boolean;
}
