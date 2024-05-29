import React from 'react'
import Box from "./Box"
import "./Container.css"

const Container = ({ items, onClick }) => {
    return (
        <div className='container'>
            {items.map((value, idx) => {
                return < Box value={value} onClick={() =>value === null && onClick(idx)} />
            })}

        </div>
    )
}

export default Container
