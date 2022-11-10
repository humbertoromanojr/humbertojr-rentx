import React from 'react'

import { Accessory } from '../../components/Accessory'
import { BackButton } from '../../components/BackButton'
import { ImageSlider } from '../../components/ImageSlider'
import { Button } from '../../components/Button'

import { Container, Header, CarImages, Content, Details,
Description, Brand, Name, Rent, Period, Price, About, 
Accessories, Footer
} from './styles'

import speedSvg from '../../assets/speed.svg'
import accelerationSvg from '../../assets/acceleration.svg'
import forceSvg from '../../assets/force.svg'
import gasolineSvg from '../../assets/gasoline.svg'
import exchangeSvg from '../../assets/exchange.svg'
import peopleSvg from '../../assets/people.svg'

export function CarDetails(){
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

        <About>
          Este é automóvel desportivo. Surgiu do lendário touro de 
          lide indultado na praça real Maestranza de Sevilla.
          É um belíssimo carro para quem gosta de acelerar.
        </About>

      </Content>

      <Footer>
        <Button title="Confirmar" />
      </Footer>
    </Container>
  )
}