import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'product_information' })
export class ProductInformation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer', name: 'letter_id' })
    letterId: number;

    @Column({ type: 'text', name: 'comment' })
    comment: string;
}