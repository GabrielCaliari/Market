import React from 'react';
import {
  Button,
  ButtonText,
  Container,
  ImagemProduct,
  TextProducts,
} from './styled';
import {View} from 'react-native';
import Coca from '../../assets/coca.png';
import Chocolate from '../../assets/chocolate.png';

const Products = ({data, addToCart}) => {
  return (
    <Container>
      <View>
        <ImagemProduct source={data.image} resizeMode="contain" />
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
