import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'order_info' })
export class OrderInfo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer', name: 'Product_id' })
    productId: number;

    @Column({ type: 'date', name: 'Delivery_date' })
    deliveryDate: date;

    @Column({ type: 'integer', name: 'new_quantity' })
    newQuantity: number;

    @Column({ type: 'text', name: 'feedback' })
    feedback: string;

    @Column({ type: 'varchar', name: 'new_customer_id' })
    newCustomerId: string;
}
