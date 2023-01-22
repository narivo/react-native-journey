import {
  View,
  TouchableOpacity,
  GestureResponderEvent,
  ImageBackground,
} from "react-native";
import React, { ReactNode, MouseEvent } from "react";

interface ProfileBarProps {
  children?: ReactNode;
  onPress?:
    | ((e: GestureResponderEvent | MouseEvent<HTMLAnchorElement>) => void)
    | undefined;
}

const ProfileBarButton = ({ children, onPress }: ProfileBarProps) => {
  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <View className="w-20 h-20 rounded-full -top-4">
        <ImageBackground
          className="w-32 h-32 absolute -top-6 -right-6 rounded-full"
          resizeMode="cover"
          source={require("../../assets/icons/profile_bg.png")}
        >
          {children}
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
};

export default ProfileBarButton;
