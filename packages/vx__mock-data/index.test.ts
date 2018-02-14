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
  let res = mockData.genStats(10);
  expect(res).toHaveLength(10);
  expect(typeof res[0].binData[0].count).toEqual('number');
  expect(typeof res[0].binData[0].value).toEqual('number');
  expect(typeof res[0].boxPlot.x).toEqual('string');
  expect(typeof res[0].boxPlot.min).toEqual('number');
  expect(typeof res[0].boxPlot.outliers[0]).toEqual('number');
});

it('genStats', () => {
  let res = mockData.genStats(10);
  expect(res).toHaveLength(10);
  expect(typeof res[0].binData[0].count).toEqual('number');
  expect(typeof res[0].binData[0].value).toEqual('number');
  expect(typeof res[0].boxPlot.x).toEqual('string');
  expect(typeof res[0].boxPlot.min).toEqual('number');
  expect(typeof res[0].boxPlot.outliers[0]).toEqual('number');
});

it('appleStock', () => {
  let res = mockData.appleStock;
  expect(typeof res[0].date).toEqual('string');
  expect(typeof res[0].close).toEqual('number');
});

it('letterFrequency', () => {
  let res = mockData.letterFrequency;
  expect(typeof res[0].letter).toEqual('string');
  expect(typeof res[0].frequency).toEqual('number');
});

it('browserUsage', () => {
  let res = mockData.browserUsage;
  expect(typeof res[0].date).toEqual('string');
  expect(typeof res[0]['Google Chrome']).toEqual('string');
});
