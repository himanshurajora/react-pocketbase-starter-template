import 'primeicons/primeicons.css';
import './App.css';
import { AuthContext } from './context/AuthContext';
import { useUserState } from './hooks/useUserState';
import { Dashboard } from './Dashboard';

function App() {
  const {
    user,
    setUser,
    loading: userLoading,
    setLoading: setUserLoading,
  } = useUserState();

  return (
    <>
      <AuthContext.Provider
        value={{
          user,
          setUser,
          loading: userLoading,
          setLoading: setUserLoading,
        }}
      >
        <Dashboard />
      </AuthContext.Provider>
    </>
  );
}

export default App;
