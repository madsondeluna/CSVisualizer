# CSVisualizer

A modern, interactive web application for visualizing CSV data through various chart types. Built with React, TypeScript, and Recharts, this application provides an intuitive interface for data analysis and visualization.

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v9 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/csvisualizer.git
```

2. Navigate to the project directory:
```bash
cd csvisualizer
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm run dev
```

5. Open your browser and navigate to `http://localhost:5173`

## Features

### Data Upload
- Drag and drop CSV files directly onto the upload area
- Click to browse and select files from your computer
- Automatic parsing of CSV data with header detection

### Chart Types
- Line Charts: Perfect for time series data
- Bar Charts: Great for comparing categories
- Scatter Plots: Ideal for showing relationships between variables

### Customization Options
- Select columns for X and Y axes
- Choose from multiple color schemes
- Responsive design that adapts to your screen size

### Data Preview
- View your data in a clean, paginated table
- All columns are displayed for a complete overview
- First 10 rows preview for quick data verification

## Sample Datasets

### 1. Weather Data
Includes daily measurements of:
- Temperature
- Humidity
- Atmospheric Pressure
- Rainfall
- Wind Speed

Perfect for:
- Time series analysis
- Weather pattern visualization
- Environmental data studies

### 2. Sales Analytics
Monthly business metrics including:
- Revenue
- Expenses
- Profit
- Customer Count
- Order Volume

Ideal for:
- Business performance analysis
- Trend identification
- Financial reporting

### 3. Population Statistics
Annual demographic data with:
- Total Population
- Birth Rate
- Death Rate
- Migration Rate
- Urban Population Percentage

Useful for:
- Demographic studies
- Population trend analysis
- Urban development research

## Usage Guide

### 1. Loading Data

#### Using Sample Data
1. Click the "Try with Sample Data" button
2. Choose from available sample datasets
3. Data will be automatically loaded and displayed

#### Uploading Your Own Data
1. Click the upload area or drag a CSV file
2. Ensure your CSV has headers
3. Wait for automatic parsing and display

### 2. Creating Visualizations

1. Select Chart Type:
   - Click the chart icon (line, bar, or scatter)
   - Choose based on your data type and analysis needs

2. Configure Axes:
   - Select X-axis column from dropdown
   - Select Y-axis column from dropdown
   - Chart updates automatically

3. Customize Appearance:
   - Click color swatches to change chart colors
   - Chart adjusts responsively to window size

### 3. Analyzing Data

1. Use the data preview table to:
   - Verify data loading
   - Check column names
   - Review data format

2. Experiment with different:
   - Chart types
   - Column combinations
   - Color schemes

## CSV File Requirements

Your CSV files should follow these guidelines:

```csv
column1,column2,column3
value1,value2,value3
```

- First row must contain column headers
- Data should be comma-separated
- Numbers should use period (.) as decimal separator
- Dates should be in consistent format (YYYY-MM-DD recommended)
- No empty cells or invalid values

## Technical Details

### Built With
- React + TypeScript
- Tailwind CSS for styling
- Recharts for data visualization
- Lucide React for icons

### Data Handling
- Automatic type detection for columns
- Support for numeric and string data
- Real-time chart updates
- Responsive design

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
