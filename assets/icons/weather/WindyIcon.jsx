import Svg, { Path } from "react-native-svg";

const WindyIcon = ({ color, iconClass }) => {
  return (
    <Svg
      viewBox="0 0 24 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={iconClass}
    >
      <Path
        d="M0.619995 14.0101C0.619995 13.7601 0.699995 13.5501 0.869995 13.3801C1.04 13.2201 1.24 13.1401 1.47 13.1401H6.89C7.63 13.1401 8.25999 13.4001 8.77999 13.9301C9.29999 14.4601 9.56 15.0901 9.56 15.8301C9.56 16.5701 9.29999 17.2101 8.77999 17.7301C8.25999 18.2501 7.63 18.5101 6.89 18.5101C6.15 18.5101 5.50999 18.2501 4.99 17.7201C4.83 17.5601 4.76 17.3601 4.76 17.1201C4.76 16.8801 4.83999 16.6701 4.99 16.5201C5.14 16.3601 5.34 16.2801 5.59 16.2801C5.82 16.2801 6.02 16.3601 6.2 16.5201C6.4 16.7101 6.63 16.8101 6.89 16.8101C7.15 16.8101 7.37999 16.7101 7.56999 16.5201C7.75999 16.3301 7.85999 16.1001 7.85999 15.8201C7.85999 15.5601 7.75999 15.3301 7.56999 15.1401C7.37999 14.9501 7.15 14.8501 6.89 14.8501H1.47C1.24 14.8501 1.04 14.7701 0.869995 14.6001C0.699995 14.4301 0.619995 14.2501 0.619995 14.0101ZM0.619995 10.9701C0.619995 10.7301 0.699995 10.5201 0.869995 10.3501C1.04 10.1901 1.24 10.1101 1.47 10.1101H12.02C12.28 10.1101 12.51 10.0101 12.7 9.82012C12.89 9.63012 12.99 9.39012 12.99 9.13012C12.99 8.87012 12.89 8.63012 12.7 8.44012C12.51 8.25012 12.28 8.15012 12.02 8.15012C11.74 8.15012 11.52 8.24012 11.34 8.43012C11.16 8.58012 10.95 8.66012 10.7 8.66012C10.46 8.66012 10.26 8.58012 10.1 8.43012C9.95 8.28012 9.87 8.08012 9.87 7.83012C9.87 7.58012 9.94 7.38012 10.1 7.22012C10.61 6.71012 11.25 6.46012 12.02 6.46012C12.76 6.46012 13.4 6.72012 13.92 7.24012C14.44 7.76012 14.7 8.39012 14.7 9.12012C14.7 9.85012 14.44 10.4901 13.92 11.0101C13.4 11.5301 12.77 11.7901 12.02 11.7901H1.47C1.23 11.7901 1.03 11.7101 0.869995 11.5501C0.699995 11.4001 0.619995 11.2001 0.619995 10.9701ZM2.77 8.61012C2.77 8.69012 2.82 8.73012 2.93 8.73012H4.37C4.45 8.73012 4.52 8.68012 4.59 8.58012C4.81 8.04012 5.17 7.59012 5.64 7.23012C6.12 6.87012 6.64999 6.67012 7.22999 6.63012L7.76 6.55012C7.89 6.55012 7.96 6.49012 7.96 6.38012L8.02999 5.86012C8.13999 4.78012 8.58999 3.87012 9.39999 3.14012C10.21 2.41012 11.16 2.04012 12.26 2.04012C13.37 2.04012 14.33 2.40012 15.14 3.13012C15.95 3.86012 16.41 4.77012 16.53 5.86012L16.6 6.45012C16.6 6.56012 16.66 6.62012 16.77 6.62012H18.39C19.3 6.62012 20.07 6.94012 20.72 7.58012C21.37 8.22012 21.69 8.98012 21.69 9.88012C21.69 10.7701 21.37 11.5401 20.72 12.1801C20.07 12.8201 19.3 13.1401 18.39 13.1401H11.48C11.36 13.1401 11.29 13.2001 11.29 13.3101V14.7001C11.29 14.8101 11.35 14.8701 11.48 14.8701H18.39C19.3 14.8701 20.13 14.6501 20.9 14.2001C21.67 13.7601 22.27 13.1501 22.72 12.3901C23.17 11.6201 23.39 10.7901 23.39 9.89012C23.39 8.98012 23.17 8.15012 22.72 7.39012C22.27 6.63012 21.67 6.02012 20.9 5.58012C20.13 5.14012 19.3 4.91012 18.39 4.91012H18.08C17.77 3.58012 17.07 2.49012 15.98 1.64012C14.9 0.790118 13.65 0.370117 12.25 0.370117C10.84 0.370117 9.59 0.810117 8.5 1.69012C7.41 2.57012 6.72 3.69012 6.43 5.06012C5.57 5.26012 4.81 5.67012 4.15 6.29012C3.49 6.91012 3.03 7.65012 2.77 8.50012V8.54012C2.77 8.56012 2.77 8.58012 2.77 8.61012Z"
        fill={color}
      />
    </Svg>
  );
};

WindyIcon.defaultProps = {
  iconClass: "w-56 h-56",
  color: "white",
};

export default WindyIcon;