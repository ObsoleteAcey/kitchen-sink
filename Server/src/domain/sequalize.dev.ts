  
import {Sequelize} from 'sequelize-typescript';

export const sequelize = new Sequelize({
  dialect: 'sqlite',
  database: 'kitchensink',
  storage: ':memory:',
  models: [__dirname + '/models']
});