import { BaseEntity, Column, CreateDateColumn, DeleteDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Geometry } from 'geojson';

@Entity('address')
export class Address extends BaseEntity{
    @PrimaryGeneratedColumn('uuid')
    uuid: string

    @Column('simple-json')
    location: {
        origin: string,
        latitude: number,
        longitude: number
    }

    @Column()
    address_notes: string

    @CreateDateColumn({
        type: 'timestamp'
    })
    created_at: Date

    @UpdateDateColumn({
        type: 'timestamp'
    })
    updated_at: Date

    @DeleteDateColumn({
        type: 'timestamp'
    })
    deleted_at: Date
}