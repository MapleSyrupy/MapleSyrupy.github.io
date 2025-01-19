import { useState } from 'react'
import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid2';
import { PieChart } from '@mui/x-charts/PieChart';
import Input from '@mui/joy/Input';
import Slider from '@mui/joy/Slider';
import { useEffect } from 'react';
import FormLabel from '@mui/joy/FormLabel';
import Alert from '@mui/material/Alert';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';

import './App.css'


function Piechart({ school, total, homeworkTotal, personalTimeTotal, requriesTotal }) {

  return (
    <>

      <PieChart
        series={[
          {
            data: [
              { id: 0, value: school, label: 'School time' },
              { id: 1, value: total, label: 'Leftover time' },
              { id: 2, value: homeworkTotal, label: 'Homework' },
              { id: 3, value: personalTimeTotal, label: 'personal time' },
              { id: 4, value: requriesTotal, label: 'necessities' },
            ],
          },
        ]}
        width={700}
        height={500}
      />

    </>
  )
}
function GeneralRange(data1) {
  const key = Object.keys(data1);
  
  function addHomework() {

    data1[key[1]]([...data1[key[0]], { name: "", value: 0, key: crypto.randomUUID() }]);
  }

  function homeworkData(x, y) {

    const homeworkCounter = data1[key[0]].map((A) => {
      if (A.key !== y) {
        return A
      } else {
        return {
          ...A,
          value: x
        }
      }

    });





    data1[key[1]](homeworkCounter)
  }
  return (
    <>


      <h2 style={{ margin: "15px" }}>{key[0] === 'homework' ? 'Homework' : key[0] === 'personalTime' ? 'Personal Time' : 'Necessities'}</h2>
      {
        data1[key[0]].map((x) => {
          console.log(data1[key[0]].filter(y=>y.key===x.key)[0].value)
          return (
            <div key={x.key}>
              <FormLabel sx={{ marginLeft: "30px" }}>Name </FormLabel>
              <Input sx={{ m: 2 }} defaultValue={x.name} />
              <FormLabel sx={{ marginLeft: "30px" }}>Hours per week</FormLabel>
              <Slider
                sx={{ width: "70%", marginLeft: "30px" }}
                disabled={false}
                onChange={(e) => homeworkData(e.target.value, x.key)}
                marks
                value = {data1[key[0]].filter(y=>y.key===x.key)[0].value}
                max={16}
                min={0}
                valueLabelDisplay="auto"
              />
            </div>
          )
        })
      }
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button sx={{ width: "50%" }} variant="outlined" size="large" onClick={() => addHomework()} >+</Button>
      </Box>
    </>
  )
}
function App() {
  const [count, setCount] = useState(false);
  const [school, setSchool] = useState(0);
  const [personalTime, setPersonalTime] = useState([{ name: "generic personal time", value: 0, key: crypto.randomUUID() }]);
  const [homework, setHomework] = useState([{ name: "generic homework", value: 0, key: crypto.randomUUID() }]);
  const [homeworkTotal, setHomeworkTotal] = useState(0);
  const [personalTimeTotal, setPersonalTimeTotal] = useState(0);
  const [requires, setRequires] = useState([{ name: "sleep", value: 0, key: crypto.randomUUID() }]);
  const [requriesTotal, setRequiresTotal] = useState(0);
  const [total, setTotal] = useState(168);
  const [overLoad, setoverLoad] = useState(false);
  useEffect(() => {
    if (total < 0) {
      setoverLoad(true)
    } else {
      setoverLoad(false)
    }
  }, [total])
  useEffect(() => {
    console.log(homework)
    let total = 0
    let total2 = 0
    let total3 = 0
    for (let x of homework) {
      total += parseInt(x.value)
      total = total || 0;
      setHomeworkTotal(total)

    }
    for (let x of personalTime) {
      total2 += parseInt(x.value)
      total2 = total2 || 0;
      setPersonalTimeTotal(total2)

    }
    for (let x of requires) {
      total3 += parseInt(x.value)
      total3 = total3 || 0;
      setRequiresTotal(total3);

    }
    let schoolValue = parseInt(school)
    schoolValue = schoolValue || 0
    let calculation = 168 - (schoolValue + homeworkTotal + personalTimeTotal + requriesTotal);
    calculation = calculation || 0
    setTotal(calculation)
  }, [homework, school, homeworkTotal, personalTime, personalTimeTotal, requires, requriesTotal]);
  function schoolData(x) {
    x = x || 0
    setSchool(parseInt(x));


  }

  return (
    <>

      {
        (count === false) ?
          <div id="startingPage" >

            <Box component="section" sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: '100vh', fontFamily: "sans-serif", typography: { fontSize: 30 } }}>
              <Box id="mainBox" sx={{ display: "flex-column", textAlign: "center" }}>
                <h1>Welcome to the time budget planner!</h1>
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <Button type="full" variant="contained" size="large" onClick={() => setCount(true)}>Click to Start!</Button>
                </div>
              </Box>
            </Box>


          </div>
          : ""
      }
    
        <Grid id="MainGrid" container rowSpacing={1} columnSpacing={0} sx={{ width: "100vw", height: "100vh", boxShadow: "3" }}>
          <Grid size={6} sx={{ borderRight: "1px black solid", height: "100%" }}>

            <Tabs
              aria-label="Vertical tabs"
              orientation="vertical"
              sx={{ minWidth: 300, height: '100%', borderRadius: '20px' }}
            >
              <TabList>
                <Tab>School</Tab>
                <Tab>Personal Time</Tab>
                <Tab>Necessities</Tab>
              </TabList>
              <TabPanel value={0} >
                <div style={{ height: '100%', overflowY: "auto" }}>
                  <h1 style={{ margin: "15px" }}>Classtime</h1>
                  <h2 style={{ margin: "15px" }}>Hours per week in school</h2>
                  <Slider
                    sx={{ width: "70%", marginLeft: "30px" }}
                    disabled={false}
                    onChange={(e) => schoolData(e.target.value)}
                    marks
                    value = {school}
                    max={60}
                    min={0}
                    valueLabelDisplay="auto"
                  />
                  <GeneralRange homework={homework} setHomework={setHomework} />
                </div>
              </TabPanel>
              <TabPanel value={1}>
                <div style={{ height: '100%', overflowY: "auto" }}>
                  <GeneralRange personalTime={personalTime} setPersonalTime={setPersonalTime} />
                </div>
              </TabPanel>
              <TabPanel value={2}>
                <div style={{ height: '100%', overflowY: "auto" }}>
                  <GeneralRange requires={requires} setRequires={setRequires} />
                </div>
              </TabPanel>
            </Tabs>
          </Grid>
          <Grid size={6} sx={{ display: 'flex', alignItems: "center",justifyContent:'center' }}>
            <Piechart school={school} homeworkTotal={homeworkTotal} total={total} personalTimeTotal={personalTimeTotal} requriesTotal={requriesTotal} />
            <div >
              {
                overLoad ? <Alert severity="error" >
                  You are not a time traveller, you are now {total * -1} over.
                </Alert> : ""
              }
            </div>
          </Grid>
      
        </Grid>

    </>

  )
}

export default App
