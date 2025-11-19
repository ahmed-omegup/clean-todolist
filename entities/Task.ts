export type Status = 'pending' | 'in-progress' | 'completed';

export interface TaskEntity {
    title: string;
    description: string;
    status: Status;
    date: Date;
}

