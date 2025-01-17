import axios from 'axios';
import React, { useState ,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Nav from '../components/Nav';

const LostPage = () => {

    const {id} = useParams();
    const [Data,setData] = useState();
    const[Comments,setComments] = useState("");

    useEffect(() => {
      
        const getvalue =async ()=>{

            const Data = await axios.get('https://lostfounded1.pythonanywhere.com/api/data/')
            const Data_id = Data.data.find((lost)=>lost.id === parseInt(id))

           if(Data_id){
            setData(Data_id)
           }
            
        }

        getvalue()

    }, [id])
    

    const submitHandle= async(e)=>{
        e.preventDefault();
        try {
            const response = await axios.patch(`https://lostfounded1.pythonanywhere.com/api/data/${Data.id}/`, {
                comments:[...(Data.comments || []), Comments]
            });
            setComments("");
            window.location.reload(false);
        } catch (error) {
            console.error(error);
        }

    }
   
    
    
    
    

  return (
    <div className='h-full w-full'>

      <Nav/>

<div className="card mb-3">
  <img className="card-img-top" src={`https://lostfounded1.pythonanywhere.com/${Data?.img}`} alt="Card image cap" />
  <div className="card-body">
    <h5 className="card-title">{Data?.name}</h5>
    <p className="card-text">
      {Data?.description}
    </p>
    <p className="card-text" >
     Contact : {Data?.phone}
    </p>
    <p className="card-text">
      <small className="text-muted"> Date/Time  :- {Data?.created_at}</small>
    </p>

    <button type="button" className="btn btn-primary btn-lg">
      {Data?.found === "True" ? "Found" : "Not Found"}
    </button>
  </div>
</div>
<h4 className='m-1'>Comments:</h4>

{Data?.comments ? (
    Object.entries(Data.comments).map(([key, value], index) => (
        <p key={index} className="card-text btn btn-secondary m-2">
        {index+1} : {value}
        </p>
    ))
) : (
    <p>No comments available</p>
)}

<form >
    <div className='flex w-full m-3 mt-3'>
    <input onChange={(e)=>setComments(e.target.value)}   type="text" placeholder='enter comments' />
    <button onClick={submitHandle} type='submit'> send</button>
    </div>
    
</form>

    </div>
  )
}

export default LostPage