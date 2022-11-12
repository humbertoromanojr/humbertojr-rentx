import 'react-native-gesture-handler'
import React from 'react';
import AppLoading from 'expo-app-loading'
import { ThemeProvider } from 'styled-components'
import {
  Archivo_400Regular,
  Archivo_500Medium,
  Archivo_600SemiBold
} from '@expo-google-fonts/archivo'
import {
  useFonts,
  Inter_400Regular,
  Inter_500Medium
} from '@expo-google-fonts/inter'

import theme from './src/styles/theme'

import { Routes } from './src/routes'

export default function App() {
  const [fontsLoaed] = useFonts({
    Archivo_400Regular,
    Archivo_500Medium,
    Archivo_600SemiBold,
    Inter_400Regular,
    Inter_500Medium
  });

  if (!fontsLoaed) {
    return <AppLoading />
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  )
}
