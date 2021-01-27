import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Button } from '@material-ui/core'
import styled from 'styled-components'

const Wrapper = styled.div`
  .description {
    padding-top: 10px;
    padding-bottom: 10px;
  }

  p {
    margin: 10px 0;

    &:first-child {
      color: #c3c3c3c3;
    }
  }

  a {
    margin-top: 20px;
  }
`

const NotFound: FC = () => {
  return (
    <Wrapper>
      <h1>Page Not Found</h1>
      <div className="description">
        <p>We couldn't find what you were looking for.</p>
        <p>
          Please contact the owner of the site that linked you to the original URL and let them know their link is
          broken.
        </p>
        <Button variant="contained" color="primary" component={Link} to="/">
          {'< Back to Main'}
        </Button>
      </div>
    </Wrapper>
  )
}

export default NotFound
