import { useAuth0 } from '@auth0/auth0-react';

import Content from './components/Content';
import Loader from './components/Loader';

function App() {
  const { isLoading } = useAuth0();

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && <Content />}
    </>
  );
}

export default App;
