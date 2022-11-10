import React from 'react'
import { Feather } from '@expo/vector-icons'
import { Calendar as CustomCalendar } from 'react-native-calendars'

export function Calendar(){
  return (
      <CustomCalendar
        renderArrow={( direction ) => <Feather />} 
      />
  )
}