import { useState, useRef } from 'react'

type TUpdateIcon = (event?: React.MouseEvent<HTMLButtonElement>) => void

const useBookIcon = (): [string, TUpdateIcon] => {
  const titleIcons = ['📘', '📗', '📕', '📔', '📓', '📙', '📚', '📖']

  const randomizeIndex = () => Math.floor(Math.random() * titleIcons.length)

  const currentIndexIconRef = useRef(randomizeIndex())

  const currentIcon = titleIcons[currentIndexIconRef.current]
  const [icon, setIcon] = useState(currentIcon)

  const updateIcon = () => {
    let newIndex: number = randomizeIndex()

    while (currentIndexIconRef.current === newIndex) {
      newIndex = randomizeIndex()
    }

    currentIndexIconRef.current = newIndex

    setIcon(titleIcons[newIndex])
  }

  return [icon, updateIcon]
}

export default useBookIcon
