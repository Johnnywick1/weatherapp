import { View, Text, ScrollView } from "react-native";
import { getCurrentHour, parseUnixTime } from "../../utils/date";
import RaindropIcon from "../../assets/icons/weather/RaindropIcon";
import ListItemContainer from "./ListItemContainer";
import ListContainer from "./ListContainer";

const PrecipitationItem = ({ data, index, timezone }) => {
  const hour = getCurrentHour(data.timezone);
  const last = index === hour + 23;
  const probability = data.hourly.precipitation_probability[index];
  if (data) {
    return (
      <ListItemContainer last={last}>
        <View className="pl-0.5">
          <RaindropIcon
            chance={probability}
            color={probability > 0 ? "#00A7E1" : "rgb(203 213 225)"}
            iconClass="w-6 h-7"
          />
        </View>
        <View className="flex items-end pr-1">
          <Text className="font-bold text-slate-800">
            {data.hourly.precipitation_probability[index].toFixed(0)}%
          </Text>
          <Text className="font-base text-sky-500 text-xs">
            {data.hourly.precipitation[index] > 0
              ? `${data.hourly.precipitation[index]}"`
              : "—"}
          </Text>
          <Text className="text-slate-400 text-xs">
            {parseUnixTime(data.hourly.time[index], timezone)}
          </Text>
        </View>
      </ListItemContainer>
    );
  }
};

const Precipitation = ({ data, timezone }) => {
  const hour = getCurrentHour(timezone);

  if (data) {
    const timeArray = data.hourly.time.slice(hour, 24 + hour);
    return (
      <ListContainer>
        {timeArray.map((_, index) => (
          <PrecipitationItem
            data={data}
            index={index + hour}
            key={`hourly-${index}`}
            timezone={timezone}
          />
        ))}
      </ListContainer>
    );
  }
};

export default Precipitation;
