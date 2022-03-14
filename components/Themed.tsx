/**
 * Learn more about Light and Dark modes:
 * https://docs.expo.io/guides/color-schemes/
 */

import { 
  Text as DefaultText, 
  View as DefaultView, 
  TextInput as DefaultTextInput,
  Button as DefaultButton,
  KeyboardAvoidingView as DefaultKeyboardAvoidingView,
  TouchableOpacity as DefaultTouchableOpacity
} from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark
) {
  const theme = useColorScheme();
  const colorFromProps = props[theme];

  if (colorFromProps) {
    return colorFromProps;
  } else {
    return Colors[theme][colorName];
  }
}

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

export type TextProps = ThemeProps & DefaultText['props'];
export type ViewProps = ThemeProps & DefaultView['props'];
export type ButtonProps = DefaultButton['props']
export type TextInputProps = DefaultTextInput['props']
export type KeyboardAvoidingViewProps = DefaultKeyboardAvoidingView['props']
export type TouchableOpacityProps = DefaultTouchableOpacity['props']

export function Text(props: TextProps) {
  // const { style, lightColor, darkColor, ...otherProps } = props;
  // const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  // return <DefaultText style={[{ color }, style]} {...otherProps} />;
  const { style, ...otherProps } = props
  return <DefaultText style={style} {...otherProps} />;
}

export function View(props: ViewProps) {
  // const { style, lightColor, darkColor, ...otherProps } = props;
  // const backgroundColor = useThemeColor({ light: lightColor, dark: darkColor }, 'background');

  // return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
  const { style, ...otherProps } = props
  return <DefaultView style={style} {...otherProps} />;
}

export function TextInput(props:TextInputProps) {
  return <DefaultTextInput 
            placeholder={props.placeholder} 
            secureTextEntry={props.secureTextEntry} 
            style={props.style} 
            onChangeText={props.onChangeText}
          />
}

export function Button(props: ButtonProps) {
  return <DefaultButton title={props.title} onPress={props.onPress} />
}

export function KeyboardAvoidingView(props:KeyboardAvoidingViewProps) {
  const { style, ...otherProps } = props
  return <DefaultKeyboardAvoidingView style={style} {...otherProps} />
}

export function TouchableOpacity(props:TouchableOpacityProps) {
  const { style, ...otherProps } = props
  return <DefaultTouchableOpacity style={style} {...otherProps} />
}