import Svg, { Path } from "react-native-svg";

const RaindropIcon = ({ color, iconClass }) => {
  return (
    <Svg
      viewBox="0 0 21 28"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M8.24601 3.03522L8.24609 3.0353L8.25311 3.02799L10.4708 0.720484C11.2645 1.54363 12.896 3.25092 13.8951 4.41988C15.0937 5.82235 16.1315 7.1203 17.0087 8.29311C17.9715 9.71455 18.799 11.2808 19.4901 12.973C20.1806 14.6634 20.5 16.0724 20.5 17.2324C20.5 19.0548 20.041 20.7364 19.1365 22.3262C18.2316 23.8962 17.003 25.1635 15.4477 26.0952C13.8916 27.0274 12.2283 27.5 10.4497 27.5C8.67162 27.5 7.02937 27.0278 5.4942 26.0966C3.95938 25.1657 2.74919 23.8982 1.84261 22.325C0.941616 20.7614 0.5 19.0603 0.5 17.2324C0.5 15.9338 0.876303 14.3651 1.74139 12.5179L1.74146 12.518L1.74505 12.5099C2.57763 10.6475 3.56867 8.90817 4.69842 7.29162C5.82995 5.67252 7.01926 4.26089 8.24601 3.03522Z"
        stroke={color}
      />
    </Svg>
  );
};

RaindropIcon.defaultProps = {
  iconClass: "w-5 h-5",
  color: "#00A7E1",
};

export default RaindropIcon;
