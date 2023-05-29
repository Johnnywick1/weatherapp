import Svg, { Path } from "react-native-svg";

const HailIcon = ({ color, iconClass }) => {
  return (
    <Svg
      viewBox="0 0 22 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      classname={iconClass}
    >
      <Path
        d="M0.640015 9.89994C0.640015 11.2299 1.10001 12.3699 2.03001 13.3299C2.96001 14.2899 4.09002 14.7999 5.43002 14.8599C5.54002 14.8599 5.60002 14.7999 5.60002 14.6899V13.3499C5.60002 13.2399 5.54002 13.1799 5.43002 13.1799C4.57002 13.1399 3.85001 12.7999 3.25001 12.1599C2.65001 11.5199 2.35001 10.7699 2.35001 9.89994C2.35001 9.06994 2.63001 8.35994 3.19001 7.73994C3.75001 7.12994 4.45001 6.76994 5.28001 6.66994L5.81002 6.63994C5.94002 6.63994 6.01002 6.57994 6.01002 6.44994L6.07001 5.91994C6.18001 4.83994 6.63001 3.92994 7.44001 3.20994C8.25001 2.47994 9.20001 2.11994 10.29 2.11994C11.38 2.11994 12.33 2.47994 13.14 3.20994C13.95 3.93994 14.41 4.83994 14.53 5.91994L14.61 6.49994C14.61 6.60994 14.67 6.66994 14.79 6.66994H16.4C17.29 6.66994 18.06 6.98994 18.71 7.62994C19.36 8.26994 19.69 9.01994 19.69 9.89994C19.69 10.7699 19.39 11.5199 18.79 12.1599C18.19 12.7999 17.46 13.1399 16.61 13.1799C16.48 13.1799 16.41 13.2399 16.41 13.3499V14.6899C16.41 14.7999 16.48 14.8599 16.61 14.8599C17.48 14.8399 18.28 14.5999 19.01 14.1499C19.74 13.6999 20.32 13.0999 20.74 12.3499C21.16 11.5999 21.37 10.7799 21.37 9.90994C21.37 9.01994 21.15 8.18994 20.7 7.43994C20.26 6.68994 19.65 6.08994 18.89 5.65994C18.13 5.22994 17.29 4.99994 16.4 4.99994H16.08C15.76 3.65994 15.05 2.56994 13.98 1.71994C12.91 0.869942 11.68 0.439941 10.3 0.439941C8.89001 0.439941 7.64002 0.879941 6.55001 1.74994C5.46001 2.61994 4.76001 3.73994 4.45001 5.09994C3.34001 5.35994 2.43001 5.92994 1.72001 6.82994C1.01001 7.72994 0.640015 8.74994 0.640015 9.89994ZM6.09001 17.0999C6.18001 17.3099 6.34001 17.4699 6.55001 17.5599C6.75001 17.6599 6.96001 17.6699 7.17001 17.5799C7.39001 17.4899 7.53001 17.3399 7.62001 17.1299C7.72001 16.9099 7.73002 16.6999 7.64002 16.4899C7.56002 16.2799 7.40001 16.1399 7.19001 16.0499C6.99001 15.9399 6.79001 15.9299 6.58001 16.0199C6.37001 16.1099 6.22001 16.2599 6.12001 16.4899C6.01001 16.6599 6.01001 16.8599 6.09001 17.0999ZM6.72002 14.2799C6.72002 14.4399 6.77001 14.5899 6.87001 14.7299C6.97001 14.8799 7.13001 14.9799 7.33001 15.0499C7.52001 15.1599 7.73001 15.1699 7.95001 15.0599C8.17001 14.9599 8.32002 14.7599 8.39002 14.4599L9.29001 11.0799C9.35001 10.8299 9.33001 10.6099 9.21001 10.4099C9.09001 10.2099 8.92002 10.0899 8.68002 10.0499C8.60002 10.0299 8.52001 10.0199 8.44001 10.0199C8.28001 10.0199 8.12002 10.0699 7.97002 10.1699C7.82002 10.2699 7.71001 10.4199 7.65001 10.6099L6.77002 13.9999C6.73002 14.1599 6.72002 14.2499 6.72002 14.2799ZM8.58001 19.8699C8.58001 19.9899 8.60001 20.0899 8.64001 20.1599C8.73001 20.3799 8.88002 20.5299 9.09002 20.6099C9.18002 20.6599 9.29002 20.6899 9.42002 20.6899C9.48002 20.6899 9.58001 20.6699 9.72001 20.6299C9.94001 20.5499 10.1 20.3999 10.19 20.1799C10.29 19.9599 10.29 19.7399 10.19 19.5199C10.09 19.2999 9.94002 19.1499 9.74002 19.0599C9.54002 18.9699 9.34001 18.9699 9.12001 19.0599C8.93001 19.1399 8.80001 19.2599 8.71001 19.4199C8.62001 19.5799 8.58001 19.7299 8.58001 19.8699ZM9.31001 17.2599C9.31001 17.6299 9.52001 17.8699 9.94001 17.9899C10.05 18.0199 10.13 18.0299 10.18 18.0299C10.33 18.0299 10.46 17.9999 10.56 17.9499C10.77 17.8699 10.91 17.6799 10.98 17.3799L12.65 11.0899C12.71 10.8499 12.69 10.6399 12.59 10.4399C12.49 10.2499 12.32 10.1199 12.1 10.0599C12.02 10.0399 11.93 10.0299 11.83 10.0299C11.67 10.0299 11.51 10.0799 11.35 10.1799C11.19 10.2799 11.09 10.4299 11.05 10.6199L9.34002 16.9599C9.32002 17.0999 9.31001 17.1999 9.31001 17.2599ZM12.74 16.7999C12.74 16.9199 12.76 17.0299 12.82 17.1199C12.9 17.3099 13.05 17.4599 13.26 17.5599C13.37 17.5999 13.49 17.6299 13.61 17.6299C13.67 17.6299 13.77 17.6099 13.91 17.5699C14.12 17.4899 14.28 17.3399 14.37 17.1299C14.44 16.9099 14.44 16.6999 14.36 16.4999C14.28 16.2999 14.14 16.1499 13.94 16.0499C13.71 15.9399 13.5 15.9299 13.29 16.0199C13.08 16.1099 12.93 16.2599 12.83 16.4899C12.77 16.5899 12.74 16.6899 12.74 16.7999ZM13.47 14.2299C13.47 14.3699 13.52 14.5199 13.63 14.6799C13.74 14.8399 13.89 14.9499 14.08 15.0099C14.24 15.0399 14.33 15.0599 14.35 15.0599C14.44 15.0599 14.57 15.0299 14.72 14.9599C14.92 14.8699 15.05 14.6899 15.12 14.4399L16.02 11.0999C16.04 10.9299 16.05 10.8399 16.05 10.8399C16.05 10.6799 16 10.5299 15.9 10.3799C15.8 10.2299 15.65 10.1299 15.45 10.0699C15.36 10.0499 15.27 10.0399 15.19 10.0399C15.03 10.0399 14.87 10.0899 14.72 10.1899C14.57 10.2899 14.47 10.4399 14.41 10.6399L13.51 13.9999L13.47 14.2299Z"
        fill={color}
      />
    </Svg>
  );
};

HailIcon.defaultProps = {
  iconClass: "w-56 h-56",
  color: "white",
};

export default HailIcon;