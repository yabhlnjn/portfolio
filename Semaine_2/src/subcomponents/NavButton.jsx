import React from 'react'

const NavButton = ({text, selected=false}) => {
  return (
    <li className={`py-3 px-8 rounded-full text-primary ${selected ? 'bg-elevationTwo' : ''}`}>{text}</li>
  )
}

export default NavButton