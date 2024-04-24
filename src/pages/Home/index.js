import React, {useState} from 'react';
import {Text, View, SafeAreaView, FlatList} from 'react-native';
import {
  CartContent,
  Container,
  Dot,
  DotText,
  TO,
  TextProducts,
  CartButton,
} from './styled';
import Icon from 'react-native-vector-icons/Feather';

const Home = () => {
  const [products, setProducts] = useState([
    {
      id: '1',
      name: 'Coca-Cola',
      price: 19.9,
    },
    {
      id: '2',
      name: 'Chocolate',
      price: 6.5,
    },
    {
      id: '3',
      name: 'Queijo 500g',
      price: 15,
    },
    {
      id: '4',
      name: 'Batata-frita',
      price: 23.9,
    },
    {
      id: '5',
      name: 'Guarana Lata',
      price: 6,
    },
  ]);

  return (
    <Container>
      <CartContent>
        <TextProducts>Lista de Produtos</TextProducts>

        <CartButton>
          <Dot>
            <View>
              <DotText>5</DotText>
            </View>
          </Dot>
          <Icon name="shopping-cart" color="black" size={30} />
        </CartButton>
      </CartContent>
    </Container>
  );
};

export default Home;
