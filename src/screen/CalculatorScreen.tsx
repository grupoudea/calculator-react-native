import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import ButtonCalculator from '../components/ButtonCalculator'

const CalculatorScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('100');

    const limpiar = () => {
        setNumero('0')
    }

    const armarNumero = (numeroTexto: string) => {

        if(numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            if (numeroTexto === '.'){
                setNumero(numero + numeroTexto)

            } else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto)

            } else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto)
            } else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero)
            } else {
                setNumero(numero + numeroTexto)
            }


        } else {
            setNumero(numero+numeroTexto)
        }

    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''))
        } else {
            setNumero('-'+numero)
        }
    }

    const eliminarUltimoNumero = () => {
        if (numero.length === 1) {
            setNumero('0')
        } else if ((numero.length === 1 && numero === '0') || ( numero === '-0')) {
            setNumero('0')
        } else {
            setNumero(numero.substring(0, numero.length-1))
        }
    }


  return (
    <View style={styles.calculadoraContainer}>
        <Text style={styles.resultadoPequeno}>{numeroAnterior}</Text>
        <Text style={styles.texto} numberOfLines={1} adjustsFontSizeToFit >{numero}</Text>

        <View style={styles.fila}>
            <ButtonCalculator texto='C' color='#9b9b9b' action={limpiar}/>
            <ButtonCalculator texto='+/-' color='#9b9b9b' action={positivoNegativo}/>
            <ButtonCalculator texto='del' color='#9b9b9b'action={eliminarUltimoNumero}/>
            <ButtonCalculator texto='/' color='#ff9427' action={limpiar}/>
        </View>
        <View style={styles.fila}>
            <ButtonCalculator texto='7' action={armarNumero}/>
            <ButtonCalculator texto='8' action={armarNumero}/>
            <ButtonCalculator texto='9' action={armarNumero}/>
            <ButtonCalculator texto='x' color='#ff9427' action={limpiar}/>
        </View>
        <View style={styles.fila}>
            <ButtonCalculator texto='4' action={armarNumero}/>
            <ButtonCalculator texto='5' action={armarNumero}/>
            <ButtonCalculator texto='6' action={armarNumero}/>
            <ButtonCalculator texto='-' color='#ff9427' action={limpiar}/>
        </View>
        <View style={styles.fila}>
            <ButtonCalculator texto='1' action={armarNumero}/>
            <ButtonCalculator texto='2' action={armarNumero}/>
            <ButtonCalculator texto='3' action={armarNumero}/>
            <ButtonCalculator texto='+' color='#ff9427' action={limpiar}/>
        </View>
        <View style={styles.fila}>
            <ButtonCalculator texto='0' ancho action={armarNumero}/>
            <ButtonCalculator texto='.' action={armarNumero}/>
            <ButtonCalculator texto='=' color='#ff9427' action={limpiar}/>
        </View>

    </View>
  )
}

export default CalculatorScreen