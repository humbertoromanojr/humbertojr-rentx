import { createNativeStackNavigator as Stack } from '@react-navigation/native-stack'

import { Home } from '../screens/Home'
import { Scheduling } from '../screens/Scheduling'
import { SchedulingDetails } from '../screens/SchedulingDetails'
import { SchedulingComplete } from '../screens/SchedulingComplete'
import { CarDetails } from '../screens/CarDetails'

const { Navigator, Screen } = Stack()

export function StackRoutes() {
  return (
    <Navigator>
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
    </Navigator>
}