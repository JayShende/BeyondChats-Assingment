
interface NameAvatarProps{
    name:string
}

const colorList=[
  "bg-emerald-300",
  "bg-red-300",
  "bg-orange-300",
  "bg-amber-300",
  "bg-green-300",
  "bg-cyan-300",
  "bg-sky-300",
  "bg-indigo-300",
  "bg-rose-300",
  "bg-pink-300",
  "bg-fuchsia-300"
]

const NameAvatar = ({
    name
}:NameAvatarProps) => {

  const randomColor = colorList[Math.floor(Math.random() * colorList.length)];

  return (
    <div className={`rounded-full w-10 h-10 p-2 ${randomColor} text-center`}>
      <span className="font-semibold text-white">
        {name[0]}
      </span>
    </div>
  )
};

export default NameAvatar;
