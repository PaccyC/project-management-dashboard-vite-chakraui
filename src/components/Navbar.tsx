import { FaSearch } from "react-icons/fa";
import { Input } from "./ui/input";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Navbar = () => {
  return (
    <div className="flex flex-col w-full py-4">
      <div className="flex gap-4 h-[70px] px-8 w-full justify-between border-b-2 border-[#dbdbdb] items-center">
        <div className="flex items-center gap-1 px-4 w-[415px] rounded-lg bg-secondary-2">
        
          <FaSearch className="text-primary" />
          
          <Input
            type="text"
            placeholder="Search for anything..."
            className="h-12 w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
        <div className=" flex gap-12">
            {/* Icons */}
            <div className=" flex gap-2">
              <img 
                src="/assets/icons/calendar.svg" 
                alt="calendar"
                width={24}
                height={24}
                className=" cursor-pointer"
                />
               <img 
                src="/assets/icons/message-question.svg" 
                alt="calendar"
                width={24}
                height={24}
                className=" cursor-pointer"
                />
                 <img 
                src="/assets/icons/notification.svg" 
                alt="calendar"
                width={24}
                height={24}
                className=" cursor-pointer"
                />  
            </div>
             {/* Profile staffs */}
            <div className=" flex gap-2">
             <div className="flex flex-col">
               <p className=" text-dark text-xl cursor-pointer">Anima Agrawal</p>
               <p className=" text-primary text-sm cursor-pointer">U.P, India</p>
             </div>
             <div className=" flex gap-1 h-full items-center">
               <img 
               src="/assets/image/profile.jpg" 
               alt="profile image" 
               width={38}
               height={38}
               className=" object-contain"
               />
                 <MdOutlineKeyboardArrowDown 
                 color="#292D32" 
                  className=" cursor-pointer"
                  size={30}/>

             </div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
