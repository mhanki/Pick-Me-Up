import styled from "styled-components/native";
import { Button, TextInput} from "react-native-paper";
import { colors } from "../../../infrastructure/theme/colors";
import { space } from "../../../infrastructure/theme/spacing";
import { Text } from "../../../components/Text";

export const AccountBackground = styled.ImageBackground.attrs({
  source: require("../../../../assets/to-go.jpg"),
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
  .attrs({ buttonColor: colors.brand.secondary })`
  padding: ${({theme}) => theme.space[2]};
  margin: ${({theme}) => theme.space[3]};
`;

export const AccountButton = styled(Button)
  .attrs({ buttonColor: colors.brand.primary })`
  padding: ${({theme}) => theme.space[2]};
  margin: ${({theme}) => theme.space[3]};
`;

export const AuthInput = styled(TextInput).attrs({
  theme: {
    colors: {primary: colors.brand.secondary}
  }
})`
  width: 300px;
  margin-bottom: ${space[3]};
  background-color: ${colors.brand.muted};
  border-bottom-color: ${colors.brand.secondary};
`;

export const ErrorContainer = styled.View`
  max-width: 300px;
  align-items: center;
  align-self: center;
  margin-top: ${({theme}) => theme.space[2]};
  margin-bottom: ${({theme}) => theme.space[2]};
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 30%;
  position: absolute;
  top: 30px;
  padding: ${({theme}) => theme.space[2]};
`;