import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

/**
 * Button appearances
 */
enum Appearances {
  primary = 'primary',
  secondary = 'secondary',
  alert = 'alert',
  success = 'success',
  warning = 'warning',
}

interface IButtonProps {
  appearance?: keyof typeof Appearances;
  children: React.ReactNode;
  compact?: boolean;
  disabled?: boolean;
  loading?: boolean;
  mode?: 'transparent' | 'contained' | 'outlined';
  onPress: () => void;
  style?: any;
}

/**
 * Button component
 * @param {Object} props Component properties
 */
class Button extends React.PureComponent<IButtonProps> {
  public static defaultProps = {
    appearance: 'secondary',
    compact: true,
    disabled: false,
    loading: false,
    mode: 'transparent',
  };

  render() {
    const {
      appearance,
      children,
      compact,
      disabled,
      loading,
      mode,
      onPress,
      style,
      ...rest
    } = this.props;

    let backgroundColor: string,
      borderColor: string,
      textColor: string,
      loadingColor: string;
    const borderRadius = 4;
    const elevation = mode === 'contained' && !disabled ? 2 : 0;

    if (mode === 'contained') {
      switch (true) {
        case appearance === 'primary': {
          backgroundColor = '#008cdd';
          borderColor = '#008cdd';
          textColor = '#fff';
          loadingColor = '#fff';
          break;
        }
        case appearance === 'secondary': {
          backgroundColor = '#e0e0e0';
          borderColor = '#e0e0e0';
          textColor = '#4d4d4d';
          loadingColor = '#4d4d4d';
          break;
        }
        case appearance === 'alert': {
          backgroundColor = '#d93737';
          borderColor = '#d93737';
          textColor = '#fff';
          loadingColor = '#fff';
          break;
        }
        case appearance === 'success': {
          backgroundColor = '#2da953';
          borderColor = '#2da953';
          textColor = '#fff';
          loadingColor = '#fff';
          break;
        }
        case appearance === 'warning': {
          backgroundColor = '#feaf0e';
          borderColor = '#feaf0e';
          textColor = '#fff';
          loadingColor = '#fff';
          break;
        }
        default: {
          backgroundColor = '#ededed';
          borderColor = '#ededed';
          textColor = '#4d4d4d';
          loadingColor = '#4d4d4d';
        }
      }
    } else if (mode === 'outlined') {
      switch (true) {
        case appearance === 'primary': {
          backgroundColor = 'transparent';
          borderColor = '#008cdd';
          textColor = '#008cdd';
          loadingColor = '#008cdd';
          break;
        }
        case appearance === 'secondary': {
          backgroundColor = 'transparent';
          borderColor = '#4d4d4d';
          textColor = '#4d4d4d';
          loadingColor = '#4d4d4d';
          break;
        }
        case appearance === 'alert': {
          backgroundColor = 'transparent';
          borderColor = '#d93737';
          textColor = '#d93737';
          loadingColor = '#d93737';
          break;
        }
        case appearance === 'success': {
          backgroundColor = 'transparent';
          borderColor = '#2da953';
          textColor = '#2da953';
          loadingColor = '#2da953';
          break;
        }
        case appearance === 'warning': {
          backgroundColor = 'transparent';
          borderColor = '#feaf0e';
          textColor = '#feaf0e';
          loadingColor = '#feaf0e';
          break;
        }
        default: {
          backgroundColor = 'transparent';
          borderColor = '#4d4d4d';
          textColor = '#4d4d4d';
          loadingColor = '#4d4d4d';
        }
      }
    } else {
      switch (true) {
        case appearance === 'primary': {
          backgroundColor = 'transparent';
          borderColor = 'transparent';
          textColor = '#008cdd';
          loadingColor = '#008cdd';
          break;
        }
        case appearance === 'secondary': {
          backgroundColor = 'transparent';
          borderColor = 'transparent';
          textColor = '#4d4d4d';
          loadingColor = '#4d4d4d';
          break;
        }
        case appearance === 'alert': {
          backgroundColor = 'transparent';
          borderColor = 'transparent';
          textColor = '#d93737';
          loadingColor = '#d93737';
          break;
        }
        case appearance === 'success': {
          backgroundColor = 'transparent';
          borderColor = 'transparent';
          textColor = '#2da953';
          loadingColor = '#2da953';
          break;
        }
        case appearance === 'warning': {
          backgroundColor = 'transparent';
          borderColor = 'transparent';
          textColor = '#feaf0e';
          loadingColor = '#feaf0e';
          break;
        }
        default: {
          backgroundColor = 'transparent';
          borderColor = 'transparent';
          textColor = '#4d4d4d';
          loadingColor = '#4d4d4d';
        }
      }
    }

    if (disabled) {
      if (mode === 'transparent') {
        backgroundColor = 'transparent';
        borderColor = 'transparent';
        textColor = '#cacaca';
        loadingColor = '#cacaca';
      } else if (mode === 'outlined') {
        backgroundColor = 'transparent';
        borderColor = '#cacaca';
        textColor = '#cacaca';
        loadingColor = '#cacaca';
      } else if (mode === 'contained') {
        backgroundColor = '#fafafa';
        borderColor = '#fafafa';
        textColor = '#cacaca';
        loadingColor = '#cacaca';
      }
    }

    const buttonStyle = {
      backgroundColor: backgroundColor,
      borderColor: borderColor,
      borderWidth: 1,
      borderRadius,
    };

    const textStyle = {
      color: textColor,
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
            <Text style={[styles.label, textStyle, loading && styles.loading]}>
              {React.Children.map(
                children,
                child =>
                  typeof child === 'string' ? child.toUpperCase() : child,
              )}
            </Text>
            {loading && <ActivityIndicator color={loadingColor} />}
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
  label: {
    textAlign: 'center',
    letterSpacing: 1,
    marginVertical: 9,
  },
  loading: {
    marginRight: 16,
  },
});

export { Appearances, IButtonProps };

export default Button;
