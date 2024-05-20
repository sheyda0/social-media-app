import Overlay from "../utils/Overlay";

const BlurContainer = ({ children, cln, wave, onClick, overlayCln }) => {
  return (
    <div
      className={`backdrop-filter relative blur-container bg-[#0E1534] ${cln}`}
      onClick={onClick}
    >
      <Overlay wave={wave} cln={overlayCln} />
      {children}
    </div>
  );
};

export default BlurContainer;
