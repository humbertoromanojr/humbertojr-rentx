import React from 'react'
import { StatusBar } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useTheme } from 'styled-components'

import { BackButton } from '../../components/BackButton'
import { Button } from '../../components/Button'
import { Calendar } from '../../components/Calendar'

import { Container, Header, Title, RentalPeriod, DateInfo,
  DateTitle, DateValue, Content, Footer  
} from './styles'

import ArrowSvg from '../../assets/arrow.svg'

export function Scheduling(){
  const theme = useTheme()
  const navigation = useNavigation()

  function handleConfirmRental() {
    navigation.navigate('SchedulingDetails');
  }

  function handleBackButton() {
    navigation.goBack();
  }

  return (
    <Container>
      <StatusBar 
        barStyle="light-content" 
        backgroundColor="transparent" 
        translucent 
      />
      <Header>
        <BackButton onPress={handleBackButton} color={theme.colors.shape} />
        <Title>
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do aluguel
        </Title>

        <RentalPeriod>
          <DateInfo>
            <DateTitle>DE</DateTitle>
            <DateValue selected={false}>
              09/11/2022      
            </DateValue>
          </DateInfo>

          <ArrowSvg />

          <DateInfo>
            <DateTitle>ATÉ</DateTitle>
            <DateValue selected={false}>
              10/11/2022
            </DateValue>
          </DateInfo>
        </RentalPeriod>
      </Header>

      <Content>
        <Calendar />
      </Content> 

      <Footer>
        <Button title="Confirmar" onPress={handleConfirmRental} />
      </Footer>    
    </Container>
  )
}