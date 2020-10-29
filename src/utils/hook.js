import { useState, useEffect, useMemo } from 'react'

export function useWindowSize() {
  // Initialize state with undefined width/height so server and client renders match
  // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/
  const [windowSize, setWindowSize,] = useState({
    width: undefined,
    height: undefined,
  })

  useEffect(() => {
    // Handler to call on window resize
    function handleResize() {
      // Set window width/height to state
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      })
    }
    
    // Add event listener
    window.addEventListener('resize', handleResize)
    
    // Call handler right away so state gets updated with initial window size
    handleResize()
    
    // Remove event listener on cleanup
    return () => window.removeEventListener('resize', handleResize)
  }, []) // Empty array ensures that effect is only run on mount
  const screen = useMemo(() => {
    const w = windowSize.width
    if (w >= 1280) {
      return 'xl'
    } else if (w >= 1024) {
      return 'lg'
    } else if (w >= 768) {
      return 'md'
    } else {
      return 'sm'
    }

    // switch ( windowSize.width ) {
    //   case windowSize.width >= 1280: {
    //     return 'xl'
    //   }
    //   case windowSize.width >= 1024: {
    //     return 'lg'
    //   }
    //   case windowSize.width >= 768: {
    //     return 'md'
    //   }
    //   default: {
    //     return 'sm'
    //   }
    // }
  }, [windowSize,])

  return { ...windowSize, screen, }
}