const FileInput = ({ name, onChange, cln, label, setImgSrc }) => {
  //   useEffect(() => {
  //     if (resetSrc) {
  //       setImgSrc(null);
  //     }
  //   }, [resetSrc, setImgSrc]);

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
    <div
      className={`${cln} flex justify-between items-center relative cursor-pointer`}
    >
      <div className="w-full h-full">
        <label
          htmlFor={name}
          className="text-green font-semibold uppercase text-[12px] absolute top-0 left-0 transition-all"
        >
          {label}
        </label>

        <input
          type="file"
          id={name}
          name={name}
          accept="image/png, image/jpeg, image/gif, image/apng, image/avif, image/svg, image/webp,"
          onChange={(e) => {
            handleFileChange(e);
            // onChange(e);
          }}
          className="absolute top-0 left-0 h-full bg-transparent border-0 outline-0 w-full input text-[14px] text-golden font-bold pb-[18px] opacity-0"
        />
      </div>
    </div>
  );
};

export default FileInput;
