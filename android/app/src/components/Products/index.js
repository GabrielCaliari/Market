import React from 'react';
import {Button, ButtonText, Container, TextProducts} from './styled';
import {View} from 'react-native';

const Products = ({data}) => {
  return (
    <Container>
      <View>
        <TextProducts>{data.name}</TextProducts>
        <TextProducts>{data.price}</TextProducts>
      </View>

      <Button>
        <ButtonText>+</ButtonText>
      </Button>
    </Container>
  );
};

export default Products;
