/* global cspaceUIPluginProfileHerbarium */
/* The cspaceUIPluginProfileHerbarium global variable is set by webpack (in non-test builds). See
 * webpack.config.js. */

import { defineMessages } from 'react-intl';
import naturalHistoryExtensionPlugin from 'cspace-ui-plugin-ext-naturalhistory';
import taxonRecordPlugin from 'cspace-ui-plugin-record-taxon';
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
      packageName: cspaceUIPluginProfileHerbarium.packageName,
      packageVersion: cspaceUIPluginProfileHerbarium.packageVersion,
      buildNum: cspaceUIPluginProfileHerbarium.buildNum,
      repositoryUrl: cspaceUIPluginProfileHerbarium.repositoryUrl,
      // packageVersion is now preferred, but keep version for backward compatibility with older
      // versions of cspace-ui.
      version: cspaceUIPluginProfileHerbarium.packageVersion,
    },
  },
  plugins: [
    naturalHistoryExtensionPlugin(),
    taxonRecordPlugin(),
    ...plugins.map((plugin) => plugin()),
  ],
});
