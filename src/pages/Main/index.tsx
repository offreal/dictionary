import React, { FC } from 'react'
import AddIcon from '@material-ui/icons/Add'
import ReorderIcon from '@material-ui/icons/Reorder'
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline'

import createFormattedWordBasedOnNumber from '../../utils/getWordEndings'
import {
  Wrapper,
  Section,
  SectionButtons,
  TitleIcon,
  TitleText,
  TitleNumber,
  AddButton,
  ListButton,
  StartButton,
} from './styles'
import useBookIcon from '../../hooks/useBookIcon'

const formatWordCount = createFormattedWordBasedOnNumber(['слово', 'слова', 'слов'])

const Main: FC = () => {
  const [icon, updateIcon] = useBookIcon()
  const number = 69 // temporarily

  return (
    <Wrapper>
      <Section>
        <TitleIcon>
          <button type="button" onClick={updateIcon}>
            {icon}
          </button>
        </TitleIcon>
        <TitleText>
          Словарь содержит
          <TitleNumber>{number}</TitleNumber>
          {formatWordCount(number)}
        </TitleText>
      </Section>
      <SectionButtons>
        <AddButton variant="contained" startIcon={<AddIcon />}>
          Добавить еще
        </AddButton>
        <ListButton variant="contained" startIcon={<ReorderIcon />}>
          Список слов
        </ListButton>
      </SectionButtons>
      <Section>
        <StartButton variant="outlined" color="default" startIcon={<PlayCircleOutlineIcon />}>
          Начать игру
        </StartButton>
      </Section>
    </Wrapper>
  )
}

export default Main
