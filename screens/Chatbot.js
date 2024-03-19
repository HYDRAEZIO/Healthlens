import React, { Component } from 'react';
import { View, StyleSheet, Platform, KeyboardAvoidingView } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import { Dialogflow_V2 } from 'react-native-dialogflow';

const dialogflowConfig = {
  type: Dialogflow_V2.enums.LanguageCode.EN,
  projectId: 'your-project-id',
  privateKey: 'your-private-key',
  clientEmail: 'your-client-email',
};

class ChatBot extends Component {
  state = {
    messages: [],
  };

  componentDidMount() {
    Dialogflow_V2.setConfiguration(dialogflowConfig);
  }

  onSend(messages = []) {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));

    let messageText = messages[0].text;

    Dialogflow_V2.requestQuery(
      messageText,
      (result) => this.handleGoogleResponse(result),
      (error) => console.log(error)
    );
  }

  handleGoogleResponse(result) {
    let text = result.queryResult.fulfillmentMessages[0].text.text[0];
    this.sendBotResponse(text);
  }

  sendBotResponse(text) {
    let botResponse = {
      _id: this.state.messages.length + 1,
      text,
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'Health Bot',
        avatar: '../assets/vector3.png',
      },
    };

    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, botResponse),
    }));
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <GiftedChat
          messages={this.state.messages}
          onSend={(messages) => this.onSend(messages)}
          user={{
            _id: 1,
          }}
        />
        {Platform.OS === 'android' && <KeyboardAvoidingView behavior="padding" />}
      </View>
    );
  }
}

export default ChatBot;