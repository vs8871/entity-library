import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'product_info' })
export class ProductInfo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer', name: 'letter_id' })
    letterId: number;

    @Column({ type: 'date', name: 'receving_date' })
    recevingDate: date;

    @Column({ type: 'integer', name: 'items' })
    items: number;

    @Column({ type: 'text', name: 'comment' })
    comment: string;

    @Column({ type: 'varchar', name: 'address' })
    address: string;
}