import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'order_info' })
export class OrderInfo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer', name: 'product_id' })
    productId: number;

    @Column({ type: 'date', name: 'delivery_date' })
    deliveryDate: date;

    @Column({ type: 'integer', name: 'quantity' })
    quantity: number;

    @Column({ type: 'text', name: 'feedback' })
    feedback: string;
}