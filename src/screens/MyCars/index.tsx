import React, { useState, useEffect } from 'react'
import { StatusBar, FlatList } from 'react-native'
import { useTheme } from 'styled-components'
import { useNavigation } from '@react-navigation/native'
import { AntDesign } from '@expo/vector-icons'

import { CarDTO } from '../../dtos/CarDTO'
import { api } from '../../services/api'

import { BackButton } from '../../components/BackButton'
import { Car } from '../../components/Car'

import { Container, Header, Title, SubTitle, Content, Appointments, 
  AppointmentsTitle, AppointmentsQuantity, CarWrapper, CarFooter,
  CarFooterTitle, CarFooterPeriod, CarFooterDate
} from './styles'

interface CarProps {
  id: string;
  user_id: string;
  car: CarDTO;
  startDate: string;
  ensDate: string;
}

export function MyCars() {
  const [cars, setCars] = useState<CarProps[]>([])
  const [loading, setLoading] = useState(true)

  const navigation = useNavigation()
  const theme = useTheme()

  function handleBackButton() {
    navigation.goBack();
  }

  useEffect(() => {
    async function fetchCars() {
      try {
        const response = await api('/schedules_byuser?user_id=1')
        setCars(response.data)
      } catch (error) {
        console.log('== MyCars - fetchCars ==> ', error);
      
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  return (
    <Container>
      <Header>
        <StatusBar 
          barStyle="light-content" 
          backgroundColor="transparent" 
          translucent 
        />
        <BackButton onPress={handleBackButton} color={theme.colors.shape} />
        <Title>
          Seus agendamentos, {'\n'}
          estão aqui.
        </Title>

        <SubTitle>
          Conforto, segurança e praticidade.
        </SubTitle>

      </Header>

      <Content>
        <Appointments>
          <AppointmentsTitle>Agendamentos feitos</AppointmentsTitle>
          <AppointmentsQuantity>{cars.length}</AppointmentsQuantity>
        </Appointments>

        <FlatList 
          data={cars}
          keyExtractor={(item) => item.id}
          showsVerticalScrollIndicator={false}
          renderItem={({ item }) => (
            <CarWrapper>
              <Car data={item.car} />
              <CarFooter>
                <CarFooterTitle>Período</CarFooterTitle>
                <CarFooterPeriod>
                  <CarFooterDate>{item.startDate}</CarFooterDate>
                  <AntDesign
                    name="arrowright"
                    size={24}
                    color={theme.colors.title}
                    style={{ marginHorizontal: 10 }}
                  />
                  <CarFooterDate>{item.ensDate}</CarFooterDate>
                </CarFooterPeriod>
              </CarFooter>
            </CarWrapper>
          )}
        />
      </Content>
    </Container>
  )
}