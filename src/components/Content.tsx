import { useAuth0 } from '@auth0/auth0-react';

const Content = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <div className='d-flex flex-column justify-content-center align-items-center h-100'>
      {!isAuthenticated && <h2>Authenticate</h2>}
      <button className='btn btn-secondary mt-2' onClick={() => isAuthenticated ? logout() : loginWithRedirect()}>
        {isAuthenticated ? 'Logout' : 'Login / Signup'}
      </button>
      {isAuthenticated && user && <h3 className='mt-3'>Hello {user.nickname}</h3>}
    </div>
  );
};

export default Content;
