/* global cspaceUIPluginProfileHerbarium */
/* The cspaceUIPluginProfileHerbarium global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import messages from './messages';
import plugins from './plugins';
import styles from '../styles/cspace-ui-plugin-profile/herbarium.css';

export default () => ({
  messages,
  className: styles.common,
  prettyUrls: true,
  tenantId: '4000',
  pluginInfo: {
    cspaceUIPluginProfileHerbarium: {
      messages: defineMessages({
        name: {
          id: 'cspaceUIPluginProfileHerbarium.name',
          defaultMessage: 'Herbarium profile',
        },
      }),
      version: cspaceUIPluginProfileHerbarium.packageVersion,
    },
  },
  plugins: plugins.map((plugin) => plugin()),
});
