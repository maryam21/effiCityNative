import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Content, List, ListItem, Thumbnail, Text, Left, Body, Right, Button } from 'native-base';

const InboxElement = (props) => {
  return (
    <Container style={styles.container} >
      <Content>
        <List>
          <ListItem thumbnail>
            <Left>
              <Thumbnail square source={{ uri: 'Image URL' }} />
            </Left>
            <Body>
              <Text>{props.username}</Text>
              <Text note numberOfLines={1}>New message...</Text>
            </Body>
            <Right>
              <Button transparent>
                <Text>View</Text>
              </Button>
            </Right>
          </ListItem>
        </List>
      </Content>
    </Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: 80,
  },
})

export default InboxElement;
