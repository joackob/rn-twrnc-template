import { Text, View } from "react-native";
import tw from "twrnc";

export default function App() {
  return (
    <View style={tw`bg-violet-800 flex-col grow justify-center items-center `}>
      <Text style={tw`font-sans text-6xl font-bold text-white text-center`}>
        Welcome to Home!!!!
      </Text>
    </View>
  );
}
