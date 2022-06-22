import React, { useState } from 'react';

import Navbar from '../components/Navbar';

const InputFieldOne = (props) => {
    return <label class="custom-field">
        <input
            type="text"
            name={props.label}
            onChange={props.onChange}
            required
        />
        <span class="placeholder">{props.label}</span>
    </label>;
}


export default function Download() {
  const [x, setX] = useState();

  return (
    <React.Fragment>
      <Navbar />
      <span class="center">
        <div class="card shadowed" style={{marginTop: 20}}>
          <InputFieldOne label="test" onChange={e => setX(e.target.value)} />
          <div style={{display: 'flex'}}>
            <button variant="contained">Action 1</button>
            <button variant="contained">Action 2</button>
          </div>
        </div>
      </span>
    </React.Fragment>
  )
}
