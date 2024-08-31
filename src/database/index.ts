import "reflect-metadata";
import { DataSource } from "typeorm";
import { BlogPost } from "../models/blogPost";
import * as dotenv from "dotenv";

dotenv.config();

export const AppDataSource = new DataSource(
  process.env.NODE_ENV === "test"
    ? {
        type: "sqlite",
        database: ":memory:",
        synchronize: true,
        entities: [BlogPost],
        dropSchema: true,
      }
    : {
        type: "postgres",
        host: process.env.DB_HOST,
        port: parseInt(process.env.DB_PORT || "5432"),
        username: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        synchronize: true,
        logging: false,
        entities: [BlogPost],
        migrations: [],
        subscribers: [],
      }
);
