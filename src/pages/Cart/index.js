import React, {useContext} from 'react';
import {FlatList, Text} from 'react-native';
import {Container, TextTotal} from './styled';
import {CartContext} from '../../contexts/CartContext';
import CardItem from '../../components/CardItem';

const Cart = () => {
  const {cart, addItemCart, removeItemCart, total} = useContext(CartContext);

  return (
    <Container>
      <FlatList
        data={cart}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => String(item.id)}
        ListEmptyComponent={() => <Text>Nenhum item no carrinho...</Text>}
        renderItem={({item}) => (
          <CardItem
            data={item}
            addAmount={() => addItemCart(item)}
            removeAmount={() => removeItemCart(item)}
          />
        )}
        ListFooterComponent={() => <TextTotal>Total: R$ {total}</TextTotal>}
      />
    </Container>
  );
};

export default Cart;
