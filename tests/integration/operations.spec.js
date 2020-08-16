const request = require('supertest');
const app = require('../../src/app');

describe('Math operations', () => {
  it('shold be return the sum of two numbers in binary', async () => {
    const response = await request(app).post('/soma').send({
      fistNumber: '00000001',
      secondNumber: '00000011',
    });

    expect(response.body).toBe('00000100');
  });

  it('shold be return the subtraction of two numbers in binary', async () => {
    const response = await request(app).post('/subtracao').send({
      fistNumber: '00000010',
      secondNumber: '00000001',
    });

    expect(response.body).toBe('00000001');
  });

  it('shold be return the multiplication of two numbers in binary', async () => {
    const response = await request(app).post('/multiplicacao').send({
      fistNumber: '00000001',
      secondNumber: '00000011',
    });

    expect(response.body).toBe('00000011');
  });

  it('shold be return the division of two numbers in binary', async () => {
    const response = await request(app).post('/divisao').send({
      fistNumber: '00001000',
      secondNumber: '00000010',
    });

    expect(response.body).toBe('00000100');
  });

  it('should be returning to the rest of the division of two numbers into binary', async () => {
    const response = await request(app).post('/resto').send({
      fistNumber: '00010100',
      secondNumber: '00000011',
    });

    expect(response.body).toBe('00000010');
  });
});
