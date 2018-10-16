import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

interface IButtonProps {
  /**
   * Background Color works only for contained buttons.
   */
  backgroundColor?: string;
  /**
   * Text to be displayed on the Button.
   */
  children: React.ReactText;
  /**
   * Compact look is for inline text buttons.
   */
  compact?: boolean;
  /**
   * Disable button doesn't let the user do any interaction.
   */
  disabled?: boolean;
  /**
   * Icon on the left side of the button text.
   */
  iconLeft?: string;
  /**
   * Icon on the right side of the button text.
   */
  iconRight?: string;
  /**
   * Display a activity indicator to show loading state.
   */
  loading?: boolean;
  /**
   * User can change the mode to adjust the styling to give it desired emphasis.
   * - `transparent` - flat button without background or outline (low emphasis)
   * - `outlined` - button with an outline (medium emphasis)
   * - `contained` - button with a background color and elevation shadow (high emphasis)
   */
  mode?: 'transparent' | 'contained' | 'outlined';
  /**
   * Action to be called on button press.
   */
  onPress: () => void;
  /**
   * Any custom style to be passed to button.
   */
  style?: any;
  /**
   * Text color to change color of the text.
   * - In case of transparent or contained button, this prop changes the text color.
   * - In case of outlined button, this prop changes the text color and border color.
   */
  textColor?: string;
  uppercase?: boolean;
}

/**
 * Button is a component that the user can press to trigger an action.
 *
 * ## Usage
 * ```js
 * import * as React from 'react';
 * import Button from '@legos/button';
 *
 * const MyComponent = () => (
 *   <Button iconLeft="add-circle-outline" mode="contained" onPress={() => console.log('Pressed')} loading>
 *     Press me
 *   </Button>
 * );
 *
 * export default MyComponent;
 * ```
 */
class Button extends React.PureComponent<IButtonProps> {
  public static defaultProps = {
    compact: true,
    disabled: false,
    loading: false,
    mode: 'transparent',
    uppercase: true,
  };

  render() {
    const {
      backgroundColor,
      children,
      compact,
      disabled,
      iconLeft,
      iconRight,
      loading,
      mode,
      onPress,
      style,
      textColor,
      uppercase,
      ...rest
    } = this.props;

    let background: string, border: string, text: string;
    const borderRadius = 4;
    const elevation = mode === 'contained' && !disabled ? 2 : 0;

    switch (true) {
      case mode === 'transparent': {
        background = 'transparent';
        border = 'transparent';
        text = textColor || '#4d4d4d';
        break;
      }
      case mode === 'contained': {
        background = backgroundColor || '#0070dd';
        border = backgroundColor || '#0070dd';
        text = textColor || '#fff';
        break;
      }
      case mode === 'outlined': {
        background = 'transparent';
        text = textColor || '#4d4d4d';
        border = textColor;
        break;
      }
      default: {
        background = 'transparent';
        border = 'transparent';
        text = textColor || '#4d4d4d';
      }
    }

    // Style for disabled buttons
    if (disabled) {
      if (mode === 'transparent') {
        background = 'transparent';
        border = 'transparent';
        text = '#cacaca';
      } else if (mode === 'outlined') {
        background = 'transparent';
        border = '#cacaca';
        text = '#cacaca';
      } else if (mode === 'contained') {
        background = '#fafafa';
        border = '#fafafa';
        text = '#cacaca';
      }
    }

    const buttonStyle = {
      backgroundColor: background,
      borderColor: border,
      borderWidth: 1,
      borderRadius,
    };

    const textStyle = {
      color: text,
    };

    return (
      <View
        {...rest}
        style={[
          styles.button,
          compact && styles.compact,
          buttonStyle,
          { elevation },
          style,
        ]}
      >
        <TouchableOpacity onPress={onPress} disabled={disabled}>
          <View style={styles.content}>
            {iconLeft && (
              <MaterialIcons
                name={iconLeft}
                color={text}
                size={16}
                style={styles.iconLeft}
              />
            )}
            <Text style={[styles.label, textStyle, loading && styles.loading]}>
              {React.Children.map(
                children,
                child =>
                  uppercase && typeof child === 'string'
                    ? child.toUpperCase()
                    : child,
              )}
            </Text>
            {iconRight && (
              <MaterialIcons
                name={iconRight}
                color={text}
                size={16}
                style={styles.iconRight}
              />
            )}
            {loading && <ActivityIndicator color={text} />}
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    minWidth: 64,
    borderStyle: 'solid',
  },
  compact: {
    minWidth: 'auto',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 16,
  },
  iconLeft: {
    marginRight: 8,
  },
  iconRight: {
    marginLeft: 8,
  },
  label: {
    textAlign: 'center',
    letterSpacing: 1,
    marginVertical: 9,
  },
  loading: {
    marginRight: 16,
  },
});

export { IButtonProps };

export default Button;
