import { useEffect } from "react"
import { useState } from "react"
import "./Bubble.css"

const Bubble = () => {
  const [xDirection, setXDirection] = useState(Math.random() < 0.5 ? 1 : -1)
  const [yDirection, setYDirection] = useState(Math.random() < 0.5 ? 1 : -1)
  const [xPosition, setXPosition] = useState(
    Math.random() * (window.innerWidth - 50)
  )
  const [yPosition, setYPosition] = useState(
    Math.random() * (window.innerHeight - 50)
  )

  useEffect(() => {
    const xSpeed = Math.random() * 2 + 1
    const ySpeed = Math.random() * 2 + 1

    const intervalId = setInterval(() => {
      setXPosition((prevX) => {
        const newX = prevX + xSpeed * xDirection
        if (newX <= 0 || newX >= window.innerWidth - 50) {
          setXDirection((prevDirection) => -prevDirection)
        }
        return newX
      })

      setYPosition((prevY) => {
        const newY = prevY + ySpeed * yDirection
        if (newY <= 0 || newY >= window.innerHeight - 50) {
          setYDirection((prevDirection) => -prevDirection)
        }
        return newY
      })
    }, 16)

    return () => clearInterval(intervalId)
  }, [xDirection, yDirection])

  const bubbleStyle = {
    left: xPosition + "px",
    top: yPosition + "px",
  }

  return <div className='bubble' style={bubbleStyle}></div>
}

export { Bubble }
