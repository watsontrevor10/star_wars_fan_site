import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { AccordionPanel, Accordion, Text } from 'grommet'

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
        <AccordionPanel label="Traits">
          <Text>Gender: {gender}</Text>
          <Text>Height: {height}</Text>
          <Text>Eye Color: {eye_color}</Text>
          <Text>Hair Color: {hair_color}</Text>
          <Text>Birth Year: {birth_year}</Text>
        </AccordionPanel>
        <AccordionPanel label="Homeworld">
          <Text>{homeworldData.name}</Text>
          <Text>Climate: {homeworldData.climate}</Text>
          <Text>Terrain: {homeworldData.terrain}</Text>
          <Text>Rotation Period: {homeworldData.rotation_period}</Text>
          <Text>Orbital Period: {homeworldData.orbital_period}</Text>
        </AccordionPanel>
      </Accordion>
    </>
  )
}

export default Person