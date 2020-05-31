import Sequelize from 'sequelize';

import User from '../models/User';

import configDataBase from '../config/database';

class DataBase {
  constructor() {
    this.models = [User];
    this.init();
  }

  init() {
    this.connect = new Sequelize(configDataBase);

    this.models.map((model) => model.init(this.connect));
  }
}

export default new DataBase();
