import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Cards from './Cards'
export default function Series() {
    const [series, setSeries] = useState([])
    useEffect(() => {
      const a = axios.get(`https://api.themoviedb.org/3/tv/on_the_air?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
      a.then((v)=>{
        console.log(v)
        setSeries(v.data['results'])
      })
    }, [])
    console.log(series)
    return (
        <>
        <h1 className='tema'>TV Сериалы шоу</h1>
         <Cards name={series}/>  
        </>
    )
}
