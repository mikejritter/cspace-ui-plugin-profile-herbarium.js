import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    DateInput,
    TermPickerInput,
    TextInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_INT,
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:loansout_herbarium': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanout/local/herbarium',
          },
        },
        majorGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_herbarium.majorGroup.name',
                defaultMessage: 'Major group',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'majortaxongroup',
              },
            },
          },
        },
        geographyList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          geography: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.loansout_herbarium.geography.name',
                  defaultMessage: 'Geography',
                },
              }),
              repeating: true,
              view: {
                type: TextInput,
              },
            },
          },
        },
        taxonomyList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          taxonomy: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.loansout_herbarium.taxonomy.name',
                  defaultMessage: 'Taxonomy',
                },
              }),
              repeating: true,
              view: {
                type: AutocompleteInput,
                props: {
                  source: 'taxon/local,taxon/common',
                },
              },
            },
          },
        },
        objKindList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          objKind: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.loansout_herbarium.objKind.name',
                  defaultMessage: 'Object kind',
                },
              }),
              repeating: true,
              view: {
                type: TermPickerInput,
                props: {
                  source: 'objectkind',
                },
              },
            },
          },
        },
        shipDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.loansout_herbarium.shipDate.name',
                defaultMessage: 'Shipping form date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        transportMethod: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansout_herbarium.transportMethod.name',
                defaultMessage: 'Transportation',
              },
            }),
            view: {
              type: TermPickerInput,
              props: {
                source: 'transportmethod',
              },
            },
          },
        },
        numPackages: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.loansout_herbarium.numPackages.name',
                defaultMessage: 'Number of packages',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        acknowledgeDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.loansout_herbarium.acknowledgeDate.name',
                defaultMessage: 'Acknowledge date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
      },
      ...extensions.naturalhistory.loanout.fields,
    },
  };
};
