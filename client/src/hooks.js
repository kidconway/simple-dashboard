import { useState, useEffect } from 'react'


export const useFetch = (url, initialValue) => {
  const [ result, setResult ] = useState( initialValue )

  useEffect( () => {
    fetch(url)
      .then(res => res.json())
      .then(json => setResult(json))
  }, [url])

  return result
}

export const useDynamicTransition = ({ increment, delay, length }) => {
  const [ idx, setIdx ] = useState(0)

  useEffect( () => {
    const interval = setInterval( () => {
      setIdx( storedIdx => {
        return (storedIdx + increment) % length
      })
    }, delay)

    return () => clearInterval(interval)
  }, [delay, increment, length])

  return idx
}
