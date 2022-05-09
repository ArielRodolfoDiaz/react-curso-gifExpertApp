import React from 'react'
import '../index.css'
export default function GifsGridItem({ title, url }) {
    return (
        <div className='card animate__animated animate__bounce animate__delay-4s'>
            <h3>{title}</h3>
            <img src={url} alt={title}/>
        </div>

    )
}
