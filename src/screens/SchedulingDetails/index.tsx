import React from 'react'
import { useTheme } from 'styled-components'
import { Feather } from '@expo/vector-icons'
import { RFValue } from 'react-native-responsive-fontsize'

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

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

export function SchedulingDetails(){
  const theme = useTheme()

  return (
    <Container>
      <Header>
        <BackButton onPress={() => {}} />
      </Header>

      <CarImages>
        <ImageSlider 
          imagesUrl={['https://pngroyale.com/wp-content/uploads/2022/03/Audi-Car-Free-PNG-Image.png']}
        />
      </CarImages>

      <Content>
        <Details>
         <Description>
          <Brand>Lamborghini</Brand>
          <Name>Huracan</Name>
         </Description>

         <Rent>
          <Period>Ao Dia</Period>
          <Price>R$ 580</Price>
         </Rent>
        </Details>

        <Accessories>
          <Accessory name="380/km" icon={speedSvg}/>
          <Accessory name="3.2s" icon={accelerationSvg}/>
          <Accessory name="800 HP" icon={forceSvg}/>
          <Accessory name="Gasolina" icon={gasolineSvg}/>
          <Accessory name="auto" icon={exchangeSvg}/>
          <Accessory name="2 pessoas" icon={peopleSvg}/>
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
            <DateValue>10/11/2022</DateValue>
          </DateInfo>

          <Feather 
            name="chevron-right"
            size={RFValue(10)}
            color={theme.colors.text}
          />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue>11/11/2022</DateValue>
          </DateInfo>
        </RentalPeriodContainer>

        <RentalPrice>
          <RentalPriceLabel>Total</RentalPriceLabel>
          <RentalPriceDetails>
            <RentalPriceQuota>R$ 580 x3 diárias</RentalPriceQuota>
            <RentalPriceTotal>R$ 2.900</RentalPriceTotal>
          </RentalPriceDetails>
        </RentalPrice>
      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  )
}