import React, {Component} from 'react'
import axios from 'axios'
import Cards from './Cards'
import {Button}  from 'react-bootstrap'

export default class Movies extends Component{
    
    state = {
      name: [],
      page: 1
    }
    
    componentDidMount() {
      this.setMovies()
      
    }

    setMovies = () => {
      this.setState({page:  this.state.page + 1})
      axios.get(`https://api.themoviedb.org/3/movie/popular?page=${this.state.page}&api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru-RU`)
      .then((v)=>{
        console.log(v)
        this.setState((state) => {
          const a =  v.data.results;
          return {name: a}
        });
        console.log(this.state.name)
      })
    }

  
  render(){
    return (
      <>
      <h1 className='tema'>Фильмы</h1>
        <Cards name={this.state.name}/>
        <Button className='zag' onClick={() => this.setMovies()}>Загрузить ещё</Button>
      </>
    )
  }
}

