import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Heading, Header, Box } from 'grommet'
import Person from './Person'


const Home = () => {
  const [people, setPeople] = useState([])

  useEffect(() => {
    axios.get('https://swapi.co/api/people')
      .then(res => {
        setPeople(res.data.results)
      })
  }, [])



  return (
    <>
      <Header>
        <Heading>Star Wars</Heading>
      </Header>
      <Box 
        pad='medium' 
        direction='row-responsive' 
        alignContent='between'
        gap='medium'
      >
        {people.map(person => (
          <Box pad='small' >
            <div key={person.url}>
              <h1>{person.name}</h1>
              <Person person={person} />
            </div>
          </Box>
        ))}
      </Box>
    </>
  );
}

export default Home