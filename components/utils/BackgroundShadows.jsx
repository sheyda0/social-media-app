const BackgroundShadows = ({ isWordEntered }) => {
  return (
    <>
      <div
        className={`fixed overflow-hidden block top-0 right-0 z-0 ${
          isWordEntered ? "h-full" : "h-[60rem]"
        }`}
      >
        <svg
          width="958"
          height="1012"
          viewBox="0 0 958 1012"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_f_201_203)">
            <circle cx="790" cy="222" r="240" fill="#3D0F8A" />
          </g>
          <defs>
            <filter
              id="filter0_f_201_203"
              x="0"
              y="-568"
              width="1580"
              height="1580"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="275"
                result="effect1_foregroundBlur_201_203"
              />
            </filter>
          </defs>
        </svg>
      </div>

      <div
        className={`fixed overflow-hidden block top-0 left-0 z-0 ${
          isWordEntered ? "h-full" : "h-[60rem]"
        }`}
      >
        <svg
          width="935"
          height="1128"
          viewBox="0 0 935 1128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.5" filter="url(#filter0_f_201_218)">
            <circle cx="134.5" cy="388.5" r="250.5" fill="#3D0F8A" />
          </g>
          <defs>
            <filter
              id="filter0_f_201_218"
              x="-666"
              y="-412"
              width="1601"
              height="1601"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="275"
                result="effect1_foregroundBlur_201_218"
              />
            </filter>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default BackgroundShadows;
