import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import axios from 'axios'
import Cards from './Cards'
export default function Genres() {
    let { id } = useParams();

    const [genre, setGenre] = useState([])
    useEffect(() => {
        console.log(id)
      const a = axios.get(`https://api.themoviedb.org/3/discover/movie?with_genres=${id}&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
      a.then((v)=>{
        console.log(v)
        setGenre(v.data['results'])
      })
    }, [id])
    return (
        <>
           <Cards name={genre} />
        </>
    )
}
