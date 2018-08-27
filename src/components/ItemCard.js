import React, { Component } from 'react';
import { Image } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon } from 'native-base';
​
export default class ItemCard extends Component {
    render() {
        return (
            <Container>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Thumbnail source={require('')} />
                            <Text>listing 1</Text>
                            <Text note>Aug 27, 2018</Text>
                        </CardItem>

                        <CardItem cardBody> 
                            <Image style={{ resizeMode: 'cover' }} source={require('')} /> 
                            <Text>
                                //Your text here
                            </Text>
                            <Button transparent textStyle={{color: '#87838B'}}>
                                <Text>Details</Text>
                            </Button>
                        </CardItem>
                   </Card>
                </Content>
            </Container>
        );
    }
}