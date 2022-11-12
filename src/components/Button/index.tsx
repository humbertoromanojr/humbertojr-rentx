import React from 'react'
import { useTheme } from 'styled-components'

import { Container, Title } from './styles'

interface Props {
  title: string;
  color?: string;
  onPress: () => void;
  loading?: boolean;
  disabled?: boolean;
} 

export function Button({ 
  title, 
  color, 
  onPress, 
  loading = false,
  disabled = false
}: Props) {
  const theme = useTheme()

  return (
    <Container 
      onPress={onPress} 
      color={color ? color : theme.colors.main}
      disabled={disabled}
      style={{ opacity: disabled ? .5 : 1}}
    >
      <Title>{title}</Title>
    </Container>
  )
}