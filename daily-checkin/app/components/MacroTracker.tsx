'use client'
import React, { useState, useEffect } from 'react'

interface Props { 
    greeting: string;
}


const MacroTracker = (props: Props) => {
   
    const [prescribedMacros, setPrescribedMacros] = useState({
        protein: '', carbs: '', fat: ''
    })

    const [inputMacros, setInputMacros] = useState({proteinIntake: 0,
    carbsIntake: 0,
    fatIntake: 0});
    const [totalInputCalories, setTotalInputCalories] = useState(0);

    
    const handleMacroChange = (e: any) => {
        setInputMacros({
            ...inputMacros,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(()=> {
        setTotalInputCalories(calculateTotalIntakeCalories(inputMacros.proteinIntake,inputMacros.carbsIntake,inputMacros.fatIntake))
    },[inputMacros.proteinIntake,inputMacros.carbsIntake,inputMacros.fatIntake])

    const calculateTotalIntakeCalories = (protein:number,carbs:number,fat:number) => { 
        const total = (protein * 4)  + (carbs*4)  + (fat * 9);
        console.log(total);
        return total;
    }
  return (
    <>
    <div>
        <p>Enter your macros for today</p>
        <input name="proteinIntake" placeholder='Grams of proteins' id='proteinIntake'  onChange={handleMacroChange}></input>
        <input name="carbsIntake" placeholder='Grams of carbohydrates' id='carbsIntake'  onChange={handleMacroChange}></input>
        <input name="fatIntake" placeholder='Grams of fats' id="fatsIntake" onChange={handleMacroChange} ></input>
    </div>
    {inputMacros.proteinIntake} <br/>
    {inputMacros.carbsIntake} <br/>
    {inputMacros.fatIntake} <br/>
    <p>total intake calories: {totalInputCalories}</p>
    <div>
        <p>Prescribed macros</p>

    </div>
    </>
  )
}
export default MacroTracker