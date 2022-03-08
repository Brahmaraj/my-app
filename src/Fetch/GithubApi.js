import React, { useEffect, useState } from 'react'
import axios from 'axios'
import "./style.css"

const GithubApi = () => {
    const [data1, setUsers] = useState([])

    const getUsers = async () => {
        const data2  = await axios.get('https://api.github.com/users');
        console.log(data2.data);
        setUsers(data2.data);
        console.log(data1)
        // const response = await fetch('https://api.github.com/users');
        // setUsers(await response.json())
        // console.log(users);
    }

    useEffect( () => {
        getUsers()
    }, [] )

  return (
    <div className='main_container'>
        
            {
                data1.map((data)=>{
                    console.log(data)
                    return (
                    <>
                        <div class="card" style={{width: "18rem"}} key={data.id}>
                        <img className="card-img-top" src={data.avatar_url} alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="card-title">{data.id}</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                        <ul class="list-group list-group-flush">
                            <li class="list-group-item">Cras justo odio</li>
                            <li class="list-group-item">Dapibus ac facilisis in</li>
                            <li class="list-group-item">Vestibulum at eros</li>
                        </ul>
                        </div>
                    </>
                    )
                })
            }
        
    </div>
  )
}

export default GithubApi