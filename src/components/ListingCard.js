import React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Left, Body } from 'native-base';

ListingCard = (props) => {
    return (
      <Container style={ styles.container } >
        <Content>
          <Card style={{flex: 0}}>
            <CardItem>
              <Left>
                <Thumbnail source={{uri: 'Image URL'}} />
                <Body>
                  <Text>{props.title}</Text>
                  <Text note>{props.consultantName}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem>
              <Body>
                <Image source={{uri: 'Image URL'}} style={{height: 200, width: 200, flex: 1}}/>
                <Text>
                  {props.description}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent 
                textStyle={{color: '#87838B'}}
                onPress={() => props.navigation.navigate('Details', { title: props.title, description: props.description, consultantName: props.consultantName })}
                >
                  <Text>Details</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'stretch',
    width: 400,
    height: 480,
    marginBottom: 5,
    marginTop: 5
  },
})

export default ListingCard;