/* eslint-disable arrow-body-style */
import database from '../../src/database';

const truncate = () => {
  return Promise.all(
    Object.keys(database.connect.models).map((key) => {
      return database.connect.models[key].destroy({
        truncate: true,
        force: true
      });
    })
  );
};

export default truncate;
