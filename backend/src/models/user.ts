import {
    Table, Column, Model, DataType, ForeignKey, BelongsTo, CreatedAt, UpdatedAt, PrimaryKey, AutoIncrement
  } from 'sequelize-typescript';
  import { Role } from './role';
  
  @Table({ tableName: 'users' })
  export class User extends Model<User> {
    @PrimaryKey
    @AutoIncrement
    @Column(DataType.INTEGER)
    id!: number;
  
    @Column({ type: DataType.STRING, allowNull: false })
    name!: string;
  
    @Column({ type: DataType.STRING, unique: true, allowNull: false })
    email!: string;
  
    @Column({ field: 'password_hash', type: DataType.TEXT, allowNull: false })
    passwordHash!: string;
  
    @ForeignKey(() => Role)
    @Column({ field: 'role_id', type: DataType.INTEGER })
    roleId!: number;
  
    @BelongsTo(() => Role)
    role!: Role;
  
    @CreatedAt createdAt!: Date;
    @UpdatedAt updatedAt!: Date;
  }