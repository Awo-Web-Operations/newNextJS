import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      white: string
      gray: string
      lighGray: string
      orange: string
    };

    borderRadius: string;
  }
}
