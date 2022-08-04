import { Text, View } from "react-native";
import tw from "twrnc";
import Icon from "react-native-vector-icons/MaterialIcons";

export default function App() {
  return (
    <View style={tw`bg-violet-800 flex-col grow justify-center items-center `}>
      <Text style={tw`text-5xl font-bold text-white text-center`}>
        Welcome to Home!
      </Text>
      <Icon name="home" style={tw`text-white text-6xl font-bold`} />
    </View>
  );
}
