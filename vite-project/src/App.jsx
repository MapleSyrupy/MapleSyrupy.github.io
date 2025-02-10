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
import Chip from '@mui/joy/Chip';
import Autocomplete from '@mui/joy/Autocomplete';
import { Cookies, useCookies } from "react-cookie";
import Table from '@mui/joy/Table';
import { useRef } from "react";
import { matchSorter } from 'match-sorter'
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import ModalDialog from '@mui/joy/ModalDialog';
import { useReactToPrint } from "react-to-print";
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
  const FolsomOptions = [
    { "Name": "World Cultures", "TimeNeeded": "2", "subject": "History" },
    { "Name": "GPS World Cultures", "TimeNeeded": "2", "subject": "History" },
    { "Name": "AP European History", "TimeNeeded": "4", "subject": "History" },
    { "Name": "U.S. History", "TimeNeeded": "1.5", "subject": "History" },
    { "Name": "GPS U.S. History", "TimeNeeded": "1.5", "subject": "History" },
    { "Name": "AP U.S. History", "TimeNeeded": "5", "subject": "History" },
    { "Name": "Economics", "TimeNeeded": "1.5", "subject": "History" },
    { "Name": "Government", "TimeNeeded": "1.5", "subject": "History" },
    { "Name": "Government/Economics", "TimeNeeded": "1.5", "subject": "History" },
    { "Name": "AP U.S. Government and Politics", "TimeNeeded": "5", "subject": "History" },
    { "Name": "AP Human Geography", "TimeNeeded": "3", "subject": "History" },
    { "Name": "English 1", "TimeNeeded": "2", "subject": "English" },
    { "Name": "English 2", "TimeNeeded": "2", "subject": "English" },
    { "Name": "English 3", "TimeNeeded": "2", "subject": "English" },
    { "Name": "English 4", "TimeNeeded": "1", "subject": "English" },
    { "Name": "GPS English 1", "TimeNeeded": "2", "subject": "English" },
    { "Name": "Honors English 1 (Pre-AP)", "TimeNeeded": "1.5", "subject": "English" },
    { "Name": "Honors English 2 (Pre-AP)", "TimeNeeded": "3", "subject": "English" },
    { "Name": "GPS English 4", "TimeNeeded": "1", "subject": "English" },
    { "Name": "AP English Language & Composition", "TimeNeeded": "4", "subject": "English" },
    { "Name": "AP English Literature & Composition", "TimeNeeded": "4", "subject": "English" },
    { "Name": "CSU ERWC", "TimeNeeded": "1", "subject": "English" },
    { "Name": "Integrated Math 1", "TimeNeeded": "2", "subject": "Mathematics" },
    { "Name": "Integrated Math 2", "TimeNeeded": "2", "subject": "Mathematics" },
    { "Name": "Integrated Math 3", "TimeNeeded": "3", "subject": "Mathematics" },
    { "Name": "Financial Algebra", "TimeNeeded": "2.5", "subject": "Mathematics" },
    { "Name": "Statistics/Problem Solving", "TimeNeeded": "1.5", "subject": "Mathematics" },
    { "Name": "AP Statistics", "TimeNeeded": "4", "subject": "Mathematics" },
    { "Name": "Trigonometry", "TimeNeeded": "3", "subject": "Mathematics" },
    { "Name": "Pre-Calculus", "TimeNeeded": "4", "subject": "Mathematics" },
    { "Name": "Highlights of Calculus", "TimeNeeded": "3", "subject": "Mathematics" },
    { "Name": "AP Calculus AB", "TimeNeeded": "7", "subject": "Mathematics" },
    { "Name": "AP Calculus BC", "TimeNeeded": "5", "subject": "Mathematics" },
    { "Name": "Exploration of Data", "TimeNeeded": "1", "subject": "Mathematics" },
    { "Name": "Biology: The Living Earth", "TimeNeeded": "2", "subject": "Science" },
    { "Name": "Physics in the Universe", "TimeNeeded": "1.5", "subject": "Science" },
    { "Name": "Chemistry in the Earth System", "TimeNeeded": "2", "subject": "Science" },
    { "Name": "Honors Chemistry in the Earth System", "TimeNeeded": "3", "subject": "Science" },
    { "Name": "AP Biology", "TimeNeeded": "5", "subject": "Science" },
    { "Name": "AP Chemistry", "TimeNeeded": "6", "subject": "Science" },
    { "Name": "Honors Physics", "TimeNeeded": "2", "subject": "Science" },
    { "Name": "AP Physics", "TimeNeeded": "3", "subject": "Science" },
    { "Name": "AP Environmental Science", "TimeNeeded": "5.5", "subject": "Science" },
    { "Name": "Forensics", "TimeNeeded": "2", "subject": "Science" },
    { "Name": "Human Anatomy and Physiology", "TimeNeeded": "2", "subject": "Science" },
    { "Name": "French 1", "TimeNeeded": "1.5", "subject": "Foreign Language" },
    { "Name": "French 2", "TimeNeeded": "2", "subject": "Foreign Language" },
    { "Name": "French 3", "TimeNeeded": "2.5", "subject": "Foreign Language" },
    { "Name": "French AP Lang", "TimeNeeded": "3", "subject": "Foreign Language" },
    { "Name": "German 1", "TimeNeeded": "1.5", "subject": "Foreign Language" },
    { "Name": "German 2", "TimeNeeded": "2", "subject": "Foreign Language" },
    { "Name": "German 3", "TimeNeeded": "2.5", "subject": "Foreign Language" },
    { "Name": "German AP Lang", "TimeNeeded": "3", "subject": "Foreign Language" },
    { "Name": "Spanish 1", "TimeNeeded": "1.5", "subject": "Foreign Language" },
    { "Name": "Spanish 2", "TimeNeeded": "2", "subject": "Foreign Language" },
    { "Name": "Spanish 3", "TimeNeeded": "2.5", "subject": "Foreign Language" },
    { "Name": "Spanish 4", "TimeNeeded": "3", "subject": "Foreign Language" },
    { "Name": "Spanish AP Lang", "TimeNeeded": "3", "subject": "Foreign Language" },
    { "Name": "Beginning Chorus", "TimeNeeded": "0.7", "subject": "Visual and Performing Arts" },
    { "Name": "Chamber Choir", "TimeNeeded": "2", "subject": "Visual and Performing Arts" },
    { "Name": "Concert Band", "TimeNeeded": "4", "subject": "Visual and Performing Arts" },
    { "Name": "Concert Choir", "TimeNeeded": "2", "subject": "Visual and Performing Arts" },
    { "Name": "Jazz Band", "TimeNeeded": "4", "subject": "Visual and Performing Arts" },
    { "Name": "Jazz Choir", "TimeNeeded": "4", "subject": "Visual and Performing Arts" },
    { "Name": "Orchestra", "TimeNeeded": "2", "subject": "Visual and Performing Arts" },
    { "Name": "Guitar", "TimeNeeded": "2.5", "subject": "Visual and Performing Arts" },
    { "Name": "Ceramics 1", "TimeNeeded": "0", "subject": "Visual and Performing Arts" },
    { "Name": "Ceramics 2", "TimeNeeded": "0", "subject": "Visual and Performing Arts" },
    { "Name": "Ceramics 3", "TimeNeeded": "0", "subject": "Visual and Performing Arts" },
    { "Name": "Drawing and Painting 1", "TimeNeeded": "1", "subject": "Visual and Performing Arts" },
    { "Name": "Drawing and Painting 2", "TimeNeeded": "1", "subject": "Visual and Performing Arts" },
    { "Name": "Drawing and Painting 3", "TimeNeeded": "2.5", "subject": "Visual and Performing Arts" },
    { "Name": "AP Studio Art (Drawing/Painting)", "TimeNeeded": "2.5", "subject": "Visual and Performing Arts" },
    { "Name": "Digital Art 1", "TimeNeeded": "0.3", "subject": "Visual and Performing Arts" },
    { "Name": "Digital Art 2", "TimeNeeded": "0.3", "subject": "Visual and Performing Arts" },
    { "Name": "AP 2-D Design (Digital)", "TimeNeeded": "1", "subject": "Visual and Performing Arts" },
    { "Name": "Drama 1", "TimeNeeded": "0.5", "subject": "Visual and Performing Arts" },
    { "Name": "Drama 2", "TimeNeeded": "1", "subject": "Visual and Performing Arts" },
    { "Name": "Drama 3", "TimeNeeded": "1", "subject": "Visual and Performing Arts" },
    { "Name": "Drama 4", "TimeNeeded": "1", "subject": "Visual and Performing Arts" },
    { "Name": "Technical Theater in Production", "TimeNeeded": "0", "subject": "Visual and Performing Arts" },
    { "Name": "Musical Theatre", "TimeNeeded": "1", "subject": "Visual and Performing Arts" },
    { "Name": "Video Production 1", "TimeNeeded": "0", "subject": "Visual and Performing Arts" },
    { "Name": "Film as Visual Literature", "TimeNeeded": "0", "subject": "Visual and Performing Arts" },
    { "Name": "Advanced Drafting and Architecture", "TimeNeeded": "2", "subject": "Visual and Performing Arts" },
    { "Name": "Psychology/Sociology", "TimeNeeded": "0", "subject": "College Prep Elective" },
    { "Name": "AP Psychology", "TimeNeeded": "1", "subject": "College Prep Elective" },
    { "Name": "AP Seminar", "TimeNeeded": "8", "subject": "College Prep Elective" },
    { "Name": "AP Research", "TimeNeeded": "8", "subject": "College Prep Elective" },
    { "Name": "Speech and Debate 1", "TimeNeeded": "1", "subject": "College Prep Elective" },
    { "Name": "Speech and Debate 2", "TimeNeeded": "1", "subject": "College Prep Elective" },
    { "Name": "Humanities 1: Critical Thinking with History Global Perspective", "TimeNeeded": "0", "subject": "College Prep Elective" },
    { "Name": "Video Production 2", "TimeNeeded": "1", "subject": "Visual and Performing Arts" },
    { "Name": "Exploring Computer Science", "TimeNeeded": "0", "subject": "College Prep Elective" },
    { "Name": "Computer Science and Programming", "TimeNeeded": "0", "subject": "College Prep Elective" },
    { "Name": "Computer Game Design", "TimeNeeded": "0", "subject": "College Prep Elective" },
    { "Name": "AP Computer Science A", "TimeNeeded": "3", "subject": "Mathematics" },
    { "Name": "Introduction to Engineering Technology", "TimeNeeded": "2", "subject": "College Prep Elective" },
    { "Name": "Advanced Engineering Technology", "TimeNeeded": "2", "subject": "College Prep Elective" },
    { "Name": "Architectural Engineering", "TimeNeeded": "2", "subject": "College Prep Elective" },
    { "Name": "Introduction to Product Innovation Design & Manufacturing", "TimeNeeded": "0.3", "subject": "College Prep Elective" },
    { "Name": "Advanced Product Innovation Design & Manufacturing", "TimeNeeded": "0.3", "subject": "College Prep Elective" },
    { "Name": "Health Education", "TimeNeeded": "0.5", "subject": "College Prep Elective" },
    { "Name": "Enriched Health Education", "TimeNeeded": "0.5", "subject": "College Prep Elective" },
    { "Name": "Fitness 1", "TimeNeeded": "0.3", "subject": "College Prep Elective" },
    { "Name": "Fit 2-Aerobics", "TimeNeeded": "0.3", "subject": "College Prep Elective" },
    { "Name": "Fit 2-Dance", "TimeNeeded": "0.3", "subject": "College Prep Elective" },
    { "Name": "Fit 2- Team Activities", "TimeNeeded": "0.3", "subject": "College Prep Elective" },
    { "Name": "Course 3- Weight Training", "TimeNeeded": "0.3", "subject": "College Prep Elective" },
    { "Name": "Course 3- Sports Specific Training", "TimeNeeded": "0.3", "subject": "College Prep Elective" },
    { "Name": "Course 4- Advanced Conditioning (Football)", "TimeNeeded": "0.3", "subject": "College Prep Elective" },
    { "Name": "Course 4- Yoga", "TimeNeeded": "0.3", "subject": "College Prep Elective" },
    { "Name": "AP 2-D Design", "TimeNeeded": "1", "subject": "Visual and Performing Arts" },
    { "Name": "Computer Applications", "TimeNeeded": "0", "subject": "College Prep Elective" },
    { "Name": "Computer Animation & Game Design", "TimeNeeded": "0", "subject": "College Prep Elective" },
    { "Name": "TV Production", "TimeNeeded": "2", "subject": "f" },
    { "Name": "Yearbook", "TimeNeeded": "1", "subject": "College Prep Elective" },
    { "Name": "Introduction to Technical Theater in Production", "TimeNeeded": "1", "subject": "Visual and Performing Arts" },
    { "Name": "Patient Care I", "TimeNeeded": "1", "subject": "College Prep Elective" },
    { "Name": "Patient Care II", "TimeNeeded": "2", "subject": "College Prep Elective" }
  ]
  const vistaOptions = [
    { "Name": "World Cultures", "subject": "Social Studies" },
    { "Name": "AP World History", "subject": "Social Studies" },
    { "Name": "US History", "subject": "Social Studies" },
    { "Name": "AP US History", "subject": "Social Studies" },
    { "Name": "Government", "subject": "Social Studies" },
    { "Name": "Economics", "subject": "Social Studies" },
    { "Name": "English 1", "subject": "English" },
    { "Name": "English 2", "subject": "English" },
    { "Name": "English 3", "subject": "English" },
    { "Name": "CSU ERWC 1+2 (English 4)", "subject": "English" },
    { "Name": "Honors English 1", "subject": "English" },
    { "Name": "Honors English 2", "subject": "English" },
    { "Name": "AP English Language", "subject": "English" },
    { "Name": "AP English Literature", "subject": "English" },
    { "Name": "Beginning Comp", "subject": "English" },
    { "Name": "English Foundations 1, 2, 3, 4", "subject": "English" },
    { "Name": "Integrated Math 1 with Support 1 and 2", "subject": "Mathematics" },
    { "Name": "Integrated Math 1", "subject": "Mathematics" },
    { "Name": "Integrated Math 2 Foundations", "subject": "Mathematics" },
    { "Name": "Integrated Math 2", "subject": "Mathematics" },
    { "Name": "Integrated Math 3", "subject": "Mathematics" },
    { "Name": "Financial Algebra", "subject": "Mathematics" },
    { "Name": "Pre-Calculus", "subject": "Mathematics" },
    { "Name": "AP Calculus A/B", "subject": "Mathematics" },
    { "Name": "AP Calculus B/C", "subject": "Mathematics" },
    { "Name": "AP Statistics", "subject": "Mathematics" },
    { "Name": "Personal Business Finance", "subject": "Mathematics" },
    { "Name": "Biology: The Living Earth", "subject": "Science" },
    { "Name": "Chemistry of the Earth’s Systems", "subject": "Science" },
    { "Name": "Honors Chemistry of the Earth’s Systems", "subject": "Science" },
    { "Name": "Physics in the Universe", "subject": "Science" },
    { "Name": "Human Anatomy and Physiology", "subject": "Science" },
    { "Name": "Forensics", "subject": "Science" },
    { "Name": "AP Environmental Science", "subject": "Science" },
    { "Name": "AP Biology", "subject": "Science" },
    { "Name": "AP Chemistry", "subject": "Science" },
    { "Name": "AP Physics 1", "subject": "Science" },
    { "Name": "AP Physics 2", "subject": "Science" },
    { "Name": "French 1", "subject": "Foreign Language" },
    { "Name": "French 2", "subject": "Foreign Language" },
    { "Name": "French 3", "subject": "Foreign Language" },
    { "Name": "Spanish 1", "subject": "Foreign Language" },
    { "Name": "Spanish 2", "subject": "Foreign Language" },
    { "Name": "Spanish 3", "subject": "Foreign Language" },
    { "Name": "Honors Spanish 4", "subject": "Foreign Language" },
    { "Name": "Ceramics and Sculpture 1", "subject": "Arts" },
    { "Name": "Ceramics and Sculpture 2", "subject": "Arts" },
    { "Name": "Animation 1", "subject": "Arts" },
    { "Name": "Animation 2", "subject": "Arts" },
    { "Name": "Drawing and Painting", "subject": "Arts" },
    { "Name": "Drawing and Painting 2", "subject": "Arts" },
    { "Name": "Drawing and Painting 3", "subject": "Arts" },
    { "Name": "AP Drawing", "subject": "Arts" },
    { "Name": "Fine Art Photography", "subject": "Arts" },
    { "Name": "Fine Art Photography 2", "subject": "Arts" },
    { "Name": "Orchestra", "subject": "Arts" },
    { "Name": "Concert Band", "subject": "Arts" },
    { "Name": "Contemporary Music Ensemble", "subject": "Arts" },
    { "Name": "Concert Choir", "subject": "Arts" },
    { "Name": "Guitar", "subject": "Arts" },
    { "Name": "Intermediate Guitar", "subject": "Arts" },
    { "Name": "Advanced Guitar", "subject": "Arts" },
    { "Name": "Master Guitar Ensemble", "subject": "Arts" },
    { "Name": "Drama 1", "subject": "Arts" },
    { "Name": "Drama 2", "subject": "Arts" },
    { "Name": "Drama 3", "subject": "Arts" },
    { "Name": "Drama 4", "subject": "Arts" },
    { "Name": "Intro to Tech Theatre", "subject": "Arts" },
    { "Name": "Video Production 1", "subject": "Arts" },
    { "Name": "Fitness 1", "subject": "Physical Education" },
    { "Name": "Fitness 2", "subject": "Physical Education" },
    { "Name": "Fitness 2-Dance", "subject": "Physical Education" },
    { "Name": "Course 4: CrossFit", "subject": "Physical Education" },
    { "Name": "Course 4: Advanced Conditioning", "subject": "Physical Education" },
    { "Name": "Course 3: Weight Training", "subject": "Physical Education" },
    { "Name": "Health", "subject": "Health" },
    { "Name": "Driver’s Education and Careers", "subject": "Career/Technical" },
    { "Name": "Personal Strategic Plan (PSP)", "subject": "Career/Technical" },
    { "Name": "Medical Biotechnology", "subject": "Career/Technical" },
    { "Name": "Advanced Medical Biotechnology", "subject": "Career/Technical" },
    { "Name": "Child Development and Guidance", "subject": "Career/Technical" },
    { "Name": "Developmental Psych. of Children", "subject": "Career/Technical" },
    { "Name": "Careers with Children", "subject": "Career/Technical" },
    { "Name": "Advanced Careers with Children", "subject": "Career/Technical" },
    { "Name": "Careers in Adv. Manufacturing and the Trades", "subject": "Career/Technical" },
    { "Name": "Video Production 2", "subject": "Arts" },
    { "Name": "Video Production 3", "subject": "Arts" },
    { "Name": "Peer Academic Tutor (Mathematics)", "subject": "Career/Technical" },
    { "Name": "Intro to Kinesiology", "subject": "Physical Education" },
    { "Name": "Sports Medicine", "subject": "Physical Education" },
    { "Name": "Yearbook", "subject": "Career/Technical" },
    { "Name": "Critical Approaches to Cinema", "subject": "Arts" },
    { "Name": "Humanities 1: Critical Thinking (Academic Decathlon)", "subject": "Social Studies" },
    { "Name": "Speech and Debate 1", "subject": "English" },
    { "Name": "Speech and Debate 2", "subject": "English" },
    { "Name": "Engineering Technology", "subject": "Career/Technical" },
    { "Name": "Advanced Engineering Technology", "subject": "Career/Technical" },
    { "Name": "Computer Science and Programming", "TimeNeeded": "2", "subject": "Technology" },
    { "Name": "AP Computer Science A", "subject": "Technology" },
    { "Name": "AP Human Geography", "subject": "Social Studies" },
    { "Name": "Sociology", "subject": "Social Studies" },
    { "Name": "AP Psychology", "subject": "Social Studies" },
    { "Name": "Psychology", "subject": "Social Studies" },
    { "Name": "Ethnic Studies", "subject": "Social Studies" },
    { "Name": "Teacher/Office Assistant", "subject": "Career/Technical" },
    { "Name": "Library Assistant", "subject": "Career/Technical" }
  ];


  const [searchOptions, setSearchOptions] = useState(FolsomOptions);
  useEffect(() => {

    if (data1.chooseSchools === "Folsom") {
      setSearchOptions(FolsomOptions)

    } else if (data1.chooseSchools === "Vista") {
      setSearchOptions(vistaOptions)

    }
  }, [data1]);


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
  function homeworkNameData(x, y) {
    const homeworkName = data1[key[0]].map((A) => {
      if (A.key !== y) {
        return A
      } else {
        return {
          ...A,
          name: x
        }
      }

    });
    data1[key[1]](homeworkName);
  }
  function deleteThis(x) {
    data1[key[1]](data1[key[0]].filter(y => y.key !== x));
  }
  function getValue(x) {
    try {
      return parseInt(searchOptions.find(z => z.Name === x).TimeNeeded);
    } catch (e) {
      return 0
    }
  }
  const options = searchOptions.map((option) => {
    return {
      subject: option.subject,
      ...option,
    }
  })
  const filterOptions = (options, { inputValue }) => {
    // console.log(matchSorter(options,inputValue,{keys:["Name"]}))

    try {
      return matchSorter(options, inputValue, { keys: [{ threshold: matchSorter.rankings.CONTAINS, key: 'subject' }, "Name"] }).sort((History, b) => b.subject.localeCompare(History.subject))
    }
    catch (e) {
      return options
    }

  }
  return (
    <>


      <h2 style={{ margin: "15px" }}>{key[0] === 'homework' ? 'Homework' : key[0] === 'personalTime' ? 'Personal Time' : 'Necessities'}</h2>
      {
        data1[key[0]].map((x) => {
          return (
            <div key={x.key}>
              <FormLabel sx={{ marginLeft: "30px",margin:1 }} >Name </FormLabel><Chip size="sm" sx= {{float:'right'}} onClick={() => deleteThis(x.key)}>X</Chip>
              {key[0] === 'homework' ? <Autocomplete
                sx={{ m: 3 }}
                freeSolo
                placeholder="Type anything"
                groupBy={(option) => option.subject}
                options={options.sort((History, b) => b.subject.localeCompare(History.subject))}
                getOptionLabel={(option) => option.Name || data1[key[0]].filter(y => y.key === x.key)[0].name}
                value={data1[key[0]].filter(y => y.key === x.key)[0].name}
                onInputChange={(event, value) => homeworkNameData(value, x.key)}
                filterOptions={filterOptions}
              /> : <Input sx={{ m: 2 }} defaultValue={x.name} onInput={(e) => searchArray(e.target.value)} />}


              <FormLabel sx={{ marginLeft: "30px" }}>Hours per week</FormLabel>
              <Slider
                sx={{ width: "70%", marginLeft: "30px" }}
                disabled={false}
                onChange={(e) => homeworkData(e.target.value, x.key)}
                marks = {[{value:getValue(x.name),label:getValue(x.name)}]}
                value={data1[key[0]].filter(y => y.key === x.key)[0].value}
                max={key[0] === "homework" ? 16 : key[0] === "personalTime" ? 50 : 70}
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
  const [personalTime, setPersonalTime] = useState([{ name: "Athletics", value: 0, key: crypto.randomUUID() }, { name: "School Clubs", value: 0, key: crypto.randomUUID() }, { name: "Job", value: 0, key: crypto.randomUUID() }, { name: "Religious Activities", value: 0, key: crypto.randomUUID() }, { name: "Community Service", value: 0, key: crypto.randomUUID() }]);
  const [homework, setHomework] = useState([{ name: "History", value: 0, key: crypto.randomUUID() }, { name: "English", value: 0, key: crypto.randomUUID() }, { name: "Mathematics", value: 0, key: crypto.randomUUID() }, { name: "Science", value: 0, key: crypto.randomUUID() }, { name: "Foreign Language", value: 0, key: crypto.randomUUID() }, { name: "Visual ands Performing Arts", value: 0, key: crypto.randomUUID() }, { name: "College Prep Elective", value: 0, key: crypto.randomUUID() }]);
  const [homeworkTotal, setHomeworkTotal] = useState(0);
  const [personalTimeTotal, setPersonalTimeTotal] = useState(0);
  const [requires, setRequires] = useState([{ name: "sleep", value: 0, key: crypto.randomUUID() }, { name: "Necessities", value: 0, key: crypto.randomUUID() }, { name: "Down Time", value: 0, key: crypto.randomUUID() }, { name: "Family Time", value: 0, key: crypto.randomUUID() }, { name: "Play Time", value: 0, key: crypto.randomUUID() }]);
  const [requriesTotal, setRequiresTotal] = useState(0);
  const [total, setTotal] = useState(168);
  const [overLoad, setoverLoad] = useState(false);
  const [chooseSchools, setChooseSchools] = useState('Folsom');
  //__Secure-
  const [cookies, setCookie, removeCookie] = useCookies(['Data']);
  const [open, setOpen] = useState(true);
  const [print, setPrint] = useState(false);
  useEffect(() => {
    if (cookies) {
      try {
        setHomework(cookies.Data.homework);
        setPersonalTime(cookies.Data.personalTime);
        setRequires(cookies.Data.requires)
        setOpen(cookies.Data.open);
      } catch (e) {
        //__Secure-
        //domain: "maplesyrupy.github.io" 
        setCookie("Data", { homework, personalTime, requires, open }, { sameSite: "strict", secure: "false" });
      }

    }

  }, [])

  useEffect(() => {
    if (total < 0) {
      setoverLoad(true)
    } else {
      setoverLoad(false)
    }
  }, [total])
  useEffect(() => {
    let total1 = 0
    let total2 = 0
    let total3 = 0
    const newDate = new Date()
    if (homework.length === 0) {
      setHomeworkTotal(0)
    } else if (personalTime.length === 0) {
      setPersonalTimeTotal(0)

    } else if (requires.length === 0) {
      setRequiresTotal(0)
    }
    for (let x of homework) {
      total1 += parseInt(x.value);
      total1 = total1 || 0;
      setHomeworkTotal(total1)

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
    //__Secure-
    //domain: "maplesyrupy.github.io",
    setCookie("Data", { homework, personalTime, requires, open }, { expires: new Date(newDate.getFullYear() + 1, newDate.getMonth(), newDate.getDay()), sameSite: "strict" });
  }, [homework, school, homeworkTotal, personalTime, personalTimeTotal, requires, requriesTotal, open]);
  function schoolData(x) {
    x = x || 0
    setSchool(parseInt(x));


  }
  function deleteAll() {
    setSchool(0);
    setPersonalTime([{ name: "Athletics", value: 0, key: crypto.randomUUID() }, { name: "School Clubs", value: 0, key: crypto.randomUUID() }, { name: "Job", value: 0, key: crypto.randomUUID() }, { name: "Religious Activities", value: 0, key: crypto.randomUUID() }, { name: "Community Service", value: 0, key: crypto.randomUUID() }])
    setHomework([{ name: "History", value: 0, key: crypto.randomUUID() }, { name: "English", value: 0, key: crypto.randomUUID() }, { name: "Mathematics", value: 0, key: crypto.randomUUID() }, { name: "Science", value: 0, key: crypto.randomUUID() }, { name: "Foreign Language", value: 0, key: crypto.randomUUID() }, { name: "Visual ands Performing Arts", value: 0, key: crypto.randomUUID() }, { name: "College Prep Elective", value: 0, key: crypto.randomUUID() }])
    setHomeworkTotal(0)
    setPersonalTimeTotal(0);
    setRequires([{ name: "sleep", value: 0, key: crypto.randomUUID() }, { name: "Necessities", value: 0, key: crypto.randomUUID() }, { name: "Down Time", value: 0, key: crypto.randomUUID() }, { name: "Family Time", value: 0, key: crypto.randomUUID() }, { name: "Play Time", value: 0, key: crypto.randomUUID() }])
    setRequiresTotal(0)
    setChooseSchools('Folsom')
    removeCookie("Data")
  }
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({ contentRef });
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

      <Grid id="MainGrid" container rowSpacing={1} columnSpacing={0} sx={{ minWidth: "95vw", minHeight: "95vh", boxShadow: "3" }} ref={contentRef} >
        <Grid size={6} sx={print?{ borderRight: "1px black solid",height:"auto",overflow:"visible",overflowX:"auto"}:{ borderRight: "1px black solid", height:"98vh",overflow:"hidden",overflowX:"auto" }}>
          {(print !== true) ? <>
            <Select defaultValue="Folsom">
              <Option onClick={() => setChooseSchools("Folsom")} value="Folsom" >Folsom High</Option>
              <Option onClick={() => setChooseSchools('Cordova')} value="Cordova" disabled>Cordova High</Option>
              <Option onClick={() => setChooseSchools('Vista')} value="Vista" disabled>Vista High</Option>
            </Select>
            <Tabs
              aria-label="Vertical tabs"
              orientation="vertical"
              sx={{ minWidth: 300, height: '100%', borderRadius: '20px' }}
            >

              <TabList>
                <Tab>School</Tab>
                <Tab>Personal Time</Tab>
                <Tab>Necessities</Tab>
                <Button onClick={() => setOpen(true)}>Tutorial</Button>
                <Button onClick={() => deleteAll()}>Reset</Button>
                <Button onClick={async () => { await setPrint(true), await reactToPrintFn() }}>Print</Button>
              </TabList>

              <TabPanel value={0} style={{ height: '95%', overflowY: "auto" }} >

                <h1 style={{ margin: "15px" }}>Classtime</h1>
                <h2 style={{ margin: "15px" }}>Hours per week in school</h2>
                <Slider
                  sx={{ width: "70%", marginLeft: "30px" }}
                  disabled={false}
                  onChange={(e) => schoolData(e.target.value)}
                  marks
                  value={school}
                  max={60}
                  min={0}
                  valueLabelDisplay="auto"
                />
                <GeneralRange homework={homework} setHomework={setHomework} chooseSchools={chooseSchools} />

              </TabPanel>
              <TabPanel value={1} style={{ height: '95%', overflowY: "auto" }}>

                <GeneralRange personalTime={personalTime} setPersonalTime={setPersonalTime} />

              </TabPanel>
              <TabPanel value={2} style={{ height: '95%', overflowY: "auto" }}>

                <GeneralRange requires={requires} setRequires={setRequires} />

              </TabPanel>
            </Tabs>
          </> :
            <>
              <div style={{ textAlign: "center",overflow:'visible'}} className="page-break">
                <Table aria-label="basic table" sx = {{textAlign:"left"}}>
                  <thead >
                    <tr>
                      <th style={{ width: '40%' }}>Topic</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {homework.map((x) =>

                      x.name.length !== 0 ? <tr key={crypto.randomUUID()}><td>{x.name}</td><td>{x.value}</td></tr> : ""

                    )}
                    {personalTime.map((x) =>

                      x.name.length !== 0 ? <tr key={crypto.randomUUID()}><td>{x.name}</td><td>{x.value}</td></tr> : ""

                    )}
                    {requires.map((x) =>

                      x.name.length !== 0 ? <tr key={crypto.randomUUID()}><td>{x.name}</td><td>{x.value}</td></tr>: ""

                    )}
                    <tr>
                      <td>Students Signature:________</td>
                      <td>Parents Signature:________</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </>
          }

        </Grid>
        <Grid size={6} sx={{ display: 'flex', alignItems: "center", justifyContent: 'center', height: '95vh' }}>
          <>
            <Piechart school={school} homeworkTotal={homeworkTotal} total={total} personalTimeTotal={personalTimeTotal} requriesTotal={requriesTotal} />
            <div>
              {
                overLoad ? <Alert severity="error"  >
                  You are not History time traveller, you are now {total * -1} hours over.
                </Alert> : ""
              }
            </div>
          </>
        </Grid>

      </Grid >
      <Modal open={open}>
        <ModalDialog layout="center" sx={{ overflowY: "auto" }} >
          <ModalClose onClick={() => setOpen(false)} />
          <h1>Welcome to the Time Budget Planner APP!</h1>
          <p >
            <>
              This short tutorial is intended to walk you through how to use this app.<br></br>
              When you click into the main app you will see the page divided into two sections,
              one section is taken up by a pie chart, while the other is where the main UI is.<br></br>
              The budget planner is seperated into three seperate sections, the following instrutions will focus on the classwork section.<br></br>
              When you click off this tutorial,
              You should see several things, a slider,    <Slider
                sx={{ width: "70%", marginLeft: "30px" }}
                marks
                valueLabelDisplay="auto"
              /><br></br>
              and a input bar. <Input sx={{ m: 2, width: "70%", marginLeft: "30px" }} /><br>
              </br>
              Unlike this input bar, the real input bar will expand into a list of search options when you click on it,
              use it to find the classes you are taking next year to plan out your weeks. Furthermore, if you type in a subject like
              Mathamatics, or History, the search algorithm will also filter the list of classes by subject allowing you to more easily
              plan. <br></br>
              However, you are not restricted by the classes as if you chose to, you can type in your own classes (example: folsom lake college class),
              and gain more freedom in your time budget planning. <br></br>
              You should also see a button. <br></br>  <Button sx={{ width: "70%", marginLeft: "30px", margin: "20px" }} variant="outlined">+</Button> <br>
              </br>
              This button will allow you to add more to your lists, so if you are taking a lot of extra classes, you can fit it into this budget planner.<br></br>
              The other two sections operate via a similar concept, but with the exception of the dropdown with options.<br></br>
              Last but not least, cookies are used in this app to store data, if you want to reset said cookie or reset the planner, just click the button saying reset.<br></br>
              Enjoy!!
            </>
          </p>
        </ModalDialog>
      </Modal>

    </>

  )
}

export default App
