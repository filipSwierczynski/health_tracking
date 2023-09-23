'use client'
import React, { useState } from 'react'

interface Props { 
    greeting: string;
    
}
const defaultInputMacros = {
    proteinIntake: '',
    carbsIntake: '',
    fatIntake: ''
}

const MacroTracker = (props: Props) => {
   

    const [inputMacros, setInputMacros] = useState(defaultInputMacros)

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setInputMacros({
            ...inputMacros,
            [name]: value,
        })
    }
  return (
    <>
    <div>
        <input name="proteinIntake" placeholder='Grams of proteins' id='proteinIntake' value={defaultInputMacros.proteinIntake} onChange={handleChange}></input>
        <input name="carbsIntake" placeholder='Grams of carbohydrates' id='carbsIntake' value={defaultInputMacros.carbsIntake} onChange={handleChange}></input>
        <input name="fatIntake" placeholder='Grams of fats' id="fatsIntake" onChange={handleChange} value={defaultInputMacros.fatIntake}></input>
    </div>

    {inputMacros.proteinIntake}
    {inputMacros.carbsIntake}
    {inputMacros.fatIntake}
    </>
    
    
  )
}

export default MacroTracker