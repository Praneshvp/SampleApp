
 import React from 'react';
 import {
   SafeAreaView,
   ScrollView,
   StatusBar,
   StyleSheet,
   Text,
   useColorScheme,
   View,
 } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';
 
 const Main = () => {
   const isDarkMode = useColorScheme() === 'dark';
 
   const backgroundStyle = {
     backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
   };
 
   return (
     <SafeAreaView style={backgroundStyle}>
       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
       <Text style={{marginTop: 45}}>Main</Text>
     </SafeAreaView>
   );
 };
 
 const styles = StyleSheet.create({

 });
 
 export default Main;
 