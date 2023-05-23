import { View, Text } from "react-native";
import DataItem from "./DataItem";

const DataTable = ({ children }) => {
  return (
    <View className="bg-white rounded-2xl h-[85] w-full mb-6 px-6 flex flex-row items-center justify-between">
      {children}
    </View>
  );
};

export default DataTable;
