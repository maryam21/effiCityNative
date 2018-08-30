import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class AreaPicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: undefined
    };
  }

  onValueChange(value) {
    this.setState({
      selected: value
    });
  }

  render() {
    return (
      <View style={ styles.container }>
      <Container>
        <Content>
          <Form>
            <Picker
              mode="dropdown"
              iosIcon={<Icon name="ios-arrow-down-outline" />}
              placeholder="Select your desired Area"
              placeholderStyle={{ color: "#bfc6ea" }}
              placeholderIconColor="#007aff"
              style={{ width: undefined }}
              selectedValue={this.state.selected}
              onValueChange={this.onValueChange.bind(this)}
            >
              <Picker.Item label="AC Area" value="key0" />
              <Picker.Item label="LO Area" value="key1" />
              <Picker.Item label="Mon Area" value="key2" />
            </Picker>
          </Form>
        </Content>
      </Container>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 5
  },
});