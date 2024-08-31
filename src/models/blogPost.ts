import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class BlogPost {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  featureImage: string;

  @Column()
  mainContent: string;

  @Column()
  excerpt: string;

  @Column()
  category: string;
}
