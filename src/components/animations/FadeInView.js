import { useRef, useEffect } from "react";
import { Animated } from "react-native";

export const FadeInView = ({ duration = 1500, ...props }) => {
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: duration,
      useNativeDriver: true,
    }).start();
  }, [animation, duration]);

  return (
    <Animated.View
      style={{
        ...props.style,
        opacity: animation,
      }}
    >
      {props.children}
    </Animated.View>
  );
};