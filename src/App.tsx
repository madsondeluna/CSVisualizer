import React, { useState, useCallback } from 'react';
import { Upload, FileQuestion, BarChart2, LineChart, ScatterChart, Table } from 'lucide-react';
import { DataTable } from './components/DataTable';
import { ChartComponent } from './components/ChartComponent';
import { ChartControls } from './components/ChartControls';
import { DataPoint, ChartConfig } from './types';
import { sampleData } from './sampleData';

function App() {
  const [data, setData] = useState<DataPoint[]>([]);
  const [columns, setColumns] = useState<string[]>([]);
  const [chartConfig, setChartConfig] = useState<ChartConfig>({
    type: 'line',
    xAxis: '',
    yAxis: '',
    color: '#2563eb',
  });

  const handleFileUpload = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      const rows = text.split('\n');
      const headers = rows[0].split(',').map((header) => header.trim());
      
      const parsedData = rows
        .slice(1)
        .filter((row) => row.trim())
        .map((row) => {
          const values = row.split(',').map((value) => value.trim());
          return headers.reduce((obj, header, index) => {
            const value = values[index];
            obj[header] = isNaN(Number(value)) ? value : Number(value);
            return obj;
          }, {} as DataPoint);
        });

      setColumns(headers);
      setData(parsedData);
      setChartConfig((prev) => ({
        ...prev,
        xAxis: headers[0],
        yAxis: headers[1],
      }));
    };
    reader.readAsText(file);
  }, []);

  const loadSampleData = useCallback(() => {
    const headers = Object.keys(sampleData[0]);
    setColumns(headers);
    setData(sampleData);
    setChartConfig((prev) => ({
      ...prev,
      xAxis: 'date',
      yAxis: 'temperature',
    }));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="space-y-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">CSVisualizer</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your CSV data into beautiful, interactive visualizations with just a few clicks
            </p>
          </div>

          {/* Features Grid */}
          {!data.length && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <LineChart className="w-8 h-8 text-blue-500" />
                  <h3 className="ml-3 text-lg font-semibold">Line Charts</h3>
                </div>
                <p className="text-gray-600">Perfect for time series data and tracking trends over time</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <BarChart2 className="w-8 h-8 text-blue-500" />
                  <h3 className="ml-3 text-lg font-semibold">Bar Charts</h3>
                </div>
                <p className="text-gray-600">Ideal for comparing categories and showing distributions</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <ScatterChart className="w-8 h-8 text-blue-500" />
                  <h3 className="ml-3 text-lg font-semibold">Scatter Plots</h3>
                </div>
                <p className="text-gray-600">Visualize relationships between variables in your data</p>
              </div>
            </div>
          )}

          {/* Upload Section */}
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <div className="space-y-6">
              <label className="flex flex-col items-center justify-center w-full h-40 px-4 transition bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-300 border-dashed rounded-xl appearance-none cursor-pointer hover:border-blue-400 focus:outline-none group">
                <div className="flex flex-col items-center space-y-3">
                  <div className="p-3 rounded-full bg-blue-100 group-hover:bg-blue-200 transition-colors">
                    <Upload className="w-8 h-8 text-blue-500" />
                  </div>
                  <div className="text-center">
                    <span className="font-medium text-gray-700">
                      Drop your CSV file here or click to browse
                    </span>
                    <p className="text-sm text-gray-500 mt-1">
                      Supports CSV files with headers
                    </p>
                  </div>
                </div>
                <input
                  type="file"
                  accept=".csv"
                  className="hidden"
                  onChange={handleFileUpload}
                />
              </label>

              <div className="flex justify-center">
                <button
                  onClick={loadSampleData}
                  className="inline-flex items-center px-6 py-3 text-sm font-medium text-blue-600 bg-blue-50 rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
                >
                  <FileQuestion className="w-5 h-5 mr-2" />
                  Try with Sample Data
                </button>
              </div>
            </div>
          </div>

          {data.length > 0 && (
            <>
              {/* Chart Section */}
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                <div className="lg:col-span-1">
                  <ChartControls
                    columns={columns}
                    config={chartConfig}
                    onConfigChange={setChartConfig}
                  />
                </div>
                <div className="lg:col-span-3 bg-white p-6 rounded-xl shadow-lg">
                  <ChartComponent data={data} config={chartConfig} />
                </div>
              </div>

              {/* Data Preview */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex items-center">
                  <Table className="w-5 h-5 text-gray-500 mr-2" />
                  <h2 className="text-lg font-medium text-gray-900">Data Preview</h2>
                </div>
                <DataTable data={data.slice(0, 10)} columns={columns} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;