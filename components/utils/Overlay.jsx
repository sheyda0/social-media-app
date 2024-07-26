const Overlay = ({ wave, cln }) => {
  return (
    <div
      className={`w-full h-full bg-[#172139] block !z-[-1] absolute top-0 left-0 opacity-50 round ${cln}`}
    >
      {wave}
    </div>
  );
};

export default Overlay;
