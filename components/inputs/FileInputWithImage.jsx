import { useEffect, useState } from "react";
import Image from "next/image";

const FileInputWithImage = ({
  name,
  onChange,
  resetSrc,
  imgSrc,
  setImgSrc,
  cln,
}) => {
  useEffect(() => {
    if (resetSrc) {
      setImgSrc(null);
    }
  }, [resetSrc, setImgSrc]);

  const handleFileChange = (e) => {
    e.preventDefault();

    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setImgSrc(event.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImgSrc(null);
    }
  };

  return (
    <div className={`${cln} flex justify-between items-center relative`}>
      <div className="w-full h-full mr-5">
        <div className="h-full flex items-center pl-[12px]">
          <Image
            src={imgSrc}
            width={160}
            height={160}
            className="rounded-full"
            alt=""
          />
        </div>

        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg, image/gif, image/apng, image/avif, image/svg, image/webp,"
          onChange={(e) => {
            handleFileChange(e);
            onChange(e);
          }}
          className="absolute top-0 left-0 h-full bg-transparent border-0 outline-0 w-full input px-[12px] text-[14px] text-golden font-bold pb-[18px] opacity-0"
        />
      </div>
    </div>
  );
};

export default FileInputWithImage;
