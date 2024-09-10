import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import {Outlet} from 'react-router-dom'
const RootLayout = () => {
  return (
    <div className=" w-full md:flex">
        <Sidebar/>
        <Navbar/>

        <section className=" flex flex-1 h-full">
            <Outlet/>
        </section>
    </div>
  )
}

export default RootLayout