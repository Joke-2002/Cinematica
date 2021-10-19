import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import {Image} from 'react-bootstrap'
export default function PeoCom() {
    let { id } = useParams();
    const [peocom, setPeocom] = useState([])
    useEffect(() => {
        const a = axios.get(`https://api.themoviedb.org/3/person/${id}?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
    a.then((v)=>{
      console.log(v)
      setPeocom(v.data)
    })
    }, [id])
    console.log(peocom)
    return (
        <div align='center'>
            <Image src={'https://image.tmdb.org/t/p/w500' + peocom.profile_path}></Image>
        </div>
    )
}
