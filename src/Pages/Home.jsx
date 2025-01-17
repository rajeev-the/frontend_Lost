import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {Link, } from "react-router-dom"
import Nav from '../components/Nav';

const Home = () => {
    const [Data, setData] = useState([]); // Initialize as an empty array

    useEffect(() => {
        const getdata = async () => {
            try {
                const res = await axios.get('https://lostfounded1.pythonanywhere.com/api/data/');
                setData(res.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        getdata();
    }, []);


    return (
        <div className='h-full w-full'>
            <Nav/>
            {/* Centered Button */}
            <div className='m-4 d-flex justify-content-center'>
                <Link to={"/create/lost"} className="btn btn-primary btn-lg">Create Lost</Link>
            </div>

            {/* Cards Section */}
            <div className='h-auto w-full d-flex flex-wrap justify-content-center'>
                {Data.length > 0 ? (
                    Data.map((data, index) => (
                        <div className="card m-3" key={index} style={{ width: "15rem"  }}>
                            {/* Display image if available, fallback if not */}
                            <img
                                className="card-img-top"
                                src={`https://lostfounded1.pythonanywhere.com/${data.img}`}
                                alt={data.name || "Lost Item"}
                            />
                            <div className="card-body">
                                <h5 className="card-title">{data.name}</h5>
                                <p className="card-text">{data.description || "No description available."}</p>
                                <p className="card-text"><strong>Location:</strong> {data.location}</p>
                                <Link to={`/create/lost/${data.id}`} href="#" className="btn btn-primary">Details</Link>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="text-center m-5">
                        <h5>Loading data...</h5>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Home;
