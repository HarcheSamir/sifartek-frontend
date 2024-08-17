import { ParallaxProvider } from 'react-scroll-parallax';
import PublicNavigator from './navigators/PublicNavigator';
import useAdminStore from './stores/adminStore';
import DashboardNavigator from './navigators/DashboardNavigator';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  const { user } = useAdminStore()
  return (
    <ParallaxProvider>
      <ToastContainer />
      {!user ? <PublicNavigator /> : <DashboardNavigator />}
    </ParallaxProvider>
  );
}

export default App;
