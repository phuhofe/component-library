import { setCompodocJson } from '@storybook/addon-docs/angular'
import docJson from '../documentation.json'
import '!style-loader!css-loader!sass-loader!./../projects/flora/src/styles/global.scss'

setCompodocJson(docJson)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: { inlineStories: true },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'white',
        value: '#ffffff',
      },
      {
        name: 'light',
        value: '#f8f8f8',
      },
      {
        name: 'dark',
        value: '#333333',
      },
      {
        name: 'black',
        value: '#000000',
      },
      {
        name: 'gray',
        value: '#999999',
      },
    ],
  },

}
