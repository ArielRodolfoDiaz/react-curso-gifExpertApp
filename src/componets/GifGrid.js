import React from 'react'
import useFetchGifs from '../hooks/useFetchGifs'
import GifsGridItem from './GifsGridItem'


export default function GifGrid({ categories }) {


  const {data, loading} = useFetchGifs(categories)
  return (
    <>
    {loading && <p>Cargando</p>}
      <h3>{categories}</h3>
      <div className='card-grid'>
        {data.map((img) => (
          <GifsGridItem {...img} key={img.id} />
        ))}
      </div>
    </>
  )
}
