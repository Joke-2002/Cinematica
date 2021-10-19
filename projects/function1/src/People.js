import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'
export default function People() {
    const [people, setPeople] = useState([])
  useEffect(() => {
    const a = axios.get(`https://api.themoviedb.org/3/person/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
    a.then((v)=>{
      console.log(v)
      setPeople(v.data['results'])
    })
  }, [])
  console.log(people)
    return (
        <>
        <h1 className='tema'>Популярное люди</h1>
        <div className='d-flex justify-content-around flex-wrap mt-2'>
        {people.map(v => (
          <Card as={Link} to={`/peocom/${v.id}`} style={{ width: '18rem', margin: '10px', textDecoration: 'none'}}>
          <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + v.profile_path} />
          <Card.Body>
            <Card.Title align='center'>{v.name}</Card.Title>
            <Card.Text>
              {v.known_for.map(s => (
              <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + s.backdrop_path} />
              ))}
            </Card.Text>
          </Card.Body>
          </Card>  
         ))}
        </div>
        {/* <div>
       {people.map(v => (
        <div className='d-flex justify-content-around flex-wrap mt-2' style={{width: '18rem'}}>
        <Image src={'https://image.tmdb.org/t/p/w500' + v.profile_path}></Image>
          <div><h1>{v.name}</h1>
            <ul>Lorem, ipsum:
              <li>lorem1</li>
              <li>lorem2</li>
              <li>lorem3</li>
            </ul>
          </div>
        </div>
       ))}
        </div> */}
        </>
    )
}
