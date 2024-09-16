import { useAuthContext } from "../../context/authProvider";

const UserAvatar = () => {
  const {user} = useAuthContext()
  return (
    <div className="flex items-center gap-3">
    <div className="h-[34px] w-[34px] rounded-full overflow-hidden">
      <img src={user?.img} alt={user?.name} className="w-full h-full object-cover" />
    </div>
    <h1 className="font-medium text-secondary-text">{user?.name}</h1>
  </div>
  );
};

export default UserAvatar;
