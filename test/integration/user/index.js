import request from 'supertest';
import app from '../../../src/app';
import truncate from '../../util/truncate';

describe('User', () => {
  beforeEach(async () => {
    await truncate();
  });

  it('should be able to register', async () => {
    const response = await request(app).post('/users/create').send({
      first_name: 'deivison',
      last_name: 'sales',
      email: 'deivisondfs@gmail.com'
    });

    expect(response.body).toHaveProperty('id');
  });
});
