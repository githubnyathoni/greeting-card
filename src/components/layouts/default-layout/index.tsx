import { Outlet } from "react-router-dom"

// Where you set layout app such as header, sidebar, etc.
function DefaultLayout() {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  )
}

export default DefaultLayout
