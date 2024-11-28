import { Outlet } from 'react-router-dom';

function DefaultLayout() {
  return (
    <div className='container mx-auto flex justify-center my-10'>
      <Outlet></Outlet>
    </div>
  );
}

export default DefaultLayout;
