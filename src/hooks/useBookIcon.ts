import { useState, useRef, MutableRefObject } from 'react'

type TUpdateIcon = (event?: React.MouseEvent<HTMLButtonElement>) => void
type TGetIndex = (array: Array<string>) => number

const useBookIcon = (): [string, TUpdateIcon] => {
  const randomizeIndex: TGetIndex = (array) => Math.floor(Math.random() * array.length)

  const updateIcon = (
    getIndex: TGetIndex,
    array: Array<string>,
    ref: MutableRefObject<number | null>,
    setIcon: React.Dispatch<React.SetStateAction<string>>,
  ) => () => {
    let newIndex: number = getIndex(array)

    while (ref.current === newIndex) {
      newIndex = getIndex(array)
    }

    // eslint-disable-next-line no-param-reassign
    ref.current = newIndex

    setIcon(array[newIndex])
  }

  const titleIcons = ['📘', '📗', '📕', '📔', '📓', '📙', '📚', '📖']
  const randomIndex = randomizeIndex(titleIcons)
  const currentIndexIconRef = useRef<null | number>(null)

  currentIndexIconRef.current = randomIndex

  const currentIcon = titleIcons[currentIndexIconRef.current]
  const [icon, setIcon] = useState(currentIcon)

  return [icon, updateIcon(randomizeIndex, titleIcons, currentIndexIconRef, setIcon)]
}

export default useBookIcon
