interface NameAvatarProps {
  id: number;
}

const NameAvatar = ({ id }: NameAvatarProps) => {
  return (
    <img
      src={`https://randomuser.me/api/portraits/men/${id}.jpg`}
      alt="profile img"
      className="rounded-full w-14 h-14 p-2 "
    />
  );
};

export default NameAvatar;
