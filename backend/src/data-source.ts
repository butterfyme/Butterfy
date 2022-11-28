import { DataSource } from "typeorm"
import "reflect-metadata";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "db",
    port: 5432,
    username: "user",
    password: "password",
    database: "db",
    synchronize: true,
    logging: true,
    entities: [__dirname + '/contexts/users/infrastructure/persistence/entities/*.{ts,js}'],
    subscribers: [],
    migrations: [],
})