import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div className='container mx-auto'>
      <Outlet></Outlet>
    </div>
  );
}

export default DefaultLayout;
