import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const AvatarGroup = () => {
  return (
    <div className="flex -space-x-4">
      {/* First Avatar */}
      <Avatar className="w-10 h-10 border-2 border-white">
        <AvatarImage src="/assets/image/profile.jpg" alt="User 1" />
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>

      {/* Second Avatar */}
      <Avatar className="w-10 h-10 border-2 border-white">
        <AvatarImage src="/assets/image/profile.jpg" alt="User 2" />
        <AvatarFallback>CD</AvatarFallback>
      </Avatar>

      {/* Third Avatar */}
      <Avatar className="w-10 h-10 border-2 border-white">
        <AvatarImage src="/assets/image/profile.jpg" alt="User 3" />
        <AvatarFallback>EF</AvatarFallback>
      </Avatar>

      {/* Plus Avatar */}
      <div className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-full border-2 border-white text-sm font-medium">
        +2
      </div>
    </div>
  );
};

export default AvatarGroup;
