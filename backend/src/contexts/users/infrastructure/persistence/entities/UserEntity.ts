import { Entity, Column, PrimaryGeneratedColumn } from "typeorm"
import { UserDto } from "../../../domain/models/UserDto";

@Entity('users')
export class UserEntity implements UserDto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    username: string;

    @Column()
    password: string;
}