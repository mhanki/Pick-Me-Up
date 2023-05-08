import { useContext, useCallback, useState } from "react";
import { TouchableOpacity } from 'react-native';
import { List, Avatar } from "react-native-paper";
import { useFocusEffect } from "@react-navigation/native";
import styled from "styled-components/native";
import { SafeArea } from '../../../components/SafeArea';
import { Text } from "../../../components/Text";
import { colors } from "../../../infrastructure/theme/colors";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import AsyncStorage from '@react-native-async-storage/async-storage';

const TransparentSafeArea = styled(SafeArea)`
  background-color: transparent;
`;

const SettingsItem = styled(List.Item)`
  padding: ${({theme}) => theme.space[3]};
  background-color: rgba(255, 255, 255, 0.5);
  margin-bottom: ${({theme}) => theme.space[1]};
`;

const AvatarContainer = styled.View`
  align-items: center;
  margin-bottom: ${({theme}) => theme.space[3]}
`;

export function SettingsScreen({ navigation }) {
  const { onLogout, user } = useContext(AuthenticationContext);
  const [photo, setPhoto] = useState(null);

  const getProfilePicture = async (user) => {
    try {
      const photoUri = await AsyncStorage.getItem(`${user.uid}-photo`);
      setPhoto(photoUri);
    } catch (error) {
        console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      getProfilePicture(user);
    }, [user])
  );

  return (
    <TransparentSafeArea>
      <AvatarContainer>
        <TouchableOpacity onPress={() => navigation.navigate("Camera")}>
          { photo
            ? <Avatar.Image size={150} source={{ uri: photo }} style={{ margin: 18 }} />
            : <Avatar.Icon size={150} icon="human" style={{ backgroundColor: colors.brand.primary, margin: 18 }} />
          }
        </TouchableOpacity>
        <Text variant="label">{user.email}</Text>
      </AvatarContainer>

      <List.Section>
        <SettingsItem
          title="Favourites"
          description="View your favourites"
          left={(props) => <List.Icon {...props} color={colors.brand.red} icon="heart" />}
          onPress={() => navigation.navigate("Favourites")}
        />
        <SettingsItem
          title="Logout"
          left={(props) => <List.Icon {...props} color="black" icon="door" />}
          onPress={onLogout}
        />
      </List.Section>
    </TransparentSafeArea>
  );
};