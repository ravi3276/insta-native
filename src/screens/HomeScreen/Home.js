import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Stories from '../../components/storyComponent/Stories';
import PostComponent from '../../components/postComponent/PostComponent';
import { SafeAreaView } from 'react-native-safe-area-context';

const Home = () => {
  return (
    <SafeAreaView>
      {/* <Stories /> */}
      <PostComponent />
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
