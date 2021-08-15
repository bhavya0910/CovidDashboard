import react, { useEffect, useState } from 'react';
import "./Statewise.css";
import 'bootstrap/dist/css/bootstrap.css';
import Table from 'react-bootstrap/Table'
const Statewise =()=>{
    const [data, setdata] = useState([]);
    const getcoviddata = async () =>{
      const res = await  fetch('https://data.covid19india.org/data.json');
      const actual = await res.json();
      console.log(actual.statewise);
      setdata(actual.statewise);
    }
    useEffect(()=>{ getcoviddata();},[]);
return(
    <>
  
    <div style={{ backgroundImage: `url("./virus.jpg")` }}>
        <div className="main-heading">
            <h1 className="mb-5 text-center"><span className=" font-weight-bold">India</span> Covid-19 DashBoard</h1>

        </div>
        <Table striped bordered hover variant="light" size="sm" className="table-reponsive">
  <thead>
    <tr>
      <th width="170">State</th>
      <th width="170">Confirmed</th>
      <th width="170">Recoverd</th>
      <th width="170">Deaths</th>
      <th width="170">Active</th>
      <th width="170">Updated</th>
  
    </tr>
  </thead>
<tbody>
    {
        data.map((curelem ,indx)=>{
return(
    <tr key ={indx}>
      <th width="170">{curelem.state}</th>
      <td width="170">{curelem.confirmed}</td>
      <td width="170">{curelem.deaths}</td>
      <td width="170">{curelem.active}</td>
      <td width="170">{curelem.recovered}</td>
      <td width="170">{curelem.lastupdatedtime}</td>
  
    </tr>

)
        })
    }


</tbody>
            </Table>
        </div>

  
    </>
)
}
export default Statewise;