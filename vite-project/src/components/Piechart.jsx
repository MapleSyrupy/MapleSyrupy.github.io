import { PieChart } from '@mui/x-charts/PieChart';

function Piechart({ school, total, homeworkTotal, personalTimeTotal, requriesTotal, homework, personalTime, requires }) {
  // Main categories for the inner ring
  const mainCategories = [
    { id: 0, value: school, label: 'School Time' },
    { id: 1, value: total, label: 'Leftover Time' },
    { id: 2, value: homeworkTotal, label: 'Homework Total' },
    { id: 3, value: personalTimeTotal, label: 'Personal Time Total' },
    { id: 4, value: requriesTotal, label: 'Necessities Total' },
  ];

  // Define the series for the two-level pie chart
  const series = [
    {
      innerRadius: 0,
      outerRadius:200,
      id: 'main-categories',
      data: mainCategories,
      highlightScope: { fade: 'global', highlight: 'item' },
      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' }
    }
  ];

  return (
    <PieChart
      series={series}
      width={500}
       slotProps={{
            legend: {
              sx: {
                width:"20%",
                display: "flex",
                flexWrap: "nowrap",
                wordBreak: "break-word",
                textAlign: "left",
              },
            },
          }}
    />
  );
}

export default Piechart;
