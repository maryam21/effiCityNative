import React, { Component } from "react";
import { StyleSheet, View } from 'react-native';
import { Container, Header, Content, Icon, Picker, Form } from "native-base";

export default class ItemPicker extends Component {
  constructor(props) {
    super(props);
    this.onValueChange = this.onValueChange.bind(this)
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
              selectedValue={this.props.value}
              onValueChange={this.props.onValueChange}
            >
              {this.props.items.map((item) => <Picker.Item label={item} value={item} key={item} />)}
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
  },
});