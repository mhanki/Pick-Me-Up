import { useContext } from "react";
import { SafeArea } from '../../components/SafeArea';
import { Text, Button } from 'react-native';
import { AuthenticationContext } from "../../services/authentication/authentication.context";

export default function Settings() {
  const { onLogout } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <Text>Settings</Text>
      <Button title="logout" onPress={() => onLogout()} />
    </SafeArea>
  );
};