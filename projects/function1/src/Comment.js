import React, {useEffect, useState} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {Image   } from 'react-bootstrap';
import StarRatings from 'react-star-ratings';

export default function Comment() {
    let { id } = useParams();
    const [comments, setComments] = useState([])
    useEffect(() => {
        const a = axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`);
    a.then((v)=>{
      console.log(v)
      setComments(v.data)
    })
    }, [id])
    console.log(comments)
    return (
        <>
           <div className='d-flex'>
                <div>
                <div className="div">
                <Image width='900px' height='550px' src={`https://image.tmdb.org/t/p/original/${comments.backdrop_path}`}></Image>
		        <div className="div1"><Image width='200px' height='280px' src={`https://image.tmdb.org/t/p/original/${comments.poster_path}`}></Image></div>
		        <h1 className="h1">{comments.name}</h1>
		        <h4 className="h4">{comments.tagline}</h4>
                {comments.genres && comments.genres.map(v => (
                    <h5 className='divgen'>{v.name},</h5>
                ))}
               <div className='rating'>
               <StarRatings
                    rating={comments.vote_average}
                    starSpacing="0px"
                    starRatedColor={'yellow'}
                    starEmptyColor={'grey'}
                    starHoverColor={'red'}
                    starDimension={'20px'}
                    numberOfStars={10}
                 />
               </div>
	        </div>
            <div align='center' className='divcomment'>
                <h5 className='h5'> </h5>
                <p>{comments.overview}</p>
            </div>
                </div>
           </div>
           {/* {comments.last_episode_to_air && comments.last_episode_to_air.map(a => (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={'https://image.tmdb.org/t/p/w500' + a.still_path} />
            <Card.Body>
                <Card.Title>{a.name}</Card.Title>
                <Card.Text>
                
                </Card.Text>
            </Card.Body>
            </Card>
           ))} */}
          
        </>
    )
}
