import Navbar from "@/components/Navbar"
import Sidebar from "@/components/Sidebar"
import {Outlet} from 'react-router-dom'
const RootLayout = () => {
  return (
    <div className=" w-full md:flex">
        <Sidebar/>
        <div className=" flex flex-col w-full">
        <Navbar/>

        <section className=" flex flex-1 h-full">
            <Outlet/>
        </section>
        </div>
    </div>
  )
}

export default RootLayout