import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    extensions,
  } = configContext.config;

  return {
    inputTable: {
      ...extensions.naturalhistory.collectionobject.messages.inputTable,
    },
    panel: defineMessages({
      locality: {
        id: 'panel.collectionobject.locality',
        defaultMessage: 'Locality Information',
      },
    }),
  };
};
