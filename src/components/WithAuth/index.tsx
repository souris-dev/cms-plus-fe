import * as React from 'react';
import PropTypes, { InferProps } from 'prop-types';

import './WithAuth.css';
import { useNavigate } from 'react-router-dom';
import makeRequest from '../../utils/makeRequest';
import { VERIFY_JWT } from '../../constants/apiEndpoints';

const WithAuthPropTypes = {
  component: PropTypes.node.isRequired
}

type WithAuthProps = InferProps<typeof WithAuthPropTypes>;

const WithAuth: React.FC<WithAuthProps>
  = ({ component }: WithAuthProps): JSX.Element => {
    const navigate = useNavigate();

    React.useEffect(() => {
      makeRequest(VERIFY_JWT)
        .then(() => {return;})
        .catch((err) => {
          alert('Could not verify login. Logging out.');
          localStorage.clear();
          console.error(err);
          navigate('/');
        })
    }, []);

    if (localStorage.getItem('jwt') == null) {
      navigate('/')
    }

    return <>{component}</>;
}

WithAuth.propTypes = WithAuthPropTypes;

export default WithAuth;

