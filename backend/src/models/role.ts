import { Table, Column, Model, DataType, HasMany, PrimaryKey, AutoIncrement } from 'sequelize-typescript';
import { User } from './user';

@Table({ tableName: 'roles' })
export class Role extends Model<Role> {
  @PrimaryKey
  @AutoIncrement
  @Column(DataType.INTEGER)
  id!: number;

  @Column({ type: DataType.STRING, unique: true, allowNull: false })
  name!: string;

  @HasMany(() => User)
  users!: User[];
}