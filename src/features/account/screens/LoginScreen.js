import { useState, useContext } from "react";
import { ActivityIndicator, MD2Colors } from "react-native-paper";
import {
  AccountBackground,
  AccountCover,
  AccountContainer,
  Title,
  AuthButton,
  AuthInput,
  AccountButton,
  ErrorContainer
} from "../components/Account.styles";
import { Text } from "../../../components/Text";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

export const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { onLogin, error, isLoading } = useContext(AuthenticationContext);

  return (
    <AccountBackground>
      <AccountCover />
      <Title>Pick Me Up</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(u) => setEmail(u)}
        />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          secure
          onChangeText={(p) => setPassword(p)}
        />
        {error && (
          <ErrorContainer size="large">
            <Text variant="error">{error}</Text>
          </ErrorContainer>
        )}
        {!isLoading ? (
          <AuthButton
            icon="lock-open-outline"
            mode="contained"
            onPress={() => onLogin(email, password)}
          >
            Login
          </AuthButton>
        ) : (
          <ActivityIndicator animating={true} color={MD2Colors.blue300} />
        )}
      </AccountContainer>
      <AccountButton mode="contained" onPress={() => navigation.goBack()}>
        Back
      </AccountButton>
    </AccountBackground>
  );
};