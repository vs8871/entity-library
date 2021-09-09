import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'user_log' })
export class UserLog {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer', name: 'user_id' })
    userId: number;

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
}