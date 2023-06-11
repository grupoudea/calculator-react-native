import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import ButtonCalculator from '../components/ButtonCalculator'
import { useCalculator } from '../hooks/useCalculator'

const CalculatorScreen = () => {

    const {
        numeroAnterior,
        numero,
        limpiar,
        positivoNegativo,
        eliminarUltimoNumero,
        dividir,
        armarNumero,
        sumar,
        restar,
        multiplar,
        calcular
    } = useCalculator()

    
  return (
    <View style={styles.calculadoraContainer}>
        {
            (numeroAnterior !== '0') && (<Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>)
        }
        <Text style={styles.texto} numberOfLines={1} adjustsFontSizeToFit >{numero}</Text>

        <View style={styles.fila}>
            <ButtonCalculator texto='C' color='#9b9b9b' action={limpiar}/>
            <ButtonCalculator texto='+/-' color='#9b9b9b' action={positivoNegativo}/>
            <ButtonCalculator texto='del' color='#9b9b9b'action={eliminarUltimoNumero}/>
            <ButtonCalculator texto='/' color='#ff9427' action={dividir}/>
        </View>
        <View style={styles.fila}>
            <ButtonCalculator texto='7' action={armarNumero}/>
            <ButtonCalculator texto='8' action={armarNumero}/>
            <ButtonCalculator texto='9' action={armarNumero}/>
            <ButtonCalculator texto='x' color='#ff9427' action={multiplar}/>
        </View>
        <View style={styles.fila}>
            <ButtonCalculator texto='4' action={armarNumero}/>
            <ButtonCalculator texto='5' action={armarNumero}/>
            <ButtonCalculator texto='6' action={armarNumero}/>
            <ButtonCalculator texto='-' color='#ff9427' action={restar}/>
        </View>
        <View style={styles.fila}>
            <ButtonCalculator texto='1' action={armarNumero}/>
            <ButtonCalculator texto='2' action={armarNumero}/>
            <ButtonCalculator texto='3' action={armarNumero}/>
            <ButtonCalculator texto='+' color='#ff9427' action={sumar}/>
        </View>
        <View style={styles.fila}>
            <ButtonCalculator texto='0' ancho action={armarNumero}/>
            <ButtonCalculator texto='.' action={armarNumero}/>
            <ButtonCalculator texto='=' color='#ff9427' action={calcular}/>
        </View>

    </View>
  )
}

export default CalculatorScreen