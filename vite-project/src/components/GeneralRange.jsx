import { useState, useEffect } from 'react';
import FormLabel from '@mui/joy/FormLabel';
import Chip from '@mui/joy/Chip';
import Autocomplete from '@mui/joy/Autocomplete';
import Input from '@mui/joy/Input';
import Slider from '@mui/joy/Slider';
import Box from '@mui/joy/Box';
import Button from '@mui/material/Button';
import { matchSorter } from 'match-sorter';
import { useMemo } from 'react';

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
  ];
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
      setSearchOptions(FolsomOptions);
    } else if (data1.chooseSchools === "Vista") {
      setSearchOptions(vistaOptions);
    }
  }, [data1]);

  function addItem() {
    data1[key[1]]([...data1[key[0]], { name: "", value: 0, key: crypto.randomUUID() }]);
  }

  function itemData(x, y) {
    const updatedHomework = data1[key[0]].map((item) =>
      item.key !== y ? item : { ...item, value: x }
    );
    data1[key[1]](updatedHomework);
  }

  function updatedItemData(x, y) {
    console.log(x)
    const updatedHomework = data1[key[0]].map((item) =>
      item.key !== y ? item : { ...item, name: x }
    );
    data1[key[1]](updatedHomework);
  }

  function deleteItem(x) {
    data1[key[1]](data1[key[0]].filter((item) => item.key !== x));
  }

  function getValue(x) {
    try {
      return parseInt(searchOptions.find((option) => option.Name === x).TimeNeeded);
    } catch {
      return 0;
    }
  }

  const options = searchOptions.map((option) => ({
    subject: option.subject,
    ...option,
  }));

  const filterOptions = (options, { inputValue }) => {
    try {
      return matchSorter(options, inputValue, {
        keys: [{ threshold: matchSorter.rankings.CONTAINS, key: 'subject' }, "Name"],
      }).sort((a, b) => b.subject.localeCompare(a.subject));
    } catch {
      return options;
    }
  };
const selectedValues = useMemo(() => {
  const valueMap = new Map(data1[key[0]].map(item => [item.key, item.name]));
  return valueMap;
}, [data1[key[0]]]);

function getSelectedValue(key) {
  return selectedValues.get(key) || "";
}
console.log(data1[key[0]])
  return (
    <>
      <h2 style={{ margin: "15px" }}>
        {key[0] === 'homework' ? 'Homework' : key[0] === 'personalTime' ? 'Personal Time' : 'Necessities'}
      </h2>
      {data1[key[0]].map((x) => (
        <div key={x.key} >
          <FormLabel sx={{ marginLeft: "30px", margin: 1 }}>Name</FormLabel>
          <Chip size="sm" sx={{ float: 'right' }} onClick={() => deleteItem(x.key)}>X</Chip>
          {key[0] === 'homework' ? (
            <Autocomplete
              sx={{ m: 3 }}
              freeSolo
              placeholder="Type anything"
              groupBy={(option) => option.subject}
              options={options.sort((a, b) => b.subject.localeCompare(a.subject))}
              getOptionLabel={(option) => option.Name || getSelectedValue(x.key)}
              value = {x.name}
              // value={getSelectedValue(x.key)}
              onBlur={(event)=>updatedItemData(event.target.value,x.key)}
              filterOptions={filterOptions}
              slotProps={{ input: { maxLength: 40 } }}
            />
          ) : (
            <Input sx={{ m: 2 }} defaultValue={x.name}  onChange={(event) => updatedItemData(event.target.value, x.key)} slotProps={{input:{maxLength:40}}}/>
          )}
          <FormLabel sx={{ marginLeft: "30px" }}>Hours per week</FormLabel>
          <Slider
            sx={{ width: "70%", marginLeft: "30px", marginTop: "10px" }}
            onChange={(e) => itemData(e.target.value, x.key)}
            marks={key[0]==="homework"?[{ value: getValue(x.name), label: getValue(x.name) }]:true}
            value={data1[key[0]].find((item) => item.key === x.key).value}
            max={key[0] === "homework" ? 16 : key[0] === "personalTime" ? 50 : 70}
            min={0}
            valueLabelDisplay="auto"
          />
        </div>
      ))}
      <Box sx={{ display: "flex", justifyContent: "center", margin:3 }}>
        <Button sx={{ width: "50%",marginBottom:2 }} variant="outlined" size="large" onClick={addItem} >+</Button>
      </Box>
    </>
  );
}

export default GeneralRange;
