import React from 'react';
import {Button, ButtonText, Container, TextProducts} from './styled';
import {View} from 'react-native';

const Products = ({data, addToCart}) => {
  return (
    <Container>
      <View>
        <TextProducts>{data.name}</TextProducts>
        <TextProducts>R$ {data.price}</TextProducts>
      </View>

      <Button onPress={addToCart}>
        <ButtonText>+</ButtonText>
      </Button>
    </Container>
  );
};

export default Products;
