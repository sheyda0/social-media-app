import Link from "next/link";

const HeaderItem = ({ icon, notif, url, cln }) => {
  return (
    <Link
      href={url}
      className={`${cln} md:w-[3.7rem] raise no-raise medium-heigt relative round md:bg-[#f4f4f7] md:dark:bg-[#242531] flex items-center justify-center text-gray dark:text-[#d6d6d6]`}
    >
      {notif && (
        <div className="w-[0.4375rem] h-[0.4375rem] bg-[#05E800] rounded-full absolute top-[1.375rem] right-0 md:right-[1.375rem]"></div>
      )}
      {icon}
    </Link>
  );
};

export default HeaderItem;
