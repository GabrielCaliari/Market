import React, {useState, useContext} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import {
  CartContent,
  Container,
  Dot,
  DotText,
  TO,
  TextProducts,
  CartButton,
  List,
} from './styled';
import Icon from 'react-native-vector-icons/Feather';
import Products from '../../components/Products';
import {useNavigation} from '@react-navigation/native';
import {CartContext} from '../../contexts/CartContext';

const Home = () => {
  const coca = require('../../assets/coca.png');
  const chocolate = require('../../assets/chocolate.png');
  const queijo = require('../../assets/queijo.png');
  const batata = require('../../assets/batata.png');
  const guarana = require('../../assets/guarana.png');
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Coca-Cola',
      price: 5.5,
      image: coca,
    },
    {
      id: '2',
      name: 'Chocolate',
      price: 6.5,
      image: chocolate,
    },
    {
      id: '3',
      name: 'Queijo 500g',
      price: 15,
      image: queijo,
    },
    {
      id: '4',
      name: 'Batata-frita',
      price: 23.9,
      image: batata,
    },
    {
      id: '5',
      name: 'Guarana Lata',
      price: 5,
      image: guarana,
    },
  ]);
  const navigation = useNavigation();
  const {cart, addItemCart} = useContext(CartContext);

  function handleAddCart(item) {
    addItemCart(item);
  }

  return (
    <Container>
      <CartContent>
        <TextProducts>Lista de Produtos</TextProducts>
        <CartButton onPress={() => navigation.navigate('Cart')}>
          {cart.length >= 1 && (
            <Dot>
              <View>
                <DotText> {cart?.length}</DotText>
              </View>
            </Dot>
          )}
          <Icon name="shopping-cart" color="black" size={30} />
        </CartButton>
      </CartContent>

      <List
        data={products}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <Products data={item} addToCart={() => handleAddCart(item)} />
        )}
      />
    </Container>
  );
};

export default Home;
