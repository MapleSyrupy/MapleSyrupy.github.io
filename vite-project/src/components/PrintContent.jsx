import Button from '@mui/joy/Button';
import { Stack } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { useEffect, useRef } from 'react';
import { useReactToPrint } from "react-to-print";
import { useState } from 'react';
export default function PrintContent({ school, total, homeworkTotal, personalTimeTotal, requriesTotal, setPrintStatus }) {
  const [returnTrue, setReturnTrue] = useState(false);
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
  useEffect(() => {
    setTimeout(() => {
      reactToPrintFn();
      setReturnTrue(true);
    }, 1000)

  }, []);
  // const homeworkSeries = [
  //     {
  //         innerRadius: 0,
  //         outerRadius: 200,
  //         id: 'homework-series',
  //         data:
  //             homework.map((item) => ({
  //                 id: item.key,
  //                 value: item.value,
  //                 label: item.name,
  //             })),
  //         highlightScope: { fade: 'global', highlight: 'item' },
  //         faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
  //         arcLabel: (item) => `${item.value} hours`,
  //         arcLabelMinAngle: 35,
  //         arcLabelRadius: '60%',

  //     },
  // ];
  // const homeworkPersonalTimeseries = [
  //     {
  //         innerRadius: 0,
  //         outerRadius: 200,
  //         id: 'personalTime-series',
  //         data:
  //             personalTime.map((item) => ({
  //                 id: item.key,
  //                 value: item.value,
  //                 label: item.name,
  //             })),
  //         highlightScope: { fade: 'global', highlight: 'item' },
  //         faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
  //         arcLabel: (item) => `${item.value} hours`,
  //         arcLabelMinAngle: 35,
  //         arcLabelRadius: '60%',

  //     },
  // ];

  // const requiresSeries = [
  //     {
  //         innerRadius: 0,
  //         outerRadius: 200,
  //         id: 'platform-series',
  //         data:
  //             requires.map((item) => ({
  //                 id: item.key,
  //                 value: item.value,
  //                 label: item.name,
  //             })),
  //         highlightScope: { fade: 'global', highlight: 'item' },
  //         faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },
  //         arcLabel: (item) => `${item.value} hours`,
  //         arcLabelMinAngle: 35,
  //         arcLabelRadius: '60%',

  //     },
  // ];
  function Piechart({ school, total, homeworkTotal, personalTimeTotal, requriesTotal }) {
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
        outerRadius: 200,
        id: 'main-categories',
        data: mainCategories,
        arcLabel: (item) => `${item.value} hours`,
        arcLabelMinAngle: 35,
        arcLabelRadius: '60%',
      }
    ];

    return (
      <PieChart
        series={series}
        width={500}
        slotProps={{
          legend: {
            sx: {
              width: "20%",
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

  return (
    // sx={{ width: "25vw", height: "100vh", justifyContent: 'center', display: 'flex', alignItems: 'center' }}
    // <Stack spacing={5} sx={{ width: "23vw", height: "100vh", justifyContent: 'center', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
    <>
     <div style = {{width:"100vw", height:"100vh", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Stack sx={{ height: "80%", width: "80%", textAlign: "center" }} direction={"column"} ref={contentRef}>
        {/* <PieChart
                    series={
                        homeworkSeries

                    }
                    width={500}
                />
                <PieChart
                    series={
                        homeworkPersonalTimeseries

                    }
                    width={500}
                />
                <PieChart
                    series={
                        requiresSeries

                    }
                    width={500}
                /> */}
       
          <Piechart school={school} total={total} homeworkTotal={homeworkTotal} personalTimeTotal={personalTimeTotal} requriesTotal={requriesTotal} />

          <h1>Parent Signature</h1>
          <p>__________________</p>
          <h1>Student Signature</h1>
          <p>__________________</p>
   
        {returnTrue ? <Button sx={{ borderRadius: 0 }} onClick={() => setPrintStatus(false)}>Return</Button> : ""}
      </Stack>
     </div>
    </>
  )
}