import "./little-universe.css";

const LittleUniverse = () => {
  return (
    <div className="universe z-40 !hidden md:!flex">
      <div className="universe__part hidden"></div>
      <div className="universe__part hidden"></div>
      <div className="universe__part">
        <div className="universe__bubble"></div>
        <div className="universe__bubble"></div>
        <div className="universe__bubble"></div>
        <div className="universe__bubble"></div>
        <div className="universe__bubble"></div>
        <div className="universe__bubble"></div>
        <div className="universe__planet"></div>
        <div className="universe__hills"></div>
        <div className="universe__rocket">
          <div className="universe__rocket-window"></div>
          <div className="universe__rocket-light"></div>
        </div>
        <div className="universe__sattelite"></div>
        <div className="universe__star"></div>
        <div className="universe__star"></div>
        <div className="universe__star"></div>
        <div className="universe__star"></div>
        <div className="universe__star"></div>
      </div>
    </div>
  );
};

export default LittleUniverse;
