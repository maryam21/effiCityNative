import React from 'react';
import { Container, Button, Content, Text } from 'native-base';

const ButtonElement = (props) => {
    return (
        <Container>
            <Content>
                <Button
                    onPress={props.handlePress}
                    small transparent>
                    <Text>{props.text}</Text>
                </Button>
            </Content>
        </Container>
    );
}

export default ButtonElement;