import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {
  AmountContainer,
  AmountText,
  ButtonAdd,
  Container,
  TextProducts,
  TextProductsName,
  TextProductsPrice,
} from './styled';

const CardItem = ({data, addAmount, removeItemCart}) => {
  const [amount, setAmount] = useState(data?.amount);

  const handleIncrease = () => {
    addAmount();
    setAmount(item => item + 1);
  };

  const removeItem = () => {
    removeItemCart();
    setAmount(item => item - 1);
  };

  return (
    <Container>
      <View>
        <TextProductsName>{data.name}</TextProductsName>
        <TextProductsPrice>R$ {data.price}</TextProductsPrice>
      </View>

      <AmountContainer>
        <ButtonAdd onPress={removeItem}>
          <Text>-</Text>
        </ButtonAdd>

        <AmountText>{amount}</AmountText>

        <ButtonAdd onPress={handleIncrease}>
          <Text>+</Text>
        </ButtonAdd>
      </AmountContainer>
    </Container>
  );
};

export default CardItem;
