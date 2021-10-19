import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Cards from './Cards' 
import { ButtonGroup,Button } from 'react-bootstrap'
export default function App() {
  const [glav, setGlav] = useState([])
  const [tv, setTv] = useState('tv')

  const [today, setToday] = useState([])
  const [week, setWeek] = useState('week')
  useEffect(() => {
    if(tv === 'tv'){
      const a = axios.get(`https://api.themoviedb.org/3/tv/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
    a.then((v)=>{
      console.log(v)
      setGlav(v.data['results'])
    })
    }else{
    const a = axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
    a.then((v)=>{
      console.log(v)
      setGlav(v.data['results'])
    })
  }
  },[tv])

  useEffect(() => {
    if(week === 'week'){
      const a = axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
    a.then((v)=>{
      console.log(v)
      setToday(v.data['results'])
    })
    }else{
    const a = axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
    a.then((v)=>{
      console.log(v)
      setToday(v.data['results'])
    })
  }
  }, [week])
  console.log(glav)
  return (
    <>
    <div className='d-flex justify-content-between'>
    <h1 className='tema'>Что популярно</h1>
       <ButtonGroup size="lg" className="butt">
    <Button onClick={()=> setTv('tv')} variant={tv ==='tv' ? 'primary' : 'secondary'}>По TV</Button>
    <Button  onClick={()=> setTv('tv2')} variant={tv !=='tv' ? 'primary' : 'secondary'}>В кинотеатрах</Button>
  </ButtonGroup> </div>
    <Cards name={glav}/>
    <div className='d-flex justify-content-between'>
    <h1 className='tema'>Что в тренде</h1>
       <ButtonGroup size="lg" className="butt">
    <Button onClick={()=> setWeek('week')} variant={week ==='week' ? 'primary' : 'secondary'}>Сегодня</Button>
    <Button  onClick={()=> setWeek('week2')} variant={week !=='week' ? 'primary' : 'secondary'}>На этой неделе</Button>
  </ButtonGroup> </div>
  <Cards name={today} />
    </>
  )
}
