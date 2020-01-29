import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Heading, Header, Box, Grid, Select, Text } from 'grommet'
import Person from './Person'


const Home = () => {
  const [people, setPeople] = useState([])
  const [page, setPage] = useState({ value: 1 })
  const pageOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9]

  useEffect(() => {
    axios.get(`https://swapi.co/api/people/?page=${page.value}`)
      .then(res => {
        setPeople(res.data.results)
      })
  }, [page])


  return (
    <>
      <Header alignSelf='center'>
        <Heading>Star Wars</Heading>
      </Header>
      <div>
        <Text>Page: </Text>
        <Select
          options={pageOptions}
          value={page}
          onChange={event => setPage({
            value: event.value
          })}
        />
      </div>
      <Box
        pad='medium'
        gap='medium'
        wrap='true'
        direction='row-responsive'
      >
        {people.map(person => (
          <Grid
            rows={['medium', 'flex']}
            columns={['xsmall', 'small']}
            areas={[
              { name: 'main', start: [0, 0], end: [1, 0] }
            ]}
          >
            <Box
              gridArea='main'
              pad='small'
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