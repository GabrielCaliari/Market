import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  border-width: 1px;
  border-color: #dfdfdf;
  border-radius: 2px;
  margin-bottom: 14px;
  padding: 8px;
`;

export const TextProductsName = styled.Text`
  color: black;
  font-weight: bold;
`;

export const TextProductsPrice = styled.Text`
  color: black;
  font-size: 16px;
`;

export const AmountContainer = styled.View`
  margin-top: 14px;
  margin-bottom: 14px;
  flex-direction: row;
  align-items: center;
`;

export const ButtonAdd = styled.TouchableOpacity`
  background-color: #168fff;
  padding: 6px;
  padding-left: 14px;
  padding-right: 14px;
  border-radius: 2px;
`;

export const AmountText = styled.Text`
  margin-left: 14px;
  margin-right: 14px;
  color: black;
`;
