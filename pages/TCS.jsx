import React, { useState } from 'react';


import DatePicker from "react-datepicker";
import axios from "axios";
import "react-datepicker/dist/react-datepicker.css";

import { subMonths, addMonths, format } from 'date-fns';


import Navbar from '../components/Navbar';

export default function TCS() {
  const [x, setX] = useState();
  const [startDate, setStartDate] = useState(new Date());

  const handleDateChange = async (v) => {
    setStartDate(v);
    console.log(format(startDate, 'yyyyMMdd'));
    let res = await axios.get('/docs/unsigned/list/' + format(startDate, "yyyyMMdd"));
    console.log(res);
  }

  return (
    <React.Fragment>
    <Navbar />
      <div class="custom-field">
        <DatePicker
          selected={startDate}
          onChange={(v) => handleDateChange(v)}
          dateFormatCalendar={"MMM yyyy"}
          minDate={subMonths(new Date(), 16)}
          maxDate={addMonths(new Date(), 16)}
          showMonthDropdown
          showYearDropdown
        />
        {/*<span class="arrow"></span>*/}
      </div>
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
          <tr>
            <th scope="row">{startDate.toString()}</th> <td>0</td> <td>0</td> <td>0</td> <td>0</td>
          </tr>
        </tbody>
      </table>
    </React.Fragment>
  )
}
