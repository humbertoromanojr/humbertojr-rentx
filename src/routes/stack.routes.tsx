import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../screens/Home'
import { Scheduling } from '../screens/Scheduling'
import { SchedulingDetails } from '../screens/SchedulingDetails'
import { SchedulingComplete } from '../screens/SchedulingComplete'
import { CarDetails } from '../screens/CarDetails'
import { MyCars } from '../screens/MyCars'

const { Navigator, Screen } = createStackNavigator()

export function StackRoutes() {
  return (
    <Navigator headerMode="none">
      <Screen
        name="Home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />

      <Screen
        name="Scheduling"
        component={Scheduling}
        options={{
          title: 'Scheduling',
        }}
      />

    <Screen
        name="SchedulingDetails"
        component={SchedulingDetails}
        options={{
          title: 'SchedulingDetails',
        }}
      />

      <Screen
        name="SchedulingComplete"
        component={SchedulingComplete}
        options={{
          title: 'SchedulingComplete',
        }}
      />

      <Screen
        name="CarDetails"
        component={CarDetails}
        options={{
          title: 'CarDetails',
        }}
      />

      <Screen
        name="MyCars"
        component={MyCars}
        options={{
          title: 'MyCars',
        }}
      />
    </Navigator>
  )
}