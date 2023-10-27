import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import { StripeProvider } from '@stripe/stripe-react-native'

import PaymentScreen from './src/screens/PaymentScreen'
import DetailScreen from './src/screens/DetailScreen'
import TabNavigation from './src/navigations/TabNavigation'

const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <StripeProvider
      publishableKey="pk_test_51O5urOD8OS8hthp2jKKaiT1pQTleoDcvG9AUTaECcm1ZAHrfhMAvmz9rRpKO8Lzpn1H1FcWnTAl4sNpsR83nqBIT00Enxyhat1"
      // urlScheme="your-url-scheme"
    >
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen
            name="TabNavigation"
            component={TabNavigation}
            options={{ animation: 'slide_from_bottom' }}
          ></Stack.Screen>
          <Stack.Screen
            name="Detail"
            component={DetailScreen}
            options={{ animation: 'slide_from_bottom' }}
          ></Stack.Screen>
          <Stack.Screen
            name="Payment"
            component={PaymentScreen}
            options={{ animation: 'slide_from_bottom' }}
          ></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </StripeProvider>
  )
}

export default App
