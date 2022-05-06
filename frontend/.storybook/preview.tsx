import { AppProvider } from "../src/provider";

export const decorators = [
  (Story) => (
    <AppProvider>
      <Story />
    </AppProvider>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
