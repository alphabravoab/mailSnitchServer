
import { BaseEntity, PrimaryColumn,  Entity, Column } from 'typeorm'


@Entity()
export default class Device extends BaseEntity {

    @Column('uuid')
    @PrimaryColumn({type:"uuid"})
    id: string

    @Column('text')
    owner: string
}