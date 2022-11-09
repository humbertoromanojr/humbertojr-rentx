import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import { Car } from '../../components/Car'

import { Header, TotalCars, HeaderContent } from '../../components/Header/styles'
import { Container } from './styles'

import Logo from '../../assets/logo.svg'

export function Home(){
  return (
    <Container>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />
      <Header>
        <HeaderContent>
          <Logo width={RFValue(108)} height={RFValue(16)} />
          <TotalCars>
            Total de 12 carros
          </TotalCars>
        </HeaderContent>
      </Header>

      <Car />
    </Container>
  )
}