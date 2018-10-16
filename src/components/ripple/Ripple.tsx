import React from 'react';
import color from 'color';
import { TouchableNativeFeedback, View } from 'react-native';

interface IRippleProps {
  /**
   * Whether to render the ripple outside the view bounds.
   */
  borderless?: boolean;
  /**
   * Content to be displayed
   */
  children: React.ReactNode;
  /**
   * Action to be called on press.
   */
  onPress?: () => void;
  /**
   * Action to be called on press in.
   */
  onPressIn?: () => void;
  /**
   * Action to be called on press out.
   */
  onPressOut?: () => void;
  /**
   * Color of the ripple effect.
   */
  rippleColor?: string;
  /**
   * Style property to be applied to the content.
   */
  style?: any;
}

/**
 * Wrapper for views that should respond to touches.
 * Provides a "ink ripple" interaction effect for supported platforms (>= Android Lollipop).
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import { View } from 'react-native';
 * import Ripple  from '@legos/ripple';
 *
 * const MyComponent = () => (
 *   <Ripple
 *     onPress={() => console.log('Pressed')}
 *     rippleColor="red"
 *   >
 *     <Text>Press me</Text>
 *   </Ripple>
 * );
 *
 * export default MyComponent;
 * ```
 */
class Ripple extends React.Component<IRippleProps> {
  public static defaultProps = {
    borderless: false,
  };

  render() {
    const {
      borderless,
      children,
      onPress,
      onPressIn,
      onPressOut,
      rippleColor,
      style,
      ...rest
    } = this.props;

    const calculatedRippleColor =
      rippleColor ||
      color('#2d2d2d')
        .rgb()
        .string();

    return (
      <TouchableNativeFeedback
        onPress={onPress}
        onPressIn={onPressIn}
        onPressOut={onPressOut}
        background={TouchableNativeFeedback.Ripple(
          calculatedRippleColor,
          borderless,
        )}
        {...rest}
      >
        {React.Children.only(children) && <View style={style}>{children}</View>}
      </TouchableNativeFeedback>
    );
  }
}

export { IRippleProps };
export default Ripple;
