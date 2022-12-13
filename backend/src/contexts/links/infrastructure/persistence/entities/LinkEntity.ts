import { Entity, Column, PrimaryGeneratedColumn, Generated } from "typeorm"
import { LinkDto } from "../../../domain/models/LinkDto";

@Entity('links')
export class LinkEntity implements LinkDto {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    @Generated("uuid")
    uuid: string;

    @Column()
    title:string;

    @Column()
    link:string;

    @Column()
    image:string;

    @Column()
    date: Date;

    @Column()
    username:string;

    @Column()
    categories:string;
}