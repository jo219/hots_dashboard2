import React, { useState } from 'react';

import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

import { subMonths, addMonths } from 'date-fns';

import {
  ComposedChart, Area, Scatter, BarChart, Bar,
  Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend
} from "recharts";


import Navbar from '../components/Navbar';

// axios.defaults.withCredentials = true;
// axios.defaults.headers.get['Access-Control-Allow-Origin'] = '*';

export default function Dashboard() {
  return (
    <React.Fragment>
      <Navbar />
      <div class="ctn" style={{display: 'flex', alignItems: 'flex-start'}}>
        <div class="plain-card" style={{background: 'rgba(85,110,230,.25)', color: '#556ee6'}}>
          <h3>Welcome back!</h3>
          <p>eMaterai Dashboard</p>
          <ul style={{paddingLeft: '20px'}}>
            <li>Trade Confirmation</li>
            <li>Form Pembukaan Rekening Efek</li>
          </ul>
        </div>
        <div class="plain-card" style={{}}>
          <h5>Stamp</h5>
        </div>
        <div class="plain-card" style={{}}>
          <h5>Total TC</h5>
        </div>
        <div class="plain-card" style={{}}>
          <h5>Balance</h5>
        </div>
      </div>
      <div class="ctn" style={{display: 'flex', alignItems: 'flex-start'}}>
        <MonthlyGraph />
        <DailySum />
      </div>
    </React.Fragment>
  )
}

function DailySum() {
  // const [sumDate, setSumDate] = useState(moment(new Date()).format('YYYY-MM-DD'));
  const [sumDate, setSumDate] = useState(new Date());
  const [selectedFile, setSelectedFile] = useState();
  const onFileChange = event => { setSelectedFile(event.target.files[0]); };

  const onFileUpload = async () => {
    
    const formData = new FormData();
  
    await formData.append("myFile", selectedFile, selectedFile.name);
  
    console.log(formData);
    for (var key of formData.entries()) {
      console.log(key);
      console.log(key[0] + ', ' + key[1]);
    }
    console.log(selectedFile);
  
    // axios.post("api/uploadfile", formData);
  };

  return (
    <div class="card shadowed">

      <div class="custom-field">
        <DatePicker
          selected={sumDate}
          onChange={(v) => setSumDate(v)}
          dateFormatCalendar={"MMM yyyy"}
          minDate={subMonths(new Date(), 16)}
          maxDate={addMonths(new Date(), 16)}
          showMonthDropdown
          showYearDropdown
        />
        {/*<span class="arrow"></span>*/}
      </div>

      {/*<label class="custom-field">
        <input
            data-date="" data-date-format="DD MMMM YYYY"
            value={sumDate}
            style={{width: '180px'}}
            class="datepicker-style"
            type="date"
            name="test"
            // value={sumDate}
            onChange={(v) => {console.log(v.target.value); setSumDate(v.target.value);}}            
        />
        {sumDate=="" && <span class="arrow"></span>}
      </label>*/}

      <p>
        <br />
      </p>

      {/* <input type="file" onChange={onFileChange} />
      <button onClick={onFileUpload}>{"Upload (check console)"}</button> */}

      <h4>Daily</h4>
      <table>
        <thead>
          <tr><th>#</th> <th>Normal</th> <th>Manual</th> <th><i style={{fontSize: '14px'}} class="fa">&#xf0e0;</i></th> <th>Total</th></tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">TC</th> <td>0</td> <td>0</td> <td>0</td> <td>0</td>
          </tr> 
          <tr>
            <th scope="row">EIPO</th> <td>0</td> <td>0</td> <td>0</td> <td>0</td>
          </tr>
        </tbody>
      </table>
      <p style={{marginTop: '25px'}} />
      <h4>Monthly</h4>
      <table>
        <thead>
          <tr><th>#</th> <th>Normal</th> <th>Manual</th> <th><i style={{fontSize: '14px'}} class="fa">&#xf0e0;</i></th> <th>Total</th></tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">TC</th> <td>0</td> <td>0</td> <td>0</td> <td>0</td>
          </tr> 
          <tr>
            <th scope="row">EIPO</th> <td>0</td> <td>0</td> <td>0</td> <td>0</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}


function MonthlyGraph() {
  const [graphDate, setGraphDate] = useState(new Date());

  return (
    <div class="card" style={{maxWidth: 800}}>

      <div class="custom-field">
        <DatePicker
          // class="datepicker-style"
          selected={graphDate}
          onChange={(v) => setGraphDate(v)}
          dateFormat="MM/yyyy"
          showMonthYearPicker
        />
        {/*<span class="arrow"></span>*/}
      </div>
      {/*<div style={{display: 'flex'}}>
        <label class="custom-field">
          <select onChange={(e) => {console.log(e);}} style={{width: '70px', marginRight: '10px'}}>
            {[...Array(12).keys()].map(v => {
              let val = (v+1).toString()
              return <option value={val} label={val}></option>;
            })}
          </select>
          <span class="arrow"></span>
        </label>
        <label class="custom-field">
          <select onChange={(e) => {console.log(e);}} style={{width: '100px'}}>
            {[...Array(200).keys()].map(v => {
              let val = (v+1900).toString()
              return <option value={val} label={val}></option>;
            })}
          </select>
          <span class="arrow"></span>
        </label>
      </div>*/}
    
      <ComposedChart
        width={700}
        height={360}
        data={data}
        margin={{
          top: 20,
          right: 20,
          bottom: 20,
          left: 20
        }}
      >
        <CartesianGrid stroke="#f5f5f5" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar name=">10k" dataKey="pv" barSize={20} fill="#556ee6" />
        <Line name="All" type="monotone" dataKey="uv" stroke="#ff7300" />
      </ComposedChart>

      {/*<BarChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 20,
          right: 30,
          left: 20,
          bottom: 5
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line name=">10k" dataKey="pv" stackId="a" fill="#8884d8" />
        <Bar name="All" dataKey="uv" stackId="a" fill="#82ca9d" />
      </BarChart>*/}
    </div>
  );
}

function convertToCSV(inp) {
  var json = inp.items
  var fields = Object.keys(json[0])
  var replacer = function(key, value) { return value === null ? '' : value } 
  var csv = json.map(function(row){
    return fields.map(function(fieldName){
      return JSON.stringify(row[fieldName], replacer)
    }).join(',')
  })
  csv.unshift(fields.join(',')) // add header column
  csv = csv.join('\r\n');
  return csv;
}


function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
    xmlHttp.send( {"key": "2022-05-23"} );
    return xmlHttp.responseText;
}

const data = [
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "4",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "4",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "4",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "4",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "4",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "4",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "4",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "4",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "1",
    uv: 4000,
    pv: 2400,
    amt: 2400
  },
  {
    name: "2",
    uv: 3000,
    pv: 1398,
    amt: 2210
  },
  {
    name: "3",
    uv: 2000,
    pv: 9800,
    amt: 2290
  },
  {
    name: "4",
    uv: 2000,
    pv: 9800,
    amt: 2290
  }
];