import React, { useEffect, useState } from 'react'
import { Alert } from 'react-native'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'
import { useNavigation, useRoute } from '@react-navigation/native'
import { format } from 'date-fns'

import { api } from '../../services/api'
import { CarDTO } from '../../dtos/CarDTO'
import { getAccessoryIcon } from '../../utils/getAccessoryIcon'
import { getPlatformDate } from '../../utils/getPlatformDate'

import { Accessory } from '../../components/Accessory'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Button } from '../../components/Button'

import { Container, Header, CarImages, Content, Details,
Description, Brand, Name, Rent, Period, Price, RentalPeriodContainer, 
Accessories, Footer, CalendarIcon, DateInfo, DateTitle, DateValue,
RentalPrice, RentalPriceLabel, RentalPriceDetails, RentalPriceQuota,
RentalPriceTotal
} from './styles'

interface Params {
  car: CarDTO
  dates: string[]
}

interface RentalPeriod {
  start: string
  end: string
}

export function SchedulingDetails() {
  const [rentalPeriod, setRentalPeriod] = useState<RentalPeriod>({} as RentalPeriod)

  const theme = useTheme()
  const navigation = useNavigation()
  const route = useRoute()
  const { car, dates } = route.params as Params

  const rentTotal = Number(dates.length * car.rent.price)

  async function handleConfirm() {
    const schedulesByCar = await api.get(`/schedules/${car.id}`)

    const unavailable_dates = [
      ...schedulesByCar.data.unavailable_dates,
      ...dates,
    ];

    api.put(`/schedules/${car.id}`, {
      id: car.id,
      unavailable_dates
    })
    .then(() => navigation.navigate('SchedulingComplete'))
    .catch(() => Alert.alert('Não foi possível confirmar o agendamento!'))
  }

  function handleBackButton() {
    navigation.goBack();
  }

  useEffect(() => {
    setRentalPeriod({
      start: format(getPlatformDate(new Date(dates[0])), 'dd/MM/yyyy'),
      end: format(getPlatformDate(new Date(dates[dates.length - 1])), 'dd/MM/yyyy'),
    })
  }, [])

  return (
    <Container>
      <Header>
        <BackButton onPress={handleBackButton} />
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={(car.photos)}
        />
      </CarImages>

      <Content>
        <Details>
         <Description>
          <Brand>{car.brand}</Brand>
          <Name>{car.name}</Name>
         </Description>

         <Rent>
          <Period>{car.rent.period}</Period>
          <Price>R$ {car.rent.price}</Price>
         </Rent>
        </Details>

        <Accessories>
          {
            car.accessories.map(accessory => (
              <Accessory 
                key={accessory.type}
                name={accessory.name}
                icon={getAccessoryIcon(accessory.type)}
              />
            ))
          }
        </Accessories>

        <RentalPeriodContainer>
          <CalendarIcon>
            <Feather 
              name="calendar"
              size={RFValue(30)}
              color={theme.colors.shape}
            />
          </CalendarIcon>

          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue>{rentalPeriod.start}</DateValue>
          </DateInfo>

          <Feather 
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>{rentalPeriod.end}</DateValue>
          </DateInfo>
        </RentalPeriodContainer>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>
              R$ {car.rent.price} x {dates.length} diárias
            </RentalPriceQuota>
            <RentalPriceTotal>R$ {rentTotal}</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button 
          title="Alugar agora"
          color={theme.colors.success}
          onPress={handleConfirm} 
        />
      </Footer>
    </Container>
  )
}