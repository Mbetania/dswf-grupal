import React from 'react'
import user from '../data/user.json'

export default function JsonList() {
  return (
    <div>
      <ul>
        {user.map(u => (
            <li key={u.id}>{u.nombre} {u.tech}</li>
        ))}
      </ul>
    </div>
  )
}
