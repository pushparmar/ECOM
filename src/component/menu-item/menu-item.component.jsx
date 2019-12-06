import React from 'react'
import './menu-item.styles.scss'

const MenuItem = ({title}) =>  {
    return (
        <div className={`${title.size} menu-item`}>
            <div className="background-image" 
                style={{
                    backgroundImage: `url(${title.imageUrl})`
                }}>
            </div>
            <div className="content">
                <h1 className="title">
                    {title.title.toUpperCase()}
                </h1>
                <span className="subtitle">Shop Now</span>
            </div>
        </div>
    )
}

export default MenuItem;