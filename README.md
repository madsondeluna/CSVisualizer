# CSV Data Visualizer 🛠️📊💻

A modern, interactive web application for visualizing CSV data through various chart types. Built with React, TypeScript, and Recharts, this application provides an intuitive interface for data analysis and visualization.

## Features

- **Easy Data Upload**: Drag and drop or select CSV files
- **Multiple Chart Types**: 
  - Line Charts
  - Bar Charts
  - Scatter Plots
- **Customization Options**:
  - Chart type selection
  - X and Y axis configuration
  - Color schemes
- **Data Preview**: View your data in a clean, paginated table
- **Sample Data**: Try the application with pre-loaded sample data

## Usage Guide

### 1. Loading Data

You have two options to get started:

#### Option A: Load Sample Data
Click the "Load Sample Data" button to explore the application with pre-loaded weather data including temperature, humidity, and pressure measurements.

#### Option B: Upload Your Own CSV
- Click the upload area or drag and drop your CSV file
- The file should be properly formatted with headers
- Data will be automatically parsed and displayed

### 2. Visualizing Data

Once data is loaded, you can:

1. **Choose Chart Type**:
   - Line Chart: Perfect for time series data
   - Bar Chart: Great for comparing categories
   - Scatter Plot: Ideal for showing relationships between variables

2. **Configure Axes**:
   - Select which columns to display on X and Y axes
   - The chart updates automatically with your selections

3. **Customize Appearance**:
   - Choose from different color schemes
   - Charts are responsive and will adjust to your screen size

### 3. Data Preview

- View your data in a tabular format below the chart
- The table shows the first 10 rows of your data
- All columns are displayed for a complete overview

## Sample Data Format

The application comes with sample weather data in the following format:

```csv
date,temperature,humidity,pressure
2024-01-01,23.5,65,1013
2024-01-02,24.2,62,1012
...
```

When preparing your own CSV files, ensure they follow a similar structure:
- First row contains column headers
- Data is comma-separated
- Numbers are properly formatted
- No empty cells or invalid values

## Technical Details

### Built With
- React + TypeScript
- Tailwind CSS for styling
- Recharts for data visualization
- Lucide React for icons

### Data Handling
- Supports CSV files with headers
- Automatically detects numeric columns
- Handles string and numeric data types
- Real-time chart updates

## Best Practices

1. **Data Preparation**:
   - Clean your CSV data before upload
   - Ensure consistent formatting
   - Remove any unnecessary columns

2. **Chart Selection**:
   - Line charts for time-series data
   - Bar charts for categorical comparisons
   - Scatter plots for correlation analysis

3. **Visualization Tips**:
   - Choose appropriate axes for your data
   - Select colors that enhance readability
   - Consider your audience when selecting chart types

## Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Committing your changes
4. Opening a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details.
