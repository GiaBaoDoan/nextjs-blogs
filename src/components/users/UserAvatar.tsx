import Image from "next/image";

const UserAvatar = ({ avatar }: { avatar: string }) => {
  return avatar ? (
    <Image
      src={avatar}
      className="w-8 h-8 rounded-full object-cover"
      alt="Avatar người dùng"
      width={200}
      height={200}
    />
  ) : (
    <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
      <span className="flex h-full w-full items-center justify-center rounded-full bg-sky-500">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 448 512"
          className="text-white"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z"></path>
        </svg>
      </span>
    </span>
  );
};

export default UserAvatar;
