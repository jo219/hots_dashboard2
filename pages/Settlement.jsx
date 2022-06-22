import React, { useState } from 'react';


import Navbar from '../components/Navbar';


export default function Settlement() {
  const [transactions, setTransactions] = useState([]);

  return (
    <React.Fragment>
      <Navbar />
      <div class="center" style={{marginTop: 20}} >
        <table id="settlement-table">
          <tr>
            <th>Halo</th><th>Halo2</th>
            <th>Halo</th><th>Halo2</th>
            <th>Halo</th><th>Halo2</th>
          </tr>
          <tr>
            <td>Hai</td>
            <td>Hai</td>
            <td>Hai</td>
            <td>Hai</td>
            <td>Hai</td>
            <td>Hai</td>
          </tr>
          <tr>
            <td>Hai</td>
            <td>Hai</td>
            <td>Hai</td>
            <td>Hai</td>
            <td>Hai</td>
            <td>Hai</td>
          </tr>
        </table>
        <button variant="contained" onClick={() => download_table_as_csv()}>Download</button>

      </div>
    </React.Fragment>
  )
}

function download_table_as_csv(table_id = 'settlement-table', separator = ',') {
  var rows = document.querySelectorAll('table#' + table_id + ' tr');
  
  var csv = [];
  for (var i = 0; i < rows.length; i++) {
      var row = [], cols = rows[i].querySelectorAll('td, th');
      for (var j = 0; j < cols.length; j++) {
          var data = cols[j].innerText.replace(/(\r\n|\n|\r)/gm, '').replace(/(\s\s)/gm, ' ')
          data = data.replace(/"/g, '""');
          row.push('"' + data + '"');
      }
      csv.push(row.join(separator));
  }
  var csv_string = csv.join('\n');

  var filename = 'export_' + table_id + '_' + new Date().toLocaleDateString() + '.csv';
  var link = document.createElement('a');
  link.style.display = 'none';
  link.setAttribute('target', '_blank');
  link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv_string));
  link.setAttribute('download', filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}