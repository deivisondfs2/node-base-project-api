import Sequelize from 'sequelize';

import User from '../models/User';

import configDataBase from '../config/database';

class DataBase {
  constructor() {
    this.models = [User];
    this.init();
  }

  init() {
    this.connect = new Sequelize(configDataBase[process.env.NODE_ENV]);

    this.models
      .map((model) => model.init(this.connect))
      .map((model) => model.associate && model.associate(this.connect.models));
  }
}

export default new DataBase();
