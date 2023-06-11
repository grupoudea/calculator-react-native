import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'

interface ButtonCalculatorProps {
    texto: string,
    color?: string
}

const ButtonCalculator = ({texto, color = '#2d2d2d'}: ButtonCalculatorProps) => {
  return (
    <View style={{
        ...styles.boton,
        backgroundColor: color,
    }}>
        <Text style={styles.botonTexto} >{texto}</Text>
    </View>
  )
}

export default ButtonCalculator