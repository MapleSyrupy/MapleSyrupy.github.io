import { PieChart } from '@mui/x-charts/PieChart';
import Box from "@mui/joy/Box";
import { Stack } from '@mui/material';
import { useEffect, useReducer } from 'react';

function PiechartSpecific({ homework, personalTime, requires, pageName }) {

  const InititalState = {
    MainPieChartActive: false
  }
  function Reducer(state, action) {
    switch (action.type) {
      case 'SET_MainPieChart':
        return { ...state, MainPieChartActive: action.payload };
      default:
        return state;
    }
  }
  const [state, dispatch] = useReducer(Reducer, InititalState);

  useEffect(() => {
    if (homeworkSeries[0].data.filter(((x) => x.value > 0)).length === 0 && pageName === 'school') {
      dispatch({ type: 'SET_MainPieChart', payload: false });
      return;
    } else {
      dispatch({ type: 'SET_MainPieChart', payload: true });
    }
    if (homeworkPersonalTimeseries[0].data.filter(((x) => x.value > 0)).length === 0 && pageName === 'personalTime') {
      dispatch({ type: 'SET_MainPieChart', payload: false });
      return;
    } else {
      dispatch({ type: 'SET_MainPieChart', payload: true });
    }
    if (requiresSeries[0].data.filter(((x) => x.value > 0)).length === 0 && pageName === 'necessities') {
      dispatch({ type: 'SET_MainPieChart', payload: false });
      return;
    } else {
      dispatch({ type: 'SET_MainPieChart', payload: true });
    }

  }, [pageName, homework, personalTime, requires]);

  // function handleActivePieCheck()
  // {
  //   switch (pageName) {
  //     case 'school':
  //       if(state.PieChart1Active)
  //       {
  //         dispatch({ type: 'SET_MainPieChart', payload: true });
  //       }
  //     case 'personalTime':
  //       if(state.PieChart2Active)
  //       {
  //         dispatch({ type: 'SET_MainPieChart', payload: true });
  //       }
  //     case 'necessities':
  //       if(state.PieChart3Active)
  //       {
  //         dispatch({ type: 'SET_MainPieChart', payload: true });
  //       }
  //     default:
  //       dispatch({ type: 'SET_MainPieChart', payload: false });
  //   }
  // }
  const homeworkSeries = [
    {
      innerRadius: 0,
      outerRadius:200,
      id: 'homework-series',
      data:
        homework.map((item) => ({
          id: item.key,
          value: item.value,
          label: item.name,
        })),
      highlightScope: { fade: 'global', highlight: 'item' },
      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },

    },
  ];
  const homeworkPersonalTimeseries = [
    {
      innerRadius: 0,
      outerRadius:200,
      id: 'personalTime-series',
      data:
        personalTime.map((item) => ({
          id: item.key,
          value: item.value,
          label: item.name,
        })),
      highlightScope: { fade: 'global', highlight: 'item' },
      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },

    },
  ];
  const requiresSeries = [
    {
      innerRadius: 0,
      outerRadius:200,
      id: 'platform-series',
      data:
        requires.map((item) => ({
          id: item.key,
          value: item.value,
          label: item.name,
        })),
      highlightScope: { fade: 'global', highlight: 'item' },
      faded: { innerRadius: 30, additionalRadius: -30, color: 'gray' },

    },
  ];
  return (
    // sx={{ width: "25vw", height: "100vh", justifyContent: 'center', display: 'flex', alignItems: 'center' }}
    // <Stack spacing={5} sx={{ width: "23vw", height: "100vh", justifyContent: 'center', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
    <>
      {state.MainPieChartActive === true ? (
        <PieChart
          series={
            pageName === "school"
              ? homeworkSeries
              : pageName === "personalTime"
                ? homeworkPersonalTimeseries
                : requiresSeries
          }
          height={700}
          width={500}
          loading={state.MainPieChartActive === true ? false : true}
          slotProps={{
            legend: {
              sx: {
                height:"25vh",
                width:"10vw",
                display: "flex",
                flexWrap: "nowrap",
                overflowY: "scroll",
                wordBreak: "break-word",
                textAlign: "left"
              },
            },
          }}
        />
      ) : (
        <h1 style = {{fontFamily:"sans-serif"}}>NO DATA</h1>
      )}
    </>
  )
      /* <Box sx={{ width: "100%", height: "100%", justifyContent: 'center', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {state.PieChart2Active ? (
          <PieChart
            series={homeworkPersonalTimeseries}
            width={700}
            height={300}
            slotProps={{
              legend: {
                hidden: true,
              },
            }}
            sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontFamily: "sans-serif",
                fontSize: 30,
              },
            }}
          />
        ) : (
          <h1>NO DATA</h1>
        )}
      </Box>
      <Box sx={{ width: "100%", height: "100%", justifyContent: 'center', display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        {state.PieChart3Active ? (
          <PieChart
            series={requiresSeries}
            width={700}
            height={300}
             slotProps={{
              legend: {
                hidden: true,
              },
            }}
             sx={{
              [`& .${pieArcLabelClasses.root}`]: {
                fontFamily: "sans-serif",
                fontSize: 30,
              },
            }}
          />
        ) : (
          <h1>NO DATA</h1>
        )}
      </Box> */}
{/* </Stack> */ }
// );


export default PiechartSpecific;