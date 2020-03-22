module.exports = {
  'setupFilesAfterEnv': ['<rootDir>/config/setupTests.js'],
  'snapshotSerializers': [
    'enzyme-to-json/serializer',
  ],
  'moduleNameMapper': {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga|css)$': '<rootDir>/src/utils/empty-module.js',
  },
};