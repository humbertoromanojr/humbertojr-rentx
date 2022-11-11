import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'

import { api } from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'

import { Car } from '../../components/Car'
import { Loading } from '../../components/Loading'

import { Header, TotalCars, HeaderContent } from '../../components/Header/styles'
import { Container } from './styles'
import { CarList } from '../../components/Car/styles'

import Logo from '../../assets/logo.svg'

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api.get('/cars')
        setCars(response.data)
      } catch (error) {
        console.log('== fetchCars ==> ', error);
      
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

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

      {
        loading ? <Loading /> :
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
            <Car data={item} onPress={handleCarDetails} /> 
          }
        />
      }
    </Container>
  )
}