'use client'
import React, { useState, useEffect } from 'react'

interface Props { 
    greeting: string;
}


const MacroTracker = (props: Props) => {
   
    //Weekly prescribed macros
    const [prescribedMacros, setPrescribedMacros] = useState({
        protein: 200, carbs: 200, fat: 70
    })
    // user Input macros for the day
    const [inputMacros, setInputMacros] = useState({proteinIntake: 0,
    carbsIntake: 0,
    fatIntake: 0});
    // amoutn of calories calculated
    const [totalInputCalories, setTotalInputCalories] = useState(0);

    //difference between user input and prescribed macros
    const [remainingMacros, setRemainingMacros] = useState("");

    const handleMacroChange = (e: any) => {
        setInputMacros({
            ...inputMacros,
            [e.target.name]: e.target.value,
        })
    }

    useEffect(()=> {
        setTotalInputCalories(calculateTotalIntakeCalories(inputMacros.proteinIntake,inputMacros.carbsIntake,inputMacros.fatIntake));
        setRemainingMacros(calculateMacroDifference({inputMacros},{prescribedMacros}))
    },[inputMacros.proteinIntake,inputMacros.carbsIntake,inputMacros.fatIntake])

    const calculateTotalIntakeCalories = (protein:number,carbs:number,fat:number) => { 
        const total = (protein * 4)  + (carbs*4)  + (fat * 9);
        return total;
    }

    const calculateMacroDifference = ({inputMacros},{prescribedMacros}) => {
        const remainingProtien = prescribedMacros.protein - inputMacros.proteinIntake
        const remainingCarbs = prescribedMacros.carbs - inputMacros.carbsIntake;
        const remainingFats = prescribedMacros.fat - inputMacros.fatIntake; 
        const calorieDifference = `Protein: ${remainingProtien} | Carbs: ${remainingCarbs} | Fat: ${remainingFats}`;
        return calorieDifference;
        
        
        
    }

   



  return (
    <>
    <div>
        {/* need to save those in db  */}
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
        {/* prescribed macros to be updated weekly - save in db */}
            {prescribedMacros.protein} {prescribedMacros.carbs} {prescribedMacros.fat}
    </div>
    <>
    <p>Remaining Macros</p>
        {remainingMacros}
    </>
    </>
  )
}
export default MacroTracker