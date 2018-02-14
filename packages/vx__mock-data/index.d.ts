export interface DateValue {
  date: Date;
  value: number;
}
export function genDateValue(n: number): DateValue[];

export function genRandomNormalPoints(count: number): [number, number, number][];

export interface Bin {
  bin: number;
  count: number;
}
export interface BinFunc {
  (index: number, count: number): number;
}
export interface CountFunc {
  (index: number, count: number): number;
}
export function genBin(n: number, bin?: BinFunc, count?: CountFunc): Bin[];

export interface Bins {
  bin: number;
  bins: Bin[];
}
export function genBins(x: number, y: number, bin?: BinFunc, count?: CountFunc): Bins[];

export interface BoxPlot {
  x: string;
  min: number;
  firstQuartile: number;
  median: number;
  thirdQuartile: number;
  max: number;
  outliers: number[];
}
export interface StatsBin {
  count: number;
  value: number;
}
export interface Stats {
  boxPlot: BoxPlot;
  binData: StatsBin[];
}
export function genStats(number: number): Stats[];

export const appleStock: { date: string; close: number; }[];
export const letterFrequency: { letter: string; frequency: number; }[];

export interface BrowserUsage {
  date: string;
  'Google Chrome': string;
  'Internet Explorer': string;
  Firefox: string;
  Safari: string;
  'Microsoft Edge': string;
  Opera: string;
  Mozilla: string;
  'Other/Unknown': string;
}
export const browserUsage: BrowserUsage[];

export const groupDateValue: { key: string; value: string; date: string; }[];

export interface CityTemperature {
  date: string;
  'New York': string;
  'San Francisco': string;
  Austin: string;
}
export const cityTemperature: CityTemperature[];

export interface LesMiserablesNode {
  id: string;
  group: number;
}
export interface LesMiserablesLinks {
  source: string;
  target: string;
  value: number;
}
export interface LesMiserables {
  nodes: LesMiserablesNode[];
  links: LesMiserablesLinks[];
}
export const lesMiserables: { letter: string; frequency: number; }[];

export interface Exoplanet {
  name: string;
  radius: string;
  distance: string
}
export const exoplanets: Exoplanet[];
export const planets: Exoplanet[];
export const shakespeare: { id: string; parent: string, size: number | null; }[];
