import axios from 'axios';
import React, { useEffect, useState } from 'react'

const useFetch = ({url, apiType, userData}) => {
  const [ data, setData ] = useState();
  useEffect(()=>{
    try {
        switch(apiType) {
            case 'get' :
            {
                axios.get('http://localhost:3000/allusers').then((response)=>{
                    setData(response.data);
            }).catch((err) => {
                console.log("error in catch api", err);
                setData(err);
            })
            }
        }  
    } catch (error) {
        setData(error);
    }
  },[url]);

  return data;
}

export default useFetch;