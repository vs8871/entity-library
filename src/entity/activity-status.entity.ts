import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity({ name: 'activity_status' })
export class ActivityStatus {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'integer', name: 'user_id' })
    userId: number;

    @Column({ type: 'date', name: 'action_date' })
    actionDate: date;

    @Column({ type: 'text', name: 'action' })
    action: string;

    @Column({ type: 'text', name: 'module' })
    module: string;
}