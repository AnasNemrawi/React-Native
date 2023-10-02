import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  Button,
  View,
  Image,
  Dimensions,
  SafeAreaView,
} from 'react-native';
import { Camera } from 'expo-camera';

const Second = (props) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [isCameraOpen, setCameraOpen] = useState(false);
  const [cameraType, setCameraType] = useState('back');

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const openCamera = () => {
    setCameraOpen(true);
  };

  const closeCamera = () => {
    setCameraOpen(false);
  };

  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }

  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <SafeAreaView style={styles.container}>
      {!isCameraOpen ? (
        <View>
          <Text style={styles.paragraph}>
            Hasan's Application Is Natively Running
          </Text>
          <Button title={'Open Camera'} onPress={openCamera} />
        </View>
      ) : (
        <>
          <Camera
            style={styles.camera}
            type={Camera.Constants.Type[cameraType]}></Camera>
          <Button title={'Close Camera'} onPress={closeCamera} />
          {cameraType === 'back' ? (
            <Button
              title={'front Camera'}
              onPress={() => setCameraType('front')}
            />
          ) : (
            <Button
              title={'Back Camera'}
              onPress={() => setCameraType('back')}
            />
          )}
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
    height: `80%`,
  },
});

export default Second;
