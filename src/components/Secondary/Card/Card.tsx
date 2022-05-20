import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../../../Data/context/DataContext'
import icons from '../../../utilities'


export default function Card() {
  const first = useContext(DataContext)
  const [state, setState] = useState([])
  const { data } = first()

  useEffect(() => {
    data && data.sort((a: { title: string }, b: { title: string }) => a.title.length - b.title.length)
    const recipes = data.slice(0, 4)
    setState(recipes)
  }, [data])

  const dividePhraseInHalf = (phrase: string) => {

    const words = phrase.split(' ')
    const half = Math.floor(words.length / 2)
    const firstHalf = words.slice(0, half).join(' ')
    const secondHalf = words.slice(half).join(' ')

    return [firstHalf, secondHalf]
  }

  console.log(state)

  return (
    <>
      <div className='container_cards'>
        {
          state && state.map((item: {
            title: string, image: string,
            aggregateLikes: number, servings: number,
            readyInMinutes: number
          }, index: number) => {
            const [firstHalf, secondHalf] = dividePhraseInHalf(item.title)
            return (
              <div key={index} className="card_info" >
                <img src={item.image} alt="food" className='img_card' />
                <div className='card_info_text'>
                  <div className='title'>
                    <h1>{firstHalf}</h1>
                    <span>{secondHalf}</span>
                  </div>
                  <div className='star_fav_card'>
                    <img className='star_card' src={icons.star} alt="icon" />
                    <h2>{item.aggregateLikes}</h2>
                    <img className='fav_card' src={icons.favorite} alt="icon" />
                  </div>
                </div >
                <div className='detail_card' >
                  <img className='icon_card' src={icons.portion} alt="icon" />
                  <h1>Tamaño de la porcion</h1>
                  <h2>{item.servings} Raciones</h2>
                  <img className='icon_card' src={icons.time} alt="icon" />
                  <h1>Tiempo de preparacion</h1>
                  <h2>{item.readyInMinutes} Minutos</h2>
                  <img className='icon_card' src={icons.chef} alt="icon" />
                  <h1>Dificultad</h1>
                  <h2>Facil</h2>
                </div>
              </div>
            )
          })
        }
      </div>
    </>
  )
}