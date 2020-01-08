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
    DATA_TYPE_DATE,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:loansin_herbarium': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/loanin/local/herbarium',
          },
        },
        majorGroup: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.loansin_herbarium.majorGroup.name',
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
                  id: 'field.loansin_herbarium.geography.name',
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
                  id: 'field.loansin_herbarium.taxonomy.name',
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
                  id: 'field.loansin_herbarium.objKind.name',
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
                id: 'field.loansin_herbarium.shipDate.name',
                defaultMessage: 'Loan shipped date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        dueDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              name: {
                id: 'field.loansin_herbarium.dueDate.name',
                defaultMessage: 'Due date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        transferInDate: {
          [config]: {
            dataType: DATA_TYPE_DATE,
            messages: defineMessages({
              fullName: {
                id: 'field.loansin_herbarium.transferInDate.fullName',
                defaultMessage: 'Transfer in date',
              },
              name: {
                id: 'field.loansin_herbarium.transferInDate.name',
                defaultMessage: 'Date',
              },
            }),
            view: {
              type: DateInput,
            },
          },
        },
        transferInOrg: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.loansin_herbarium.transferInOrg.fullName',
                defaultMessage: 'Transfer in from',
              },
              name: {
                id: 'field.loansin_herbarium.transferInOrg.name',
                defaultMessage: 'From',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'organization/local',
              },
            },
          },
        },
        transferInPerson: {
          [config]: {
            messages: defineMessages({
              fullName: {
                id: 'field.loansin_herbarium.transferInPerson.fullName',
                defaultMessage: 'Transfer in previous borrower',
              },
              name: {
                id: 'field.loansin_herbarium.transferInPerson.name',
                defaultMessage: 'Previous borrower',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'person/local',
              },
            },
          },
        },
        // These count fields were configured in 4.x, but weren't used.
        // numReceived: {
        //   [config]: {
        //     dataType: DATA_TYPE_INT,
        //     messages: defineMessages({
        //       name: {
        //         id: 'field.loansin_herbarium.numReceived.name',
        //         defaultMessage: 'Number received',
        //       },
        //     }),
        //     view: {
        //       type: TextInput,
        //     },
        //   },
        // },
        // numReturned: {
        //   [config]: {
        //     dataType: DATA_TYPE_INT,
        //     messages: defineMessages({
        //       name: {
        //         id: 'field.loansin_herbarium.numReturned.name',
        //         defaultMessage: 'Number returned',
        //       },
        //     }),
        //     view: {
        //       type: TextInput,
        //     },
        //   },
        // },
        // numTransferredOut: {
        //   [config]: {
        //     dataType: DATA_TYPE_INT,
        //     messages: defineMessages({
        //       name: {
        //         id: 'field.loansin_herbarium.numTransferredOut.name',
        //         defaultMessage: 'Number transferred out',
        //       },
        //     }),
        //     view: {
        //       type: TextInput,
        //     },
        //   },
        // },
        // balance: {
        //   [config]: {
        //     dataType: DATA_TYPE_INT,
        //     messages: defineMessages({
        //       name: {
        //         id: 'field.loansin_herbarium.balance.name',
        //         defaultMessage: 'Balance',
        //       },
        //     }),
        //     view: {
        //       type: TextInput,
        //     },
        //   },
        // },
        // discrepancy: {
        //   [config]: {
        //     dataType: DATA_TYPE_INT,
        //     messages: defineMessages({
        //       name: {
        //         id: 'field.loansin_herbarium.discrepancy.name',
        //         defaultMessage: 'Discrepancy',
        //       },
        //     }),
        //     view: {
        //       type: TextInput,
        //     },
        //   },
        // },
      },
      ...extensions.naturalhistory.loanin.fields,
    },
  };
};
