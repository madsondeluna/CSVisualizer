// Weather Data
export const weatherData = [
  { date: '2024-01-01', temperature: 23.5, humidity: 65, pressure: 1013, rainfall: 0, windSpeed: 12 },
  { date: '2024-01-02', temperature: 24.2, humidity: 62, pressure: 1012, rainfall: 0.5, windSpeed: 15 },
  { date: '2024-01-03', temperature: 22.8, humidity: 68, pressure: 1014, rainfall: 2.1, windSpeed: 18 },
  { date: '2024-01-04', temperature: 25.1, humidity: 60, pressure: 1015, rainfall: 0, windSpeed: 10 },
  { date: '2024-01-05', temperature: 23.9, humidity: 63, pressure: 1013, rainfall: 0.2, windSpeed: 14 },
  { date: '2024-01-06', temperature: 22.5, humidity: 70, pressure: 1012, rainfall: 1.8, windSpeed: 20 },
  { date: '2024-01-07', temperature: 24.8, humidity: 64, pressure: 1014, rainfall: 0, windSpeed: 13 },
  { date: '2024-01-08', temperature: 25.3, humidity: 61, pressure: 1015, rainfall: 0, windSpeed: 11 },
  { date: '2024-01-09', temperature: 23.7, humidity: 66, pressure: 1013, rainfall: 0.8, windSpeed: 16 },
  { date: '2024-01-10', temperature: 24.5, humidity: 63, pressure: 1014, rainfall: 0.3, windSpeed: 14 }
];

// Sales Data
export const salesData = [
  { month: 'Jan', revenue: 45000, expenses: 32000, profit: 13000, customers: 120, orders: 150 },
  { month: 'Feb', revenue: 52000, expenses: 35000, profit: 17000, customers: 145, orders: 180 },
  { month: 'Mar', revenue: 48000, expenses: 33000, profit: 15000, customers: 135, orders: 160 },
  { month: 'Apr', revenue: 51000, expenses: 34000, profit: 17000, customers: 140, orders: 175 },
  { month: 'May', revenue: 55000, expenses: 36000, profit: 19000, customers: 150, orders: 190 },
  { month: 'Jun', revenue: 49000, expenses: 33500, profit: 15500, customers: 138, orders: 165 },
  { month: 'Jul', revenue: 53000, expenses: 35500, profit: 17500, customers: 148, orders: 185 },
  { month: 'Aug', revenue: 50000, expenses: 34500, profit: 15500, customers: 142, orders: 170 },
  { month: 'Sep', revenue: 54000, expenses: 36000, profit: 18000, customers: 155, orders: 195 },
  { month: 'Oct', revenue: 56000, expenses: 37000, profit: 19000, customers: 160, orders: 200 }
];

// Population Data
export const populationData = [
  { year: 2010, population: 308.7, birthRate: 13.0, deathRate: 8.0, migration: 2.9, urbanPopulation: 80.8 },
  { year: 2011, population: 311.0, birthRate: 12.9, deathRate: 8.1, migration: 2.8, urbanPopulation: 81.0 },
  { year: 2012, population: 313.2, birthRate: 12.8, deathRate: 8.1, migration: 2.7, urbanPopulation: 81.2 },
  { year: 2013, population: 315.4, birthRate: 12.6, deathRate: 8.2, migration: 2.6, urbanPopulation: 81.4 },
  { year: 2014, population: 317.7, birthRate: 12.5, deathRate: 8.2, migration: 2.5, urbanPopulation: 81.6 },
  { year: 2015, population: 320.1, birthRate: 12.4, deathRate: 8.3, migration: 2.4, urbanPopulation: 81.8 },
  { year: 2016, population: 322.4, birthRate: 12.2, deathRate: 8.3, migration: 2.3, urbanPopulation: 82.0 },
  { year: 2017, population: 324.8, birthRate: 12.0, deathRate: 8.4, migration: 2.2, urbanPopulation: 82.2 },
  { year: 2018, population: 327.2, birthRate: 11.8, deathRate: 8.4, migration: 2.1, urbanPopulation: 82.4 },
  { year: 2019, population: 329.5, birthRate: 11.6, deathRate: 8.5, migration: 2.0, urbanPopulation: 82.6 }
];

export const sampleDatasets = {
  weather: {
    name: 'Weather Data',
    description: 'Daily weather measurements including temperature, humidity, pressure, rainfall, and wind speed.',
    data: weatherData
  },
  sales: {
    name: 'Sales Analytics',
    description: 'Monthly business performance metrics including revenue, expenses, profit, customers, and orders.',
    data: salesData
  },
  population: {
    name: 'Population Statistics',
    description: 'Annual population statistics including total population, birth rate, death rate, migration, and urbanization.',
    data: populationData
  }
};