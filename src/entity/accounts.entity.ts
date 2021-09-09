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

    @Column({ type: 'timestamp', name: 'created_on' })
    createdOn: date;

    @Column({ type: 'timestamp', name: 'last_login' })
    lastLogin: date;

    @Column({ type: 'varchar', name: 'dispatch_location' })
    dispatchLocation: string;
}