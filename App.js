
import React, { useState, useEffect } from 'react';
import { TouchableOpacity, StyleSheet, Text, SafeAreaView } from 'react-native';

const CustomButton = ({ title, width, height, borderRadius, borderWidth, borderColor }) => {
  const [isPressed, setIsPressed] = useState(false);

  const handlePress = () => {
    setIsPressed(true);
  };

  useEffect(() => {
    let timeout;
    if (isPressed) {
      timeout = setTimeout(() => {
        setIsPressed(false);
      }, 2000); // 2000 milisaniye (2 saniye) sonra küçült
    }

    return () => {
      clearTimeout(timeout);
    };
  }, [isPressed]);

  return (
 


   
    <TouchableOpacity
      style={[
        styles.button,
        isPressed && styles.pressedButton,
        isPressed && { backgroundColor: '#FFA500' },
        width && { width },
        height && { height },
        borderRadius && { borderRadius },
        borderWidth && {borderWidth},
        borderColor && {borderColor},//buradaki stiller kulanıcının tercihine göre değişebilir.
      ]}
      onPress={handlePress}
    >
      <Text style={[styles.buttonText, isPressed && styles.pressedText]}>
      Custom Button {title}
      </Text>
    </TouchableOpacity>

  );
};

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: 'transparent',
    width:140,
    height:40,
  },
  buttonText: {
    fontSize: 16,
    color:'blue',
  },
  pressedButton: {
    transform: [{ scale: 1.2 }],
  },
  pressedText: {
    color: 'white',
  },
});

export default CustomButton;
