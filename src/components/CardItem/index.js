import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {
  AmountContainer,
  AmountText,
  ButtonAdd,
  Container,
  TextProductsName,
  TextProductsPrice,
} from './styled';

const CardItem = ({data, addAmount, removeAmount}) => {
  const [amount, setAmount] = useState(data?.amount);

  const handleIncrease = () => {
    addAmount();
    setAmount(item => item + 1);
  };

  function handleDecrease() {
    removeAmount();

    if (amount === 0) {
      setAmount(0);
      return;
    }

    setAmount(item => item - 1);
  }

  return (
    <Container>
      <View>
        <TextProductsName>{data.name}</TextProductsName>
        <TextProductsPrice>R$ {data.price}</TextProductsPrice>
      </View>

      <AmountContainer>
        <ButtonAdd onPress={handleDecrease}>
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
