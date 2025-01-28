import React from 'react';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  ScatterChart,
  Scatter,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { ChartConfig, DataPoint } from '../types';

interface ChartComponentProps {
  data: DataPoint[];
  config: ChartConfig;
}

export function ChartComponent({ data, config }: ChartComponentProps) {
  const renderChart = () => {
    switch (config.type) {
      case 'line':
        return (
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={config.xAxis} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={config.yAxis} stroke={config.color} />
          </LineChart>
        );
      case 'bar':
        return (
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={config.xAxis} />
            <YAxis />
            <Tooltip />
            <Bar dataKey={config.yAxis} fill={config.color} />
          </BarChart>
        );
      case 'scatter':
        return (
          <ScatterChart>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={config.xAxis} type="number" />
            <YAxis dataKey={config.yAxis} type="number" />
            <Tooltip cursor={{ strokeDasharray: '3 3' }} />
            <Scatter data={data} fill={config.color} />
          </ScatterChart>
        );
      default:
        return null;
    }
  };

  return (
    <div className="w-full h-[400px]">
      <ResponsiveContainer>{renderChart()}</ResponsiveContainer>
    </div>
  );
}