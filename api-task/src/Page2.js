import React,{useState, useEffect} from 'react'
import MaterialTable from 'material-table';
import { Button} from 'react-bootstrap'
function Page2(props){
  
      
      useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users") 
        .then(resp=>resp.json())
        .then(resp=>{
        setData(resp)})
      }, [])
      
    
      const [data, setData] = useState()
      const columns = [
        {title:"ID", field:"id"},
        {title:"Username", field:"username"},
        {title:"Name", field:"name"},
        {title:"Email", field:"email"},
        {title:"Phone", field:"phone"},
        {title:"Web-Link", field:"website"},
      ]
    return(
        <div>
        <h1>When users is on Page2</h1>
            <MaterialTable
            title="List of Users"
            data={data}
            columns={columns}
      />
      <Button className="btn" onClick={()=>{
      props.history.push('/page1')
    }}>Go to  page-1</Button>
        </div>
    )
}
export default Page2;