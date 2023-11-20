import React from 'react'
import Header from './components/Header'
import {ChakraProvider} from "@chakra-ui/react"
import Hero from './components/Hero'

export default function App() {
  return (
    <ChakraProvider>
      <Header />
      <Hero />
    </ChakraProvider>
  )
}
