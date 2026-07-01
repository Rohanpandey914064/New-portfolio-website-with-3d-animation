import { useEffect, useRef, useState } from 'react'

const Lazy3D = ({ children, fallback = null, rootMargin = '200px 0px', className = '' }) => {
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef(null)

  useEffect(() => {
    const node = containerRef.current

    if (!node || typeof IntersectionObserver === 'undefined') {
      setIsVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [rootMargin])

  return (
    <div ref={containerRef} className={className}>
      {isVisible ? children : fallback}
    </div>
  )
}

export default Lazy3D
