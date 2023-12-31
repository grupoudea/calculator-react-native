import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import CalculatorScreen from './src/screen/CalculatorScreen'
import { styles } from './src/theme/AppTheme'

const App = () => {
  return (
    <SafeAreaView style={styles.fondo}>
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <CalculatorScreen />
    </SafeAreaView>
  )
}

export default App