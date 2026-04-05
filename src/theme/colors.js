/**
 * Wedding invitation color palette — soft floral pinks & greens.
 * Derived from the flower assets and main.png.
 */

export const palette = {
  // Backgrounds
  cream: {
    DEFAULT: '#F5F2EC',
    light: '#FAF8F4',
    dark: '#EDE9E1',
  },

  // Soft pink (blush — flowers, borders, buttons)
  blush: {
    DEFAULT: '#E8A0B5',
    light: '#F0D4DE',
    dark: '#D4789A',
  },

  // Hot pink / magenta (names accent)
  magenta: {
    DEFAULT: '#CF43A8',
    light: '#D96CBB',
    dark: '#B8368F',
  },

  // Foliage green
  green: {
    DEFAULT: '#508330',
    light: '#7CB342',
    dark: '#3B6B2B',
  },

  // Olive / sage (body text)
  olive: {
    DEFAULT: '#6B6B3E',
    light: '#8B8B5E',
    muted: '#7D7D50',
  },
}

/**
 * Tailwind theme colors object (spread into theme.extend.colors).
 */
export const tailwindColors = {
  cream: palette.cream,
  blush: palette.blush,
  magenta: palette.magenta,
  green: palette.green,
  olive: palette.olive,
}

export default palette
