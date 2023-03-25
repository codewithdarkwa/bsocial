import Discover from "./views/discover";
import Create from "./views/create";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="discover" component={Discover} options={{headerShown:false}}/>
        <Stack.Screen name="create" component={Create} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}


