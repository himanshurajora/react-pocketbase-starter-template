import { useAuth } from './hooks/useAuth';
import { Button } from 'primereact/button';
export const Dashboard = () => {
  const { login, logout, user, loading } = useAuth();
  return (
    <>
      <h1> Hello World</h1>
      {(user && (
        <Button onClick={logout} disabled={loading}>
          Logout
        </Button>
      )) || (
        <Button onClick={login} disabled={loading}>
          Login
        </Button>
      )}
    </>
  );
};
