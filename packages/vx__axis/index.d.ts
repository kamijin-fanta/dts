import * as React from 'react';

export type AxisOrientation = "top" | 'left' | 'right' | 'bottom';

export interface AxisProps {
  axisClassName?: string;
  axisLineClassName?: string;
  hideAxisLine?: boolean;
  hideTicks?: boolean;
  hideZero?: boolean;
  label?: string;
  labelClassName?: string;
  labelOffset?: number;
  labelProps?: Object;
  left?: number;
  numTicks?: number;
  orientation?: AxisOrientation;
  rangePadding?: number;
  scale: (...args: any[]) => any;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  tickClassName?: string;
  tickFormat?: (...args: any[]) => any;
  tickLabelProps?: (...args: any[]) => any;
  tickLength?: number;
  tickStroke?: string;
  tickTransform?: string;
  tickValues?: any[];
  top?: number;
  children?: (...args: any[]) => any;
}

export function Axis(props: AxisProps): JSX.Element;
