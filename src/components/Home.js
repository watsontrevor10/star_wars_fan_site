import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Heading, Header, Box, Grid, } from 'grommet'
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
        gap='medium'
        wrap='true'
        direction='row-responsive'
      >
        {people.map(person => (
          <Grid
            rows={['small', 'flex']}
            columns={['small', 'xsmall']}
            areas={[
              { name: 'main', start: [0,0], end: [1,0] }
            ]}
          >
            <Box 
              gridArea='main' 
              pad='small' 
              direction='row-responsive'
            >
              <div key={person.url}>
                <h1>{person.name}</h1>
                <Person person={person} />
              </div>
            </Box>
          </Grid>
        ))}
      </Box>
    </>
  );
}

export default Home