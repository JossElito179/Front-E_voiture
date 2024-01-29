import React from 'react';
import BarChart from '../../charts/BarChart01';

// Import utilities
import { tailwindConfig } from '../../utils/Utils';

function DashboardCard03() {

  const chartData = {
    labels: [
      //Format de la date : 'MM-DD-YYYY'
      '01-01-2024', '02-01-2024', '03-01-2024',
      '04-01-2024', '05-01-2024', '06-01-2024',
    ],
    datasets: [
      // Light blue bars
      {
        label: '',
        data: [
          800, 1600, 900, 1300, 1950, 1700,
        ],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 0.66,
        categoryPercentage: 0.66,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full sm:col-span-6 bg-white dark:bg-slate-800 shadow-lg rounded-sm border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">Statistique</h2>
      </header>
      {/* Chart built avec Chart.js 3 */}
      {/* Ajuster la taille */}
      <BarChart data={chartData} width={595} height={248} />
    </div>
  );
}

export default DashboardCard03;
