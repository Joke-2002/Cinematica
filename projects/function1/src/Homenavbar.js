import React, {useEffect, useState} from 'react'
import {Navbar, Container, Nav, NavDropdown, Image} from 'react-bootstrap'
import {Link} from 'react-router-dom'
import axios from 'axios'
export default function Homenavbar() {
    const [genre, setGenre] = useState([])
  useEffect(() => {
    const a = axios.get(`https://api.themoviedb.org/3/genre/movie/list?api_key=1ea54fff90d26ae7dc1f5e21fe637664&language=ru`);
    a.then((v)=>{
      console.log(v)
      setGenre(v.data['genres'])
    });
  }, [])
    return (
        <>
         <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Image src="https://cinematica.kg/99c13a566f8363476f14db5420aaee6b.png" height="30" class="d-inline-block align-top" alt="Cinematica Logo"/>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={Link} to={'/'}>Главная</Nav.Link>
              <Nav.Link as={Link} to={'/movies'}>Фильмы</Nav.Link>
              <Nav.Link as={Link} to={'/series'} >Сериалы</Nav.Link>
              <Nav.Link as={Link} to={'/people'}>Люди</Nav.Link>
                <NavDropdown title="Жанры TV" id="collasible-nav-dropdown">
                {genre.map(v => (
                  <NavDropdown.Item as={Link} to={`/genres/${v.id}`}>{v.name}</NavDropdown.Item> 
                ))}
              </NavDropdown>
              {/* <Form className="d-flex form">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="mr-2"
                  aria-label="Search"
                  onChange={(e)=>setSearch({search: e.target.value})}
                />
                <Button variant="outline-success" onClick={()=> setSearch()} >Search</Button>
              </Form> */}
              </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>    
        </>
    )
}
