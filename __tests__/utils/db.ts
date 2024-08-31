import { AppDataSource } from "../../src/database";

export const setupDb = async () => {
  return AppDataSource.initialize();
};
