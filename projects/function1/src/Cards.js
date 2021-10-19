import React, {useState, useEffect} from 'react';
import {Card, ListGroup} from 'react-bootstrap';
import axios from 'axios'
import {Link } from 'react-router-dom'

function Cards(props) {
    const [genre, setGenre] = useState([])
    const [spin, setSpin] = useState(false)
    
  useEffect(() => {
    setSpin({spin: true})
    const a = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
    a.then((v)=>{
         console.log(v)
       setGenre(v.data['genres'])
    })
    .finally(()=> {
      setSpin({spin: false})
    })
  }, [])
    return (
        <>
        {spin.spin ? (
          <div style={{marginLeft: '50%', marginTop: '20%'}} className="spinner-border" role="status">
          <span class="sr-only"></span>
          </div>
        ) : 
        <div className='d-flex justify-content-around flex-wrap mt-2'>
          <div className='row col-8 d-flex justify-content-around flex-wrap mt-2 '>
            {props.name.map(v => (
                <Card as={Link} to={`/comment/${v.id}`} className='cards w-25' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500'+v.poster_path} />
                <Card.Body>
                    <Card.Title style={{color: 'blue'}} align='center'>{v.title}</Card.Title>
                    <Card.Text>
                    <h4 style={{color: 'blue'}} align='center'>{v.name}</h4>  
                    <h6 align='center'>{v.first_air_date}</h6>
                    </Card.Text>
                </Card.Body>
                </Card>
            ))}
            </div> 
            <div>
            <Card style={{ width: '20rem', marginLeft: '-15%' }}>
                <ListGroup variant="flush">
                {genre.map(a => (
                    <ListGroup.Item as={Link} to={`/genres/${a.id}`}>{a.name}</ListGroup.Item>
                ))}
                </ListGroup>
                </Card>
            </div>
          </div> 
          }
        </>
    );
}

export default Cards;