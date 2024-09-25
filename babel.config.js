/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.js', '.json'],
        alias: {
          ui: './src/ui',
          constants: './src/constants',
          config: './src/config',
          data: './src/data',
          libs: './src/libs',
          types: './src/types',
        },
      },
    ],
    [
      'module:react-native-dotenv',
      {
        moduleName: '@env',
        path: '.env',
        allowUndefined: false,
      },
    ],
    '@babel/plugin-transform-export-namespace-from',
    'react-native-reanimated/plugin', // needs to be last
  ],
};
