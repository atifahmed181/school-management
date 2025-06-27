import { Sequelize } from 'sequelize-typescript';
import { config } from '../config';
import { User } from './user';
import { Role } from './role';
// … import other models

export const sequelize = new Sequelize({
  dialect: 'postgres',
  host: config.db.host,
  port: config.db.port,
  database: config.db.database,
  username: config.db.username,
  password: config.db.password,
  models: [Role, User /*, …others*/],
});

export { User, Role };