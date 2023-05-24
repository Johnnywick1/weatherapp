import Svg, { Path } from "react-native-svg";

const SpeedIcon = ({ iconClass, color }) => {
  return (
    <Svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M10.4014 15.7287C10.7485 16.0758 11.2502 16.238 11.9066 16.2153C12.563 16.1927 13.0421 15.9475 13.3439 15.4797L18.2329 7.80666L10.6504 12.7636C10.1977 13.0654 9.9563 13.5483 9.92612 14.2122C9.89594 14.8761 10.0544 15.3816 10.4014 15.7287ZM12.0085 5C12.8686 5 13.7664 5.13958 14.702 5.41874C15.6375 5.69789 16.5354 6.17699 17.3955 6.85602L16.2185 7.69349C15.5395 7.2408 14.8114 6.90506 14.0343 6.68626C13.2572 6.46746 12.5817 6.35806 12.008 6.35806C9.88832 6.35806 8.08342 7.11417 6.59328 8.62637C5.10313 10.1386 4.35806 11.9702 4.35806 14.1213C4.35806 14.8006 4.45237 15.4873 4.64099 16.1814C4.82961 16.8755 5.09745 17.5168 5.44451 18.1053H18.5498C18.8818 17.5621 19.1459 16.9283 19.342 16.204C19.5382 15.4797 19.6363 14.7705 19.6363 14.0764C19.6363 13.4426 19.542 12.7598 19.3533 12.028C19.1647 11.2961 18.829 10.6209 18.3461 10.0022L19.2289 8.82521C19.8023 9.67023 20.2323 10.519 20.519 11.3716C20.8057 12.2241 20.9642 13.0805 20.9943 13.9406C21.0245 14.846 20.934 15.6985 20.7227 16.4983C20.5115 17.298 20.2021 18.0374 19.7947 18.7164C19.6136 19.0635 19.4213 19.2748 19.2175 19.3502C19.0138 19.4257 18.7611 19.4634 18.4593 19.4634H5.53505C5.27853 19.4634 5.02578 19.3992 4.7768 19.271C4.52782 19.1427 4.34297 18.9579 4.22226 18.7164C3.82993 17.9921 3.52814 17.2565 3.31688 16.5096C3.10563 15.7627 3 14.9667 3 14.1217C3 12.8692 3.23766 11.6885 3.71298 10.5794C4.18831 9.47029 4.83339 8.50456 5.64822 7.68218C6.46306 6.85979 7.41884 6.20717 8.51555 5.7243C9.61226 5.24143 10.7766 5 12.0085 5Z"
        fill={color}
      />
    </Svg>
  );
};

SpeedIcon.defaultProps = {
  iconClass: "w-6 h-6",
  color: "black",
};

export default SpeedIcon;
