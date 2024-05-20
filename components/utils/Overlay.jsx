const Overlay = ({ wave, cln }) => {
  return (
    <div
      className={`w-full h-full bg-[#0F1F46] block !z-[-1] absolute top-0 left-0 opacity-40 round ${cln}`}
    >
      {wave}
    </div>
  );
};

export default Overlay;
