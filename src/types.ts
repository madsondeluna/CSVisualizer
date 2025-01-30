export interface DataPoint {
  [key: string]: string | number;
}

export type ChartType = 'line' | 'bar' | 'scatter' | 'area';

export interface ChartConfig {
  type: ChartType;
  xAxis: string;
  yAxis: string;
  color: string;
}