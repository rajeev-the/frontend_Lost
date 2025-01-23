import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from 'react-router-dom'
import Nav from '../components/Nav'

const LostCreate = () => {
      const[Name, setName] = useState("")
        const[Location, setLocation] = useState("")
        const [Description, setDescription] = useState("")
        const [Contact, setContact] = useState("")
        const [File, setFile] = useState(null)
        const Navigate = useNavigate()
    
    
    
        const submitHandler = async (e) => {
            e.preventDefault();
    
            const formData = new FormData();
            formData.append("img", File); // Add the file to FormData
            formData.append("name", Name);
            formData.append("description", Description);
            formData.append("phone", Contact);
            formData.append("location", Location);
    
            try {
                const res = await axios.post('https://lostfounded1.pythonanywhere.com/api/data/', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',  // Important for file uploads
                    },
                });
               
                setContact("")
                setDescription("")
                setFile(null)
                setName("")
                Navigate('\')
                
               
            } catch (error) {
                console.error(error);
            }
        }
    
  return (
    <div className=' w-full h- full  '>
        <Nav/>

        <div className='p-3'>
    <form>
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">Enter Name</label>
            <input
                type="text"
                name='name'
                className="form-control"
                onChange={(e) => setName(e.target.value)}
                aria-describedby="emailHelp"
                placeholder="Enter name"
            />
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Contact Details</label>
            <input
                type="text"
                className="form-control"
                placeholder="Enter contact"
                onChange={(e) => setContact(e.target.value)}
            />
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Location</label>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Location"
                onChange={(e) => setLocation(e.target.value)}
            />
        </div>

        <div className="form-group">
            <label htmlFor="exampleInputPassword1">Description</label>
            <input
                type="text"
                className="form-control"
                placeholder="Enter Description"
                onChange={(e) => setDescription(e.target.value)}
            />
        </div>

        <div className="form-group mt-2">
            <label htmlFor="exampleFormControlFile1" className='p-1'>Image File (Please Use below 200KB)</label>
            <input
                type="file"
                className="form-control-file"
                name='img'
                onChange={(e) => setFile(e.target.files[0])}
            />
        </div>

        <button onClick={submitHandler} type="submit" className="btn btn-primary mt-3">
            Submit
        </button>
    </form>
    </div>
</div>
  )
}

export default LostCreate
