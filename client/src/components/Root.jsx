import NavBar from './NavBar';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Root = () => {
  return (
    <>
        <NavBar/>
        <Toaster position='top-right' toastOptions={{duration: 2000}} />
        <Outlet />
    </>
  )
}

export default Root;