import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
// import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { Image } from 'expo-image';
import { TabData } from '@/constants/data/tab';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors.Primary,
        headerShown: false,
        tabBarButton: HapticTab,
        // tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({
          ios: {
            // Use a transparent background on iOS to show the blur effect
            position: 'absolute',
            backgroundColor: Colors.black,
          },
          default: { backgroundColor: Colors.black },
        }),
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '700',
        },
      }}
    >
      {TabData?.map((item, key) => (
        <Tabs.Screen
          key={key}
          name={item?.route}
          options={{
            title: item?.name,
            tabBarIcon: ({ color, focused }) => (
              <Image
                source={focused ? item?.icon_colored : item?.icon}
                style={{ width: 26, height: 26 }}
              />
            ),
          }}
        />
      ))}
    </Tabs>
  );
}
