import AvatarGroup from "@/components/AvatarGroup";
import ProjectDetails from "@/components/ProjectDetails";
import { Button } from "@/components/ui/button";

import { FaEdit,FaEquals } from "react-icons/fa"
import { IoMdLink ,IoMdAdd} from "react-icons/io";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { PiLineVerticalLight } from "react-icons/pi";




const DashboardContent = () => {
  return (
  <main className=" flex flex-1 px-8 py-8 ">
    <div className=" flex flex-col gap-8 w-full">
      <div className=" flex justify-between">

        <div className=" flex gap-2 items-center">
          <h2 className=" text-dark font-semibold text-4xl ">Mobile App</h2>
          <div className="w-[30px] h-[30px] bg-secondary flex items-center justify-center cursor-pointer rounded-lg">
            <FaEdit color="#5030E5"/>
          </div>
          <div className="w-[30px] h-[30px] bg-secondary flex items-center justify-center cursor-pointer rounded-lg">
            <IoMdLink color="#5030E5"/>
          </div>
        </div>
        {/* Users */}

        <div className=" flex gap-4 items-center">
          {/* Invite */}
          <div className=" flex gap-1">
            <div className=" flex items-center justify-center w-[18px] h-[18px] bg-secondary rounded-md">
              <IoMdAdd color="#5030E5"/>

            </div>
              <span className="text-light-1 font-medium text-sm">Invite</span>
          </div>
          <AvatarGroup/>
        </div>
      </div>
        <div className=" flex justify-between w-full">
          {/* Filter and calendar */}
          <div className=" flex gap-2 items-center">
              <Button className=" flex gap-2 px-3 py-2 border bg-white border-primary rounded-lg  cursor-pointer">
                <img
                 src="/assets/icons/filter.svg"
                 width={16}
                 height={16}

                />
                <span className=" text-primary font-medium">Filter</span>
                <MdOutlineKeyboardArrowDown size={20} className=" text-primary"/>
              </Button>
              <Button className=" flex gap-2 px-3 py-2 border bg-white border-primary rounded-lg  cursor-pointer">
                <img
                 src="/assets/icons/calendar.svg"
                 width={16}
                 height={16}

                />
                <span className=" text-primary font-medium">Today</span>
                <MdOutlineKeyboardArrowDown size={20} className=" text-primary"/>
              </Button>
          </div>
          {/* Share */}
          <div className=" flex gap-3 items-center">
          <Button className=" flex gap-2 px-3 py-2 border bg-white border-primary rounded-lg  cursor-pointer">
                <img
                 src="/assets/icons/members.svg"
                 width={16}
                 height={16}

                />
                <span className=" text-primary font-medium">Share</span>
              </Button>
              <PiLineVerticalLight size={30} className=" text-primary"/>
              <div className=" w-[40px] h-[40px] bg-light-1 rounded-lg flex items-center justify-center" >
                <FaEquals className=" text-white"/>
              </div>

              <img 
              src="/assets/icons/square-dots.svg" 
              alt="square dots"
              width={21}
              height={21}
               />
          </div>
          
        </div>

        {/* Projects and their progress */}
          <ProjectDetails/>
    </div>
  </main>
  )
}

export default DashboardContent