import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Video } from 'expo-av';

interface ProgressBarProps {
  duration: number;
  currentTime: number;
  width?: number;
}

const VideoProgressBar = ({
  duration,
  currentTime,
  width = '100%',
}: ProgressBarProps) => {
  const [progress] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(progress, {
      toValue: (currentTime / duration) * 100,
      duration: 100,
      useNativeDriver: false,
    }).start();
  }, [currentTime]);

  console.log(progress, 'joshua');

  return (
    <View style={[styles.progressContainer, { width }]}>
      <Animated.View
        style={[
          styles.progressBar,
          {
            width: progress.interpolate({
              inputRange: [0, 100],
              outputRange: ['0%', '100%'],
            }),
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  progressContainer: {
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default VideoProgressBar;
