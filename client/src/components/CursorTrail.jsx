import { useEffect, useState } from 'react'

function CursorTrail() {
  const [trails, setTrails] = useState([])

  useEffect(() => {
    let timeoutId

    const handleMouseMove = (e) => {
      const newTrail = {
        x: e.clientX,
        y: e.clientY,
        id: Date.now() + Math.random()
      }

      setTrails(prev => [...prev, newTrail].slice(-3))

      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => {
        setTrails([])
      }, 500)
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearTimeout(timeoutId)
    }
  }, [])

  return (
    <>
      {trails.map((trail, index) => (
        <div
          key={trail.id}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            opacity: (index + 1) * 0.2,
            width: `${10 + index * 5}px`,
            height: `${10 + index * 5}px`,
            transition: 'opacity 0.3s ease, width 0.2s ease, height 0.2s ease'
          }}
        />
      ))}
    </>
  )
}

export default CursorTrail
