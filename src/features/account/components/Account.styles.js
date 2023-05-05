import styled from "styled-components/native";
import { Button, TextInput} from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { Text } from "../../../components/Text";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/home_bg.jpg"),
})`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.3);
`;

export const AccountContainer = styled.View`
  background-color: rgba(255, 255, 255, 0.7);
  padding: ${({theme}) => theme.space[4]};
  margin-top: ${({theme}) => theme.space[2]};
`;

export const Title = styled(Text)`
  font-size: 30px;
`;

export const AuthButton = styled(Button)
  .attrs({ buttonColor: colors.brand.primary })`
  padding: ${({theme}) => theme.space[2]};
  margin: ${({theme}) => theme.space[3]};
`;

export const AuthInput = styled(TextInput)`
  width: 300px;
  margin-bottom: ${({theme}) => theme.space[3]};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${({theme}) => theme.space[2]};
  margin-bottom: ${({theme}) => theme.space[2]};
`;