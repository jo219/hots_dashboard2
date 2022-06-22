import React from 'react';
import Link from 'next/link';
// import { Link } from 'react-router-dom';


export default function Navbar() {

  return (
    <div style={{background: 'white'}}>
      <div class="sh">
        <div class="ctn" style={{background: 'white', zIndex: '10001'}}>
          <img src="/images/logo-mirae.png" width="170" alt="Logo" style={{marginTop: '12px', marginBottom: '3px', marginLeft: '20px'}} />
        </div>
      </div>
      <div class="sh">
        <div class="ctn" style={{background: 'transparent', zIndex: '10000'}}>
          <div class="nav fa">
            <div><Link href="/Dashboard"><a>&#xf015; <span class="font-def">Dashboards</span></a></Link></div>
            <div><Link href="/Stamps"><a>&#xf096; <span class="font-def">Stamps</span></a></Link></div>
            <div><Link href="/Download"><a>&#xf0a0; <span class="font-def">Download Trade Confirmation</span></a></Link></div>
            <div><Link href="/Settlement"><a>&#xf0a0; <span class="font-def">Settlement</span></a></Link></div>
            <div><Link href="/TCS"><a>&#xf0a0; <span class="font-def">TCs</span></a></Link></div>
          </div>
        </div>
      </div>
    </div>
  )
}
