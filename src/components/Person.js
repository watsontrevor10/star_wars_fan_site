import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Button, Box, AccordionPanel, Accordion, Text } from 'grommet'

const Person = (props) => {
  const [homeworldData, setHomeworldData] = useState({})
  const { name, gender, height, mass, hair_color, skin_color, eye_color, birth_year, homeworld, } = props.person

  useEffect(() => {
    axios.get(`${homeworld}`)
      .then(res => {
        setHomeworldData(res.data)
      })
  }, [])

  return (
    <>
      <Accordion>
        <AccordionPanel label="Traits" >
          <Box pad='medium'>
            <Text>{name}</Text>
            <Text>Gender: {gender}</Text>
            <Text>Height: {height}</Text>
            <Text>Eye Color: {eye_color}</Text>
          </Box>
        </AccordionPanel>
        <AccordionPanel label="Homeworld">
          <Text>{homeworldData.name}</Text>
          <Text>Climate: {homeworldData.climate}</Text>
          <Text>Terrain: {homeworldData.terrain}</Text>
        </AccordionPanel>
      </Accordion>
    </>
  )
}

export default Person