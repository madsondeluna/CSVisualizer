import React from 'react';
import { ChartType, ChartConfig } from '../types';
import { BarChart, LineChart, ScatterChart as ScatterPlot } from 'lucide-react';

interface ChartControlsProps {
  columns: string[];
  config: ChartConfig;
  onConfigChange: (config: ChartConfig) => void;
}

export function ChartControls({ columns, config, onConfigChange }: ChartControlsProps) {
  const chartTypes: { type: ChartType; icon: React.ReactNode }[] = [
    { type: 'line', icon: <LineChart className="w-5 h-5" /> },
    { type: 'bar', icon: <BarChart className="w-5 h-5" /> },
    { type: 'scatter', icon: <ScatterPlot className="w-5 h-5" /> },
  ];

  const colors = ['#2563eb', '#dc2626', '#16a34a', '#9333ea', '#ea580c'];

  return (
    <div className="space-y-4 p-4 bg-white rounded-lg shadow">
      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Chart Type</label>
        <div className="flex gap-2">
          {chartTypes.map(({ type, icon }) => (
            <button
              key={type}
              onClick={() => onConfigChange({ ...config, type })}
              className={`p-2 rounded ${
                config.type === type
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {icon}
            </button>
          ))}
        </div>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">X Axis</label>
        <select
          value={config.xAxis}
          onChange={(e) => onConfigChange({ ...config, xAxis: e.target.value })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {columns.map((column) => (
            <option key={column} value={column}>
              {column}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Y Axis</label>
        <select
          value={config.yAxis}
          onChange={(e) => onConfigChange({ ...config, yAxis: e.target.value })}
          className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
        >
          {columns.map((column) => (
            <option key={column} value={column}>
              {column}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label className="block text-sm font-medium text-gray-700">Color</label>
        <div className="flex gap-2">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => onConfigChange({ ...config, color })}
              className={`w-8 h-8 rounded-full ${
                config.color === color ? 'ring-2 ring-offset-2 ring-blue-500' : ''
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}