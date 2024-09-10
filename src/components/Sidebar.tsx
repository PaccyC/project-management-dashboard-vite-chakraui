import { navLinks } from "@/utils/navLinks"
import { useState } from "react"
import { BsThreeDots } from "react-icons/bs";
import { Button } from "./ui/button";

const Sidebar = () => {
  const [isActive,setIsActive]= useState(false);
  return (
    <div className=" hidden md:flex flex-col w-[300px] h-full border-r-2 border-[#dbdbdb] py-4">
        <div className=" flex gap-4 w-full h-[70px] px-3   border-b-2 border-[#dbdbdb] items-center">
          <div className=" flex gap-2  w-full ">
             <img 
              src="/assets/icons/logo.svg"
              alt="logo"
              width={30}
              height={30}
              />
            <h3 className=" text-2xl font-semibold text-center">Project M.</h3>
          </div>
         <div>

          <img
          src="/assets/icons/lefticon.svg"
          height={30}
          width={30}
          alt="left icon"
          />
         </div>
        </div>
        <ul className=" flex flex-col gap-4 py-4 w-full px-3">
           {navLinks.map((link)=>(
            <li key={link.route} className=" cursor-pointer">
              <div className=" flex gap-3">
                <img src={link.icon} alt="icon" />
                <h3 className=" text-primary font-medium">{link.label}</h3>
              </div>
            </li>
           ))}
    
           <hr className=" bg-primary h-[1px] mt-6"/>
      
        </ul>
        <div className=" flex flex-col px-3 gap-4 ">
          <div className=" flex justify-between w-full">
            <p className=" font-semibold text-primary">MY PROJECTS</p>
            <img 
              src="/assets/icons/add.svg" 
              alt="add" />
          </div>

          <ul className=" flex flex-col gap-6">
            <li className=" text-primary flex justify-between" >
              <h3>Mobile App</h3>
               
              <BsThreeDots/>

            </li>
            <li className=" text-primary flex justify-between" >
              <h3>Website Redesign</h3>
              <BsThreeDots/>
            </li>
            <li className=" text-primary flex justify-between" >
            <h3>Design System</h3>
            <BsThreeDots/>
          </li>
            <li className=" text-primary flex justify-between" >
              <h3>Wireframes</h3>
              <BsThreeDots/>
            </li>
          </ul>
        </div>

        <div className=" w-full flex justify-center py-12">
          <div className="  w-[206px] h-[210px] bg-secondary justify-center items-center relative rounded-xl px-3">
            <p className=" font-semibold text-sm text-center pt-12">Thoughts Time</p>
            <p className=" text-sm text-primary">We don’t have any notice for you, till then you can share your thoughts with your peers.</p>
            <Button className="px-6 py-3 rounded-md bg-white font-medium mt-3">
             Write Message
            </Button>
          <div className=" flex absolute -top-8 left-16 w-[66px] h-[66px] rounded-full justify-center items-center bg-[#C4C4C4] shadow-[0_0_30px_rgba(253,224,71,0.8)]">
            <img 
              src="/assets/icons/lamp.svg" 
              alt="notification" 
              width={24} 
              height={24} 
              />
          </div>
          </div>

        </div>

    </div>
  )
}

export default Sidebar