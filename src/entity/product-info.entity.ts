import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'product_info' })
export class ProductInfo {

    @PrimaryGeneratedColumn()
    id: number;


    @Column({ type: 'date', name: 'receving_date' })
    recevingDate: date;

    @Column({ type: 'integer', name: 'items' })
    items: number;

    @Column({ type: 'text', name: 'comment' })
    comment: string;


    @Column({ type: 'varchar', name: 'bar_code' })
    barCode: string;


    @Column({ type: 'varchar', name: 'serial_number' })
    serialNumber: string;


    @Column({ type: 'varchar', name: 'product_serial_number' })
    productSerialNumber: string;



    @Column({ type: 'int', name: 'product_serial_id' })
    productSerialId: number;

}