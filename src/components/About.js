import React from 'react'
import  { useContext } from 'react'
import noteContext from '../context/noteContext'

const About = () => {
    const a = useContext(noteContext)
  return (
    <div>
      This is about {a.name} and he is {a.class}
    </div>
  )
}

export default About;
