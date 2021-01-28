import { Button } from '@material-ui/core'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 600px;
  margin: 0 auto;
  border-radius: 15px;
  text-align: center;
  background: linear-gradient(179deg, #303030, #292929);

  p {
    margin: 0 auto;
  }
`

const Section = styled.section`
  display: block;
  padding: 20px 0;
`

const SectionButtons = styled(Section)`
  display: flex;
  justify-content: center;
  align-items: center;

  button + button {
    margin-left: 20px;
  }
`

const TitleIcon = styled.div`
  button {
    display: block;
    background: transparent;
    border: none;
    outline: none;
    font-size: 160px;
    cursor: pointer;
  }
`

const TitleText = styled.p`
  display: block;
  width: 160px;
  font-size: 14px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 1;
`

const TitleNumber = styled.span`
  display: block;
  font-size: ${({ children }) => {
    const childrenLength = (children?.toString().length || 1) * 0.5
    const resultLength = 126 / (childrenLength < 1 ? 1 : childrenLength)

    return resultLength
  }}px;
`

const AddButton = styled(Button)`
  color: #fff;
  background: linear-gradient(323deg, #0093e9 0%, #80d0c7 100%);
`

const ListButton = styled(Button)`
  color: #fff;
  background: linear-gradient(160deg, #0093e9 0%, #80d0c7 100%);
`

const StartButton = styled(Button)`
  width: 180px;
  height: 50px;

  &:hover {
    background: #00c853;
  }
`

export { Wrapper, Section, SectionButtons, TitleIcon, TitleText, TitleNumber, AddButton, ListButton, StartButton }
