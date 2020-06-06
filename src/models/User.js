import Sequelize, { Model } from 'sequelize';

class User extends Model {
  static init(sequelize) {
    super.init(
      {
        first_name: Sequelize.STRING,
        last_name: Sequelize.STRING,
        email: Sequelize.STRING
      },
      {
        sequelize,
        tableName: 'users',
        underscored: true
      }
    );

    return this;
  }
}

export default User;
