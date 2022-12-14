import React, { useEffect, useState } from 'react'
import { StatusBar } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation } from '@react-navigation/native'
import { Ionicons } from '@expo/vector-icons'

import { api } from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'

import { Car } from '../../components/Car'
import { Loading } from '../../components/Loading'

import { useTheme } from 'styled-components'
import { Header, TotalCars, HeaderContent } from '../../components/Header/styles'
import { Container, MyCarsButton } from './styles'
import { CarList } from '../../components/Car/styles'

import Logo from '../../assets/logo.svg'

export function Home() {
  const [cars, setCars] = useState<CarDTO[]>([])
  const [loading, setLoading] = useState(true)
  const navigation = useNavigation()
  const theme = useTheme()

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

  function handleCarDetails(car: CarDTO) {
    navigation.navigate('CarDetails', { car });
  }

  function handleMyCars() {
    navigation.navigate('MyCars');
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
            Total de {cars.length} carros 
          </TotalCars>
        </HeaderContent>
      </Header>

      {
        loading ? <Loading /> :
        <CarList
          data={cars}
          keyExtractor={item => item.id}
          renderItem={({ item }) => 
            <Car data={item} onPress={() => handleCarDetails(item)} /> 
          }
        />
      }

      <MyCarsButton onPress={handleMyCars}>
        <Ionicons 
          name="ios-car-sport" 
          size={38} 
          color={theme.colors.shape}
        />
      </MyCarsButton>
    </Container>
  )
}