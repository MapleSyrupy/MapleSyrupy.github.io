import { useReducer, useEffect } from 'react';
import { useCookies } from "react-cookie";

import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Slider from '@mui/joy/Slider';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import Alert from '@mui/material/Alert';
import Piechart from './components/Piechart';
import GeneralRange from './components/GeneralRange';
import PiechartSpecific from './components/PiechartSpecific';
import { Stack } from '@mui/material';
import Snackbar from '@mui/material/Snackbar';
import introJs from 'intro.js';
// import { Steps, Hints } from 'intro.js-react';
import 'intro.js/introjs.css';
import './App.css';
import PrintContent from './components/PrintContent';


const initialState = {
  school: 0,
  personalTime: [
    { name: "Athletics", value: 0, key: crypto.randomUUID() },
    { name: "School Clubs", value: 0, key: crypto.randomUUID() },
    { name: "Job", value: 0, key: crypto.randomUUID() },
    { name: "Religious Activities", value: 0, key: crypto.randomUUID() },
    { name: "Community Service", value: 0, key: crypto.randomUUID() },
  ],
  homework: [
    { name: "History", value: 0, key: crypto.randomUUID() },
    { name: "English", value: 0, key: crypto.randomUUID() },
    { name: "Mathematics", value: 0, key: crypto.randomUUID() },
    { name: "Science", value: 0, key: crypto.randomUUID() },
    { name: "Foreign Language", value: 0, key: crypto.randomUUID() },
    { name: "VAPA", value: 0, key: crypto.randomUUID() },
    { name: "College Prep Elective", value: 0, key: crypto.randomUUID() },
  ],
  requires: [
    { name: "sleep", value: 0, key: crypto.randomUUID() },
    { name: "Necessities", value: 0, key: crypto.randomUUID() },
    { name: "Down Time", value: 0, key: crypto.randomUUID() },
    { name: "Family Time", value: 0, key: crypto.randomUUID() },
    { name: "Play Time", value: 0, key: crypto.randomUUID() },
  ],
  homeworkTotal: 0,
  personalTimeTotal: 0,
  requiresTotal: 0,
  total: 168,
  chooseSchools: 'Folsom',
  open: true,
  print: false,
  pageName: "school"
};

function reducer(state, action) {
  switch (action.type) {
    case 'SET_SCHOOL':
      return { ...state, school: action.payload };
    case 'SET_PERSONAL_TIME':
      return { ...state, personalTime: action.payload };
    case 'SET_HOMEWORK':
      return { ...state, homework: action.payload };
    case 'SET_REQUIRES':
      return { ...state, requires: action.payload };
    case 'SET_TOTALS':
      return {
        ...state,
        homeworkTotal: action.payload.homeworkTotal,
        personalTimeTotal: action.payload.personalTimeTotal,
        requiresTotal: action.payload.requiresTotal,
        total: action.payload.total,
      };
    case 'RESET':
      return initialState;
    case 'SET_OPEN':
      return { ...state, open: action.payload };
    case 'SET_PRINT':
      return { ...state, print: action.payload };
    case 'SET_PAGE_NAME':
      return { ...state, pageName: action.payload };
    default:
      return state;
  }
}
 
function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [cookies, setCookie, removeCookie] = useCookies(['Data']);



 useEffect(() => {
    if (cookies.Data) {
      try {
        dispatch({ type: 'SET_HOMEWORK', payload: cookies.Data.homework });
        dispatch({ type: 'SET_PERSONAL_TIME', payload: cookies.Data.personalTime });
        dispatch({ type: 'SET_REQUIRES', payload: cookies.Data.requires });
        dispatch({ type: 'SET_SCHOOL', payload: cookies.Data.school });
        dispatch({ type: 'SET_PAGE_NAME', payload: cookies.Data.pageName });
        dispatch({ type: 'SET_OPEN', payload: cookies.Data.open });
      } catch {

        setCookie("Data", initialState, { sameSite: "strict", secure: "false" });
      }
    } else {
      introJs().setOptions({
        exitOnOverlayClick: false,
        exitOnEsc: false,
        showProgress: true,
      }).start();


    }
  }, []);

  useEffect(() => {
    let homeworkTotal = 0;
    let personalTimeTotal = 0;
    let requiresTotal = 0;

    state.homework.forEach(item => homeworkTotal += parseInt(item.value || 0));
    state.personalTime.forEach(item => personalTimeTotal += parseInt(item.value || 0));
    state.requires.forEach(item => requiresTotal += parseInt(item.value || 0));

    const total = 168 - (state.school + homeworkTotal + personalTimeTotal + requiresTotal);

    dispatch({
      type: 'SET_TOTALS',
      payload: { homeworkTotal, personalTimeTotal, requiresTotal, total },
    });

    const newDate = new Date();

    setCookie("Data", { ...state }, { expires: new Date(newDate.getFullYear() + 1, newDate.getMonth(), newDate.getDate()), sameSite: "strict",secure:"true" });
  }, [state.homework, state.school, state.personalTime, state.requires, state.open, state.pageName]);

  function deleteAll() {
    dispatch({ type: 'RESET' });
  }



  return (
    <>
      {!state.print ? (
        <Grid
          id="MainGrid"
          container
          rowSpacing={1}
          columnSpacing={0}
          sx={{ width: "100vw", height: "100vh", boxShadow: "3", overflowX: "hidden", overflowY: "hidden" }}



        >
          <Grid
            size={6}
            sx={state.print ? { borderRight: "1px black solid", overflow: "visible", overflowX: "auto" } : { borderRight: "1px black solid", height: "100%", overflow: "hidden", overflowX: "auto" }}
            data-intro="This section contains the main UI elements like tabs and controls."

          >
            {state.total < 0 && (
              <Snackbar
                open
                anchorOrigin={{ vertical: "top", horizontal: "center" }}
              >
                <Alert
                  severity="error"
                  variant="filled"
                  sx={{ width: '100%' }}
                >
                  You are not a time traveller, you are now {state.total * -1} hours over.
                </Alert>
              </Snackbar>
            )}
            <Select
              defaultValue="Folsom"
              data-intro="This dropdown allows you to select your school."
              data-step="6"
            >
              <Option onClick={() => dispatch({ type: 'SET_SCHOOL', payload: 'Folsom' })} value="Folsom">Folsom High</Option>
              <Option onClick={() => dispatch({ type: 'SET_SCHOOL', payload: 'Cordova' })} value="Cordova" disabled>Cordova High</Option>
              <Option onClick={() => dispatch({ type: 'SET_SCHOOL', payload: 'Vista' })} value="Vista" disabled>Vista High</Option>
            </Select>
            <>

              <Tabs
                aria-label="Vertical tabs"
                orientation="vertical"
                sx={{ minWidth: 300, height: '100%', borderRadius: '20px' }}
                onChange={(e, value) => dispatch({ type: 'SET_PAGE_NAME', payload: value })}
                value={state.pageName}

              >
                <TabList data-intro="These tabs allow you to navigate between different sections of the app.">
                  <Tab value="school">School</Tab>
                  <Tab value="personalTime">Personal Time</Tab>
                  <Tab value="necessities">Necessities</Tab>
                  <Button onClick={() => introJs().setOptions({
                    exitOnOverlayClick: false,
                    exitOnEsc: false,
                    showProgress: true,
                  }).start()} data-intro="Click this button to open the tutorial.">Tutorial</Button>
                  <Button onClick={deleteAll} data-intro="Click this button to reset all data.">Reset</Button>
                  <Button
                    onClick={() => { dispatch({ type: 'SET_PRINT', payload: true }) }}
                    disabled={state.total < 0 ? true : false}
                    data-intro="Click this button to print the current data."
                  >
                    Print
                  </Button>
                </TabList>
                <TabPanel
                  value="school"
                  style={{ height: 'auto', overflowY: "auto" }}
                >
                  <h1 style={{ margin: "15px" }}>Classtime</h1>
                  <h2 style={{ margin: "15px" }}>Hours per week in school</h2>
                  <Slider
                    sx={{ width: "70%", marginLeft: "30px" }}
                    onChange={(e) => dispatch({ type: 'SET_SCHOOL', payload: parseInt(e.target.value || 0) })}
                    marks
                    value={state.school}
                    max={60}
                    min={0}
                    valueLabelDisplay="auto"
                  />
                  <GeneralRange
                    homework={state.homework}
                    setHomework={(payload) => dispatch({ type: 'SET_HOMEWORK', payload })}
                    chooseSchools={state.chooseSchools}
                  />
                </TabPanel>
                <TabPanel
                  value="personalTime"
                  style={{ height: '95%', overflowY: "auto" }}
                >
                  <GeneralRange
                    personalTime={state.personalTime}
                    setPersonalTime={(payload) => dispatch({ type: 'SET_PERSONAL_TIME', payload })}
                  />
                </TabPanel>
                <TabPanel
                  value="necessities"
                  style={{ height: '95%', overflowY: "auto" }}
                >
                  <GeneralRange
                    requires={state.requires}
                    setRequires={(payload) => dispatch({ type: 'SET_REQUIRES', payload })}
                  />
                </TabPanel>
              </Tabs>
            </>

          </Grid>
          <Grid
            size={6}
            data-intro="This section contains the pie charts for visualizing data."
            id="PieChartGrid"
          >
            <Stack sx={{ height: "100vh" }}
            >
              <Piechart
                school={state.school}
                homeworkTotal={state.homeworkTotal}
                total={state.total}
                personalTimeTotal={state.personalTimeTotal}
                requriesTotal={state.requiresTotal}
                homework={state.homework}
                personalTime={state.personalTime}
                requires={state.requires}
              />
              <PiechartSpecific
                homework={state.homework}
                personalTime={state.personalTime}
                requires={state.requires}
                pageName={state.pageName}
              />

            </Stack>
          </Grid>
        </Grid >
      ) : (

        <PrintContent school={state.school}
          homeworkTotal={state.homeworkTotal}
          total={state.total}
          personalTimeTotal={state.personalTimeTotal}
          requriesTotal={state.requiresTotal}
          setPrintStatus={(payload) => dispatch({ type: "SET_PRINT", payload })} />
      )
      }
    </>
  );
}

export default App;
