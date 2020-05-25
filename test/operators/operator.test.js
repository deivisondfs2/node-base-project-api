import operatorHelper from '../../src/lib/operatorHelper';

describe('Test operator functions', () => {
  test('should return sum numbers', () => {
    expect(operatorHelper(2, 4).sum()).toBe(6);
  });

  test('check sum is invalid', () => {
    expect(operatorHelper(2, 2).sum()).not.toBe(5);
  });

  test('should is true', () => {
    const checkTrue = operatorHelper(2, 2).sum() === 4;

    expect(checkTrue).toBeTruthy();
  });

  test('result sum float numbers', () => {
    const floatResult = operatorHelper(0.5, 0.3).sum();
    expect(floatResult).toBeCloseTo(0.8);
  });

  test('should show the throw', () => {
    expect(() => {
      operatorHelper(-6, -3).sum();
    }).toThrow();

    expect(() => {
      operatorHelper(-6, -3).sum();
    }).toThrow(/invalid number/i);
  });
});
