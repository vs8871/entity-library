import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'order_info' })
export class OrderInfo {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer', name: 'new_product_id' })
    newProductId: number;

    @Column({ type: 'date', name: 'delivery_date' })
    deliveryDate: date;

    @Column({ type: 'varchar', name: 'new_quantity' })
    newQuantity: string;

    @Column({ type: 'integer', name: 'feedback' })
    feedback: number;

    @Column({ type: 'varchar', name: 'address' })
    address: string;
}