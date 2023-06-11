import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import ButtonCalculator from '../components/ButtonCalculator'

const CalculatorScreen = () => {
  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.resultadoPequeno}>1500</Text>
        <Text style={styles.texto}>1500</Text>

        <View style={styles.fila}>
            <ButtonCalculator texto='C' color='#2d2d2d' />
            <ButtonCalculator texto='C' color='#ff9427' />
            <ButtonCalculator texto='C' />
            <ButtonCalculator texto='C' color='#9b9b9b' />

        </View>
    </View>
  )
}

export default CalculatorScreen