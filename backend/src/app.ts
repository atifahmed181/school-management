import express, { Request, Response, NextFunction } from 'express';
import { sequelize, Role } from './models';
import authRoutes from './routes/auth';
import { config } from './config';

const app = express();
app.use(express.json());

app.use('/api/auth', authRoutes);

sequelize.sync({ force: true }).then(async () => {
  console.log('Tables created');
  await Role.findOrCreate({ where: { name: 'admin' } });
  await Role.findOrCreate({ where: { name: 'user' } });
  console.log('Roles seeded');
  sequelize.authenticate()
    .then(() => {
      console.log('DB connected');
      app.listen(config.port, () => console.log(`Server on port ${config.port}`));
    })
    .catch(console.error);
});