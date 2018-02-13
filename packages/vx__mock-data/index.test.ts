import { genDateValue } from '@vx/mock-data';
import * as mockData from '@vx/mock-data';

it('genDateValue', () => {
  let mock = genDateValue(5);
  expect(mock).toHaveLength(5);
  expect(mock[0]).toHaveProperty('date');
  expect(mock[0]).toHaveProperty('value');
});

it('genRandomNormalPoints', () => {
  let res = mockData.genRandomNormalPoints(10);
  expect(res).toHaveLength(30);
  expect(typeof res[0][0]).toEqual('number');
  expect(typeof res[0][1]).toEqual('number');
  expect(typeof res[0][2]).toEqual('number');
});

it('genBin', () => {
  let res = mockData.genBin(10);
  expect(typeof res[0].bin).toEqual('number');
  expect(typeof res[0].count).toEqual('number');
});

it('genBins', () => {
  let res = mockData.genBins(10, 10);
  expect(res).toHaveLength(10);
  expect(typeof res[0].bin).toEqual('number');
  expect(res[0].bins).toHaveLength(10);
  expect(typeof res[0].bins[0].bin).toEqual('number');
  expect(typeof res[0].bins[0].count).toEqual('number');
});

it('genStats', () => {
  let res = mockData.genBins(10, 10);
  expect(res).toHaveLength(10);
  expect(typeof res[0].bin).toEqual('number');
  expect(res[0].bins).toHaveLength(10);
  expect(typeof res[0].bins[0].bin).toEqual('number');
  expect(typeof res[0].bins[0].count).toEqual('number');
});

it('hoge', () => {
  let res = (mockData as any).genStats(10);
  console.log(res);
});
