import React, { useContext } from 'react'
import { DataContext } from '../../Data/context/DataContext'
import icons from '../../../assets/icons'
// import useDivider from '../../../customHooks/halver'
// const { useEffect, useState } = React

export default function MainPAge() {
  const first = useContext(DataContext)
  const { data } = first()

  const dividePhraseInHalf = (phrase: string) => {
    const words = phrase.split(' ')
    const half = Math.floor(words.length / 2)
    const firstHalf = words.slice(0, half).join(' ')
    const secondHalf = words.slice(half).join(' ')

    return [firstHalf, secondHalf]
  }

  console.log(data)

  return (
    <div>
      {
        data.map((item: {
          title: string, image: string,
          aggregateLikes: number, servings: number,
          readyInMinutes: number
        }, index: number) => {
          const [firstHalf, secondHalf] = dividePhraseInHalf(item.title)
          return (
            <div key={index}>
              <img src={item.image} alt="" />
              <span>{firstHalf}</span>
              <h3
                style={{
                  color: 'red',
                }}
              >{secondHalf}</h3>
              <div>
                <img src={icons.star} alt="icon" />
                <h2>{item.aggregateLikes}</h2>
                <img src={icons.favorite} alt="icon" />
              </div>
              <div>
                <img src={icons.portion} alt="icon" />
                <h1>Tamaño de la porcion</h1>
                <h2>{item.servings} Raciones</h2>
                <img src={icons.time} alt="icon" />
                <h1>Tiempo de preparacion</h1>
                <h2>{item.readyInMinutes} Minutos</h2>
                <img src={icons.chef} alt="icon" />
                <h1>Dificultad</h1>
                <h2>Facil</h2>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}