import React from 'react'
import { StatusBar } from 'react-native'

import { Container, Header } from './styles'

export function Home(){
  return (
    <Container>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />
      <Header></Header>
    </Container>
  )
}