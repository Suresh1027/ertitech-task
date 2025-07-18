import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Dashboard() {
    const [getdata, setGetdata] = useState([])
    const [post, setPost] = useState({
        title: "",
        description: ""
    })
    console.log(getdata);

    useEffect(() => {
        async function fetch() {
            try {
                const res = await axios.get('http://localhost:5000/products/get', {
                    headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
                })
                setGetdata(res.data);
            } catch (error) {
                console.log("server error");

            }
        }
        fetch()
    }, [])

    function handlechange(e) {
        setPost({ ...post, [e.target.name]: e.target.value })
    }
    async function handlesubmit(e) {
        e.preventDefault()
        try {
            const res = await axios.post('http://localhost:5000/products/create', post)
            alert("created succesfully")
        } catch (error) {
            console.log("server error");
        }
    }
    return (
        <>
            <div style={{ width: "100%", height: "100vh", backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: 'column', gap: "20px" }}>
                <form onSubmit={handlesubmit}>

                    <div>
                        <label htmlFor="">title</label>
                        <input type="text" name='title' value={post.title} onChange={handlechange} />
                    </div>
                    <div>
                        <label htmlFor="">description</label>
                        <input type="text" name='description' value={post.description} onChange={handlechange} />
                    </div>
                    <button>submit</button>
                </form>
            </div>
            <div style={{ backgroundColor: "grey", display: "flex", justifyContent: "center", alignItems: "center" }}>
                {getdata.map((get) => (
                    <div>
                        <h2>{get.title}</h2>
                        <h2>{get.description}</h2>
                    </div>
                ))}
            </div >
        </>
    )
}

export default Dashboard