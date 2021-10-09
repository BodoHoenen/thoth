import React from 'react'

import css from './panel.module.css'

const Panel = ({
  style = {},
  unpadded = false,
  shade = false,
  shadow = false,
  bacgkroundImageURL = false,
  hover = false,
  roundness = false,
  className = '',
  flexRow = false,
  flexColumn = false,
  gap = 1,
  ...props
}) => {
  return (
    <div
      className={
        `${css['panel']} ${css[unpadded && 'unpadded']} ${
          css[shadow && 'shadow']
        } ${css[hover && 'hover']} ${css[roundness]} ${
          css[shade && 'shade-' + shade]
        } ` + className
      }
      style={{
        display: flexColumn || (flexRow && 'flex'),
        flexDirection: flexRow ? 'row' : 'column',
        gap: gap,
        backgroundImage: bacgkroundImageURL ? bacgkroundImageURL : null,
        ...style,
      }}
    >
      {props.children}
    </div>
  )
}

export default Panel
