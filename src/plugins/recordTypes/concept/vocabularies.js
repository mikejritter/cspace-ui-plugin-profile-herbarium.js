import { defineMessages } from 'react-intl';

export default {
  labeltext: {
    messages: defineMessages({
      name: {
        id: 'vocab.concept.labeltext.name',
        description: 'The name of the vocabulary.',
        defaultMessage: 'Label',
      },
      collectionName: {
        id: 'vocab.concept.labeltext.collectionName',
        description: 'The name of a collection of records from the vocabulary.',
        defaultMessage: 'Labels',
      },
      itemName: {
        id: 'vocab.concept.labeltext.itemName',
        description: 'The name of a record from the vocabulary.',
        defaultMessage: 'Label',
      },
    }),
    serviceConfig: {
      servicePath: 'urn:cspace:name(labeltext)',
    },
  },
};
