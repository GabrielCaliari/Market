import React, {useContext} from 'react';
import {FlatList, Text, View} from 'react-native';
import {Container} from './styled';
import {CartContext} from '../../contexts/CartContext';
import CardItem from '../../components/CardItem';

const Cart = () => {
  const {cart, addItemCart, removeItemCart} = useContext(CartContext);

  return (
    <Container>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <CardItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeItemCart={() => removeItemCart(item)}
          />
        )}
      />
    </Container>
  );
};

export default Cart;
