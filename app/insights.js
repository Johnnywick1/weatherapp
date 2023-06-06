import React, { useEffect } from "react";
import { useSelector } from "react-redux";

import { View, Text, SafeAreaView } from "react-native";
import { Stack } from "expo-router";
import { getCurrentDate } from "../utils/date";
import RadialBackground from "../components/insights/RadialBackground";

import useFetch from "../hook/useFetch";
import InsightsWeather from "../components/insights/InsightsWeather";
import LocationButton from "../components/common/LocationButton";
import Loading from "../components/common/Loading";

import { buildEndpoint } from "../utils/endpoint";
import Error from "../components/common/Error";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { fontFamily: "Inter" };

const Insights = () => {
  const location = useSelector((state) => state.locationState);
  const preferences = useSelector((state) => state.preferencesState);

  const { data, isLoading, error, refetch } = useFetch(
    buildEndpoint(
      "forecast?&hourly=temperature_2m,weathercode,cloudcover,visibility,is_day,windspeed_10m,winddirection_10m,windgusts_10m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,uv_index_max&current_weather=true&timeformat=unixtime&forecast_days=1&timezone=America%2FNew_York",
      preferences,
      location.timezone
    ),
    location
  );

  useEffect(() => {
    refetch();
  }, [location]);

  return (
    <SafeAreaView className="flex flex-1">
      <RadialBackground />
      <Stack.Screen
        options={{
          title: "",
          headerShadowVisible: false,
          headerTransparent: true,
          headerLeft: () => (
            <View className="mt-2 flex h-14 justify-between">
              <Text className="text-white font-secondary text-xl">
                {getCurrentDate()}
              </Text>
            </View>
          ),
          headerRight: () => <LocationButton />,
        }}
      />
      {!isLoading && !error && (
        <View className="flex flex-1 mt-[135] w-full mb-[65]">
          <InsightsWeather data={data} />
        </View>
      )}
      {isLoading && <Loading />}
      {error && !isLoading && <Error refetch={refetch}/>}
    </SafeAreaView>
  );
};

export default Insights;
