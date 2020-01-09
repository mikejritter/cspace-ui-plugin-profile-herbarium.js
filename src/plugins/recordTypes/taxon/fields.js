import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  return {
    document: {
      'ns2:taxon_herbarium': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/taxon/local/herbarium',
          },
        },
        taxonMajorGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.taxon_herbarium.taxonMajorGroup.name',
                defaultMessage: 'Major group',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'taxonmajorgroup',
              },
            },
          },
        },
        taxonFamily: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.taxon_herbarium.taxonFamily.name',
                defaultMessage: 'Family',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'taxon/local,taxon/common',
              },
            },
          },
        },
        taxonBasionym: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.taxon_herbarium.taxonBasionym.name',
                defaultMessage: 'Basionym',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'taxon/local,taxon/common',
              },
            },
          },
        },
        relatedTermGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          relatedTermGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.taxon_herbarium.relatedTermGroup.name',
                  defaultMessage: 'Related term',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
                props: {
                  tabular: true,
                },
              },
            },
            relatedTerm: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_herbarium.relatedTerm.fullName',
                    defaultMessage: 'Related term name',
                  },
                  name: {
                    id: 'field.taxon_herbarium.relatedTerm.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'taxon/local,taxon/common',
                  },
                },
              },
            },
            relatedTermType: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_herbarium.relatedTermType.fullName',
                    defaultMessage: 'Related term type',
                  },
                  name: {
                    id: 'field.taxon_herbarium.relatedTermType.name',
                    defaultMessage: 'Type',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'taxonrelatedtermtype',
                  },
                },
              },
            },
            relatedTermSource: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_herbarium.relatedTermSource.fullName',
                    defaultMessage: 'Related term source',
                  },
                  name: {
                    id: 'field.taxon_herbarium.relatedTermSource.name',
                    defaultMessage: 'Source',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            relatedTermSourceDetail: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.taxon_herbarium.relatedTermSourceDetail.fullName',
                    defaultMessage: 'Related term source detail',
                  },
                  name: {
                    id: 'field.taxon_herbarium.relatedTermSourceDetail.name',
                    defaultMessage: 'Source detail',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
      },
    },
  };
};
