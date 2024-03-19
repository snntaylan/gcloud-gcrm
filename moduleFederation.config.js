const { dependencies } = require('./package.json');

module.exports = {
  name: 'gcrm',
  filename: 'remoteEntry.js',
  exposes: {
    './GCRM': './src/pages/modules/gcrm.tsx',
    './Header': './src/components/common/header.tsx',
  },
  remotes: {
    gstore: 'gstore@http://localhost:5454/remoteEntry.js',
  },
  shared: {
    ...dependencies,
    react: {
      singleton: true,
      import: 'react',
      shareScope: 'default',
      requiredVersion: dependencies.react,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: dependencies['react-dom'],
    },
  },
};