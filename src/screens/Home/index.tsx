import React from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'

import { Car } from '../../components/Car'

import { Header, TotalCars, HeaderContent } from '../../components/Header/styles'
import { Container } from './styles'
import { CarList } from '../../components/Car/styles'

import Logo from '../../assets/logo.svg'

export function Home(){
  const navigation = useNavigation()

  const carData = {
    brand: 'Audi',
    name: 'RS 5 Coupé',
    rent: {
      period: 'AO DIA',
      price: 120,
    },
    thumbnail: 'https://pngroyale.com/wp-content/uploads/2022/03/Audi-Car-Free-PNG-Image.png',
  }

  function handleCarDetails() {
    navigation.navigate('CarDetails');
  }

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

      <CarList
        data={[1, 2, 3]}
        keyExtractor={item => String(item)}
        renderItem={({ item }) => 
          <Car data={carData} onPress={handleCarDetails} /> 
        }
      />
    </Container>
  )
}