import React from 'react'

import { Container, Details, Brand, Name, 
  About, Rent, Period, Price, Type, CarImage, CarList 
} from './styles'

import GasolineSvg from '../../assets/gasoline.svg'

interface CarData {
  brand: string;
  name: string;
  rent: {
    period: string;
    price: string;
  },
  thumbnail: string;
}

interface Props {
  data: CarData;
}

export function Car({ data }: Props){
  return (
    <Container>
      <Details>
        <Brand>{data.brand}</Brand>
        <Name>{data.name}</Name>
        <About>
          <Rent>
            <Period>{data.rent.period}</Period>
            <Price>{`RS ${data.rent.price}`}</Price>
          </Rent>
          <Type>
            <GasolineSvg />
          </Type>
        </About>
      </Details>

      <CarImage source={{ uri: data.thumbnail }} resizeMode="contain" />
    </Container>
  )
}