import { FC } from 'react';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <div>
      <h1>Page 404</h1>
      <p>Oops, some problems</p>
      <div>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/"
        >
          Back to Main
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
