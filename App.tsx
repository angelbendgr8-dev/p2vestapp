/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView, 
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import { Box, GluestackUIProvider } from '@gluestack-ui/themed';
import { config } from "./config/gluestack-ui.config"
import { StackNav } from './src/navigation/StackNav';


function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        backgroundColor={'#E5F4F3'}
        barStyle={'dark-content'}
      />
      <GluestackUIProvider config={config}>
        <NavigationContainer>
          <Box
            style={{
              backgroundColor: isDarkMode ? Colors.black : Colors.white,
            }}
            height="100%"
          >

            <StackNav />
          </Box>
        </NavigationContainer>
      </GluestackUIProvider>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
