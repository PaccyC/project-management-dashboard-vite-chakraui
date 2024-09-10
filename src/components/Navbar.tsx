import { FaSearch } from "react-icons/fa";
import { Input } from "./ui/input";

const Navbar = () => {
  return (
    <div className="hidden md:flex flex-col w-full h-full border-r-2 border-[#dbdbdb] py-4">
      <div className="flex gap-4 h-[70px] px-8 w-full justify-between border-b-2 border-[#dbdbdb] items-center">
        <div className="flex items-center gap-1 px-4 w-[415px] rounded-lg bg-secondary-2">
        
          <FaSearch className="text-primary" />
          
          <Input
            type="text"
            placeholder="Search for anything..."
            className="h-12 w-full border-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
