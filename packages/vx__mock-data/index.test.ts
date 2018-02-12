import { genDateValue } from '@vx/mock-data';
import * as mockData from '@vx/mock-data';

it('genDateValue', () => {
  let mock = genDateValue(5);
  expect(mock).toHaveLength(5);
  expect(mock[0]).toHaveProperty('date');
  expect(mock[0]).toHaveProperty('value');
});
