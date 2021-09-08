import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'shipment_information' })
export class ShipmentInformation {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer', name: 'ship_id' })
    shipId: number;


    @Column({ type: 'date', name: 'shipping_date' })
    shippingDate: date;

    @Column({ type: 'integer', name: 'no_of_item' })
    noOfItem: number;

    @Column({ type: 'text', name: 'container' })
    container: string;

    @Column({ type: 'text', name: 'new_yard_name' })
    newYardName: string;

    @Column({ type: 'text', name: 'parking_name' })
    parkingName: string;

    @Column({ type: 'text', name: 'delivery_yard' })
    deliveryYard: string;


    @Column({ type: 'varchar', name: 'container_number' })
    containerNumber: string;

}