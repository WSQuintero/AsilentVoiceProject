import { useEffect } from "react"

function useObserver(observ, setOpenMenu) {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setOpenMenu(() => true)
        }
      })
    })

    if (observ.current) {
      observer.observe(observ.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [])
}

export {useObserver}