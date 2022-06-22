import React, { useState } from 'react';

import Navbar from '../components/Navbar';

export default function Stamps() {
  const [x, setX] = useState();
  const [startDate, setStartDate] = useState(new Date());

  return (
    <React.Fragment>
    <Navbar />
      <div class="center">
        <div class="card shadowed">
          <p>Stamps</p>
          <button>Download</button>
        </div>
      </div>
    </React.Fragment>
  )
}
