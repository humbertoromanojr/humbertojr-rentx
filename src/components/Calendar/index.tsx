import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import { 
  Calendar as CustomCalendar, 
  LocaleConfig 
} from 'react-native-calendars'

LocaleConfig.locales['pt-br'] = {
  monthNames: ['Janeiro', 'Fevereiro', 'MarCo', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
  monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  dayNames: ['Domingo', 'Segunda', 'Terca', 'Quarta', 'Quinta', 'Sexta', 'Sabado'],
  dayNamesShort: ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'],
  today: 'Hoje'
}
LocaleConfig.defaultLocale = 'pt-br'

export function Calendar(){
  const theme = useTheme()

  return (
      <CustomCalendar
        renderArrow={( direction ) => 
        <Feather 
          size={24}
          color={theme.colors.text}
          name={direction == 'left' ? 'chevron-left' : 'chevron-right'}
        />
        } 

        headerStyle={{
          backgroundColor: theme.colors.background_secondary,
          borderBottomWidth: 1,
          borderBottomColor: theme.colors.text_detail,
          paddingBottom: 5,
          marginBottom: 5,
        }}

        theme={{
          textDayFontFamily: theme.fonts.primary_400,
          textDayHeaderFontFamily: theme.fonts.primary_500,
          textDayHeaderFontSize: 12,
          textMonthFontFamily: theme.fonts.secondary_600,
          textMonthFontSize: 20,
          monthTextColor: theme.colors.title,
          arrowStyle: { marginHorizontal: -15 }
        }}

        firstDay={1}
        minDate={new Date()}

      />
  )
}