import styled from 'styled-components/native';
import coca from '../../assets/coca.png';

export const Container = styled.View`
  border-width: 1px;
  border-color: gray;
  border-radius: 2px;
  margin-bottom: 14px;
  padding: 8px;
  padding-bottom: 14px;
  padding-top: 14px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextProducts = styled.Text`
  color: black;
  font-weight: bold;
`;

export const Button = styled.TouchableOpacity``;

export const ButtonText = styled.Text`
  padding-right: 14px;
  padding-left: 14px;
  background-color: #168fff;
  padding-top: 6px;
  padding-bottom: 6px;
  border-radius: 2px;
`;

export const ImagemProduct = styled.ImageBackground`
  width: 50px;
  height: 50px;
`;
