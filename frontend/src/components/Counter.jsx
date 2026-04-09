import { useEffect, useState } from 'react'

export default function Counter({ end, duration = 2000, label }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTime
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = (timestamp - startTime) / duration
      
      if (progress < 1) {
        setCount(Math.floor(end * progress))
        requestAnimationFrame(animate)
      } else {
        setCount(end)
      }
    }
    
    requestAnimationFrame(animate)
  }, [end, duration])

  return (
    <div className="text-center">
      <div className="text-5xl font-bold gradient-text">{count}+</div>
      <p className="text-gray-600 mt-2 font-semibold">{label}</p>
    </div>
  )
}
