import React, { useState, useEffect } from 'react'
import { Wrapper, Bar } from './styles'

export const Overlay = () => {
  const [hide, set] = useState(false)
  useEffect(() => {
    setTimeout(() => set(true), 3000)
  }, [])
  return (
    <Wrapper hide={hide}>
      {Array.from({ length: 4 }, (_, i) => (
        <Bar key={i} />
      ))}
    </Wrapper>
  )
}
