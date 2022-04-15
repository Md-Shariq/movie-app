import React from 'react'

export default function NavItem(props) {
  return (
    <p><i className={props.icon}></i> {props.name}</p>
  )
}
