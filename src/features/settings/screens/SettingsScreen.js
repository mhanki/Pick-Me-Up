import { useContext } from "react";
import { List, Avatar } from "react-native-paper";
import styled from "styled-components/native";
import { SafeArea } from '../../../components/SafeArea';
import { Text } from "../../../components/Text";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const SettingsItem = styled(List.Item)`
  padding: ${({theme}) => theme.space[3]};
`;

const AvatarContainer = styled.View`
  align-items: center;
`;

export function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthenticationContext);

  return (
    <SafeArea>
      <AvatarContainer>
        <Avatar.Icon size={150} icon="human" style={{ backgroundColor: "#2182BD", margin: 18 }} />
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color="black" icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </SafeArea>
  );
};