import Link from "next/link";

const HeaderItem = ({ icon, notif, url }) => {
  return (
    <Link
      href={url}
      className="medium-width raise medium-heigt relative round bg-light dark:bg-[#242531] flex items-center justify-center text-gray dark:text-[#d6d6d6]"
    >
      {notif && (
        <div className="w-[0.4375rem] h-[0.4375rem] bg-[#05E800] rounded-full absolute top-[1.375rem] right-[1.375rem]"></div>
      )}
      {icon}
    </Link>
  );
};

export default HeaderItem;
