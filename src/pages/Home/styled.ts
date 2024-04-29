import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1px;
  background-color: white;
  padding-left: 25px;
  padding-right: 25px;
`;

export const CartContent = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 24px;
  margin-bottom: 24px;
`;

export const CartButton = styled.TouchableOpacity``;

export const TextProducts = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: black;
`;

export const Dot = styled.View`
  align-items: center;
  justify-content: center;
  background-color: red;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  position: absolute;
  z-index: 99;
  bottom: -2px;
  left: -5px;
`;

export const DotText = styled.Text`
  font-size: 14px;
  color: black;
  left: -1px;
`;

export const List = styled.FlatList``;
