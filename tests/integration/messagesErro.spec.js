const request = require('supertest');
const app = require('../../src/app');

describe('Error Handling', () => {
  it('shold be return a message must be returned requiring the "fistNumber" field', async () => {
    const response = await request(app).post('/soma').send({
      secondNumber: '00000011',
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Bad Request');
    expect(response.body.message).toBe('"fistNumber" is required');
  });

  it('shold be return a message must be returned requiring the "secondNumber" field', async () => {
    const response = await request(app).post('/soma').send({
      fistNumber: '00000011',
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('Bad Request');
    expect(response.body.message).toBe('"secondNumber" is required');
  });

  it('shold be error', async () => {
    const response = await request(app).post('/soma').send({
      fistNumber: '100000000',
      secondNumber: '00000011',
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('the fistNumber must be 0 to 255');
  });

  it('shold be error 2', async () => {
    const response = await request(app).post('/soma').send({
      fistNumber: '00000011',
      secondNumber: '100000000',
    });

    expect(response.status).toBe(400);
    expect(response.body.error).toBe('the secondNumber must be 0 to 255');
  });
});
