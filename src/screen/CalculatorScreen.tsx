import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/AppTheme'
import ButtonCalculator from '../components/ButtonCalculator'

enum Operators {
    SUMAR, RESTAR, MULTIPLICAR, DIVIDIR
}

const CalculatorScreen = () => {

    const [numeroAnterior, setNumeroAnterior] = useState('0');
    const [numero, setNumero] = useState('100');

    const ultimaOperacion = useRef<Operators>();

    const limpiar = () => {
        setNumero('0')
        setNumeroAnterior('0')
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
            setNumero(numero.slice(0, -1))
        }
    }

    const setNumeroAnteriorConActual = () => {
        if (numero.endsWith('.')) {
            setNumeroAnterior(numero.slice(0,-1))
        } else {
            setNumeroAnterior(numero)
        }
        setNumero('0')
    }

    const dividir = () => {
        setNumeroAnteriorConActual()
        ultimaOperacion.current = Operators.DIVIDIR
    }

    const multiplar = () => {
        setNumeroAnteriorConActual()
        ultimaOperacion.current = Operators.MULTIPLICAR
    }

    const restar = () => {
        setNumeroAnteriorConActual()
        ultimaOperacion.current = Operators.RESTAR
    }

    const sumar = () => {
        setNumeroAnteriorConActual()
        ultimaOperacion.current = Operators.SUMAR
    }

    const calcular = () => {
        const numero1 = Number(numero)
        const numero2 = Number(numeroAnterior)

        switch(ultimaOperacion.current) {
            case Operators.SUMAR:
                setNumero(`${numero1 + numero2}`)
                break;
            case Operators.RESTAR:
                setNumero(`${numero2 - numero1}`)
                break;
            case Operators.MULTIPLICAR:
                setNumero(`${numero1 * numero2}`)
                break;
            case Operators.DIVIDIR:
                setNumero(`${numero2 / numero1}`)
                break;
                
        }
    }

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