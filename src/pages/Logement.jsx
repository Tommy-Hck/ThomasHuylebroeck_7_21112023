import React from 'react'
import { useParams } from 'react-router-dom'
import homeData from "../assets/logements.json"

export default function Logement() {

    const {id} = useParams()
    console.log("id", id)
  return (
    <div>Logement</div>
  )
}
