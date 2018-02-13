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
