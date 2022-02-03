import { StatusBar } from 'expo-status-bar';
import { Image, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/HomeScreen/Home';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Discovery from './src/screens/DiscoveryScreen/Discovery';
import Post from './src/screens/PostScreen/Post';
import Notification from './src/screens/NotificationScreen/Notification';
import Profile from './src/screens/ProfileScreen/Profile';
import { Icon } from 'react-native-elements';
import { createStackNavigator } from '@react-navigation/stack';
import logo from './src/assets/Images/logo.png';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} 
      options={{
        title:"Instagram",
        // headerShown: false,
        headerLeft:()=>(
          <Icon name="camera" type="feather" size={25} />
        ),
        headerTitle:()=>(
          <Image source={logo} 
          style={{
            resizeMode:"contain",
            width: 130,
            height:50,
          }}
          />
        ),
        headerRight:()=>(
          <Icon name="paper-plane-outline" type="ionicon" size={25} />
        )
      }}
      />
    </HomeStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" barStyle="dark-content" />
      <Tab.Navigator 
      screenOptions={
        ({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {

          if (route.name === 'Home') {
            return <Icon name="home" type="feather" size={size} color={color}/>;
          } 
          if (route.name === 'Discovery') {
            return <Icon name="search" type="feather" size={size} color={color}/>;
          }
          if (route.name === 'Post') {
            return <Icon name="plus-square" type="feather" size={size} color={color}/>;
          }
          if (route.name === 'Notification') {
            return <Icon name="heart" type="feather" size={size} color={color}/>;
          }
          if (route.name === 'Profile') {
            return <Icon name="person-outline" type="ionicons" size={size} color={color}/>;
          }
        },    
      })
    }
    tabBarOptions={{
      showLabel: false,
    }}
      >
        <Tab.Screen options={{headerShown: false}}  name="Home" component={HomeStackScreen} />
        <Tab.Screen options={{headerShown: false}} name="Discovery" component={Discovery} />
        <Tab.Screen options={{headerShown: false}} name="Post" component={Post} />
        <Tab.Screen options={{headerShown: false}} name="Notification" component={Notification} />
        <Tab.Screen options={{headerShown: false}} name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  // container: {
    // flex: 1,
  // },
 
});
