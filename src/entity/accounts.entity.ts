import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'accounts' })
export class Accounts {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar', name: 'username' })
    username: string;

    @Column({ type: 'varchar', name: 'password' })
    password: string;

    @Column({ type: 'varchar', name: 'email' })
    email: string;

    @Column({ type: 'integer', name: 'new_created_on' })
    newCreatedOn: number;

    @Column({ type: 'varchar', name: 'dispatch_location' })
    dispatchLocation: string;
}