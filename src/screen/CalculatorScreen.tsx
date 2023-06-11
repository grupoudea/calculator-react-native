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
            <ButtonCalculator texto='C' color='#9b9b9b' />
            <ButtonCalculator texto='+/-' color='#9b9b9b' />
            <ButtonCalculator texto='%' color='#9b9b9b'/>
            <ButtonCalculator texto='/' color='#ff9427' />
        </View>
        <View style={styles.fila}>
            <ButtonCalculator texto='7'  />
            <ButtonCalculator texto='8'  />
            <ButtonCalculator texto='9' />
            <ButtonCalculator texto='x' color='#ff9427' />
        </View>
        <View style={styles.fila}>
            <ButtonCalculator texto='4'  />
            <ButtonCalculator texto='5'  />
            <ButtonCalculator texto='6' />
            <ButtonCalculator texto='-' color='#ff9427' />
        </View>
        <View style={styles.fila}>
            <ButtonCalculator texto='1'  />
            <ButtonCalculator texto='2'  />
            <ButtonCalculator texto='3' />
            <ButtonCalculator texto='+' color='#ff9427' />
        </View>
        <View style={styles.fila}>
            <ButtonCalculator texto='0' ancho />
            <ButtonCalculator texto='.'  />
            <ButtonCalculator texto='=' color='#ff9427' />
        </View>

    </View>
  )
}

export default CalculatorScreen