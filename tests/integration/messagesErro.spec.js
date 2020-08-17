const request = require('supertest');
const app = require('../../src/app');

describe('Error Handling', () => {
  it('shold be return a message must be returned requiring the "fistNumber" field', async () => {
    const response = await request(app).post('/soma').send({
      secondNumber: '00000011',
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('"fistNumber" is required');
  });

  it('shold be return a message must be returned requiring the "secondNumber" field', async () => {
    const response = await request(app).post('/soma').send({
      fistNumber: '00000011',
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('"secondNumber" is required');
  });

  it('shold be request fistNumber between 0 and 255', async () => {
    const response = await request(app).post('/soma').send({
      fistNumber: '100000000',
      secondNumber: '00000011',
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('the fistNumber must be 0 to 255');
  });

  it('shold be request secondNumber between 0 and 255', async () => {
    const response = await request(app).post('/soma').send({
      fistNumber: '00000011',
      secondNumber: '100000000',
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('the secondNumber must be 0 to 255');
  });

  it('shold be request secondNumber cannot be greater than the fistNumber in /subtracao', async () => {
    const response = await request(app).post('/subtracao').send({
      fistNumber: '00000001',
      secondNumber: '00000010',
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'the second number cannot be greater than the first in this operation'
    );
  });

  it('shold be request secondNumber cannot be greater than the fistNumber in /divisao', async () => {
    const response = await request(app).post('/divisao').send({
      fistNumber: '00000001',
      secondNumber: '00000010',
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'the second number cannot be greater than the first in this operation'
    );
  });

  it('shold be request secondNumber cannot be greater than the fistNumber in /resto', async () => {
    const response = await request(app).post('/resto').send({
      fistNumber: '00000001',
      secondNumber: '00000010',
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe(
      'the second number cannot be greater than the first in this operation'
    );
  });
});
