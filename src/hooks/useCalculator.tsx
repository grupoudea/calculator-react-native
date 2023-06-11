import { useState, useRef } from "react";

enum Operators {
    SUMAR, RESTAR, MULTIPLICAR, DIVIDIR
}


export const useCalculator = () => {
  
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

    return {
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
    }


}

