import { useRef, useEffect, useContext } from 'react';
import { View, TouchableOpacity } from 'react-native';
import { Button } from 'react-native-paper';
import { Text } from '../../../components/Text';
import { Camera, CameraType } from 'expo-camera';
import styled from 'styled-components/native';
import { colors } from '../../../infrastructure/theme/colors';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthenticationContext } from "../../../services/authentication/authentication.context";

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

const GrantButton = styled(Button)
  .attrs({ buttonColor: colors.brand.primary })`
  padding: ${({theme}) => theme.space[2]};
  margin: ${({theme}) => theme.space[3]};
`;

const InnerSnap = styled.View`
  z-index: 999;
`;

const RecordButton = styled.TouchableOpacity`
  background-color: red;
  width: 60px;
  height: 60px;
  border-radius: 50px;
  border-color: white;
  border-width: 5px;
  margin: 30px;
`;

export const CameraScreen = ({ navigation }) => {
  const cameraRef = useRef();
  const [permission, requestPermission] = Camera.useCameraPermissions();
  const { user } = useContext(AuthenticationContext);

  const snap = async () => {
    try {
      if (cameraRef) {
        const photo = await cameraRef.current.takePictureAsync();
        AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
        navigation.goBack();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  if (!permission) {
    return <View />;
  }

  if (!permission.granted) {
    return (
      <View>
        <Text style={{ textAlign: 'center' }}>We need your permission to show the camera</Text>
        <GrantButton mode='contained' onPress={requestPermission}>Grant Permission</GrantButton>
      </View>
    );
  }

  return(
    <ProfileCamera 
      type={CameraType.front}
      ref={(camera) => cameraRef.current = camera}
    >
      <RecordButton 
        onPress={snap}>
        <InnerSnap />
      </RecordButton>
    </ProfileCamera>
  )
}