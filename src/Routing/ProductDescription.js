import React from 'react';
import { useParams,useNavigate } from 'react-router-dom';
export const ProductDescription=()=>{

  const {phoneSelected} = useParams();

  const navigate = useNavigate();

  const state = {
        name:'samsung',
        price:29000
    }
  
  const handleNavigate = () =>{    //when using link and we need to validate it
    if(5>2){
      navigate('/details');
    }
    else 
      navigate('/error');
  }

  return (
      <div>
          <h1>ProductDescription: {phoneSelected}</h1>
          <p>Description about {phoneSelected}</p>
          <button className='btn btn-warning' onClick={()=> navigate('/details', state )}>Details</button>
      </div>
    )
  }

