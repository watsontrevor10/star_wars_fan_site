import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Layer, Button, Box, Heading, AccordionPanel, Accordion, Text } from 'grommet'

const Person = (props) => {
  const [person, setPerson] = useState({})
  const { name, gender, height, mass, hair_color, skin_color, eye_color, birth_year, homeworld, } = props.person
  const [showModal, setShowModal] = useState(false)

  const toggleModal = () => {
    setShowModal(!showModal)
  }

  return (
    <>
      {/* {showModal && ( */}
        <Accordion>
          <AccordionPanel label="Info">
            <Box pad='medium'>
              <Text>{name}</Text>
              <Text>Gender: {gender}</Text>
              <Text>Height: {height}</Text>
            </Box>
          </AccordionPanel>
        </Accordion>
      {/* )} */}
      {/* <Button
        primary
        onClick={() => toggleModal()}
        label='Info'
      /> */}
    </>
  )
}

export default Person