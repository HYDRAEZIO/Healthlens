import React, {useState} from 'react';
import {View} from 'react-native';
import AgoraUIKit from 'agora-rn-uikit';
import { TouchableOpacity } from 'react-native-gesture-handler';

const VideoCall = () => {
  const [videoCall, setVideoCall] = useState(true);
  const rtcProps = {
    appId: '<0526186c22aa4f7bb728b28ceed2e8c5>',
    channel: 'test', // your agora channel
     // use null or skip if using app in testing mode
  };
  const callbacks = {
    EndCall: () => setVideoCall(false),
  };
  return videoCall ? (
    <View >
      <AgoraUIKit connectionData={rtcProps} rtcCallbacks={callbacks} />
    </View>
  ) : (
    <TouchableOpacity onPress={() => setVideoCall(true)}>Start Call</TouchableOpacity>
  );
};

export default VideoCall;