import React from 'react'
import {Vibration, Text, TouchableOpacity, View } from 'react-native'
import { styles } from '../theme/AppTheme'

interface ButtonCalculatorProps {
    texto: string,
    color?: string,
    ancho?: boolean,
    action: (numeroTexto: string) => void
}

const ButtonCalculator = ({texto, color = '#2d2d2d', ancho = false, action}: ButtonCalculatorProps) => {

    const handlePress = () => {
        action(texto);
    };

  return (
    <TouchableOpacity
    onPress={handlePress}
    >
        <View style={{
            ...styles.boton,
            backgroundColor: color,
            width: (ancho) ? 180 : 80
        }}>
            <Text style={{
                ...styles.botonTexto,
                color: (color === '#9b9b9b')? 'black' : 'white'

            }}>{texto}</Text>

        </View>
    </TouchableOpacity>    
  )
}

export default ButtonCalculator