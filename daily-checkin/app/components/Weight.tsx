'use client'
import React from 'react'
import { Line } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, PointElement, LineElement } from 'chart.js'
Chart.register(CategoryScale, LinearScale, PointElement, LineElement);


const Weight = () => {

  let userWeightDummyData = [
    {weight: 181, date:1}, {weight: 182,date:2},
    {weight: 181,date:3},
    {weight: 185,date:4},
    {weight: 182,date:5},
    {weight: 183,date:6},
    {weight: 189,date:7},
    {weight: 193,date:8}
  ]
  
  const weightData = userWeightDummyData.map((data) => data.weight);


  return (
    <>
    <div>User Weight</div>
    <p>Enter user weight</p>
    <label htmlFor='weightInput'>Enter your weight</label>
    <input name="weightInput" placeholder="Weight" id="weightInput"></input>
    <button>Add Weight</button>
  
  <Line
  datasetIdKey='id'
  data={{
    labels: userWeightDummyData.map(val => val.date),
    datasets: [{
      id: 1,
      label:"Weight",
      data:weightData,
    }]
  
  }}
/>
  
    
    
    </>
    
  )
}

export default Weight;