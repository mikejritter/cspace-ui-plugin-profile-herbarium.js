import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    AutocompleteInput,
    CompoundInput,
    OptionPickerInput,
    TextInput,
    TermPickerInput,
  } = configContext.inputComponents;

  const {
    configKey: config,
  } = configContext.configHelpers;

  const {
    DATA_TYPE_INT,
  } = configContext.dataTypes;

  const {
    extensions,
  } = configContext.config;

  return {
    document: {
      'ns2:collectionobjects_common': {
        phase: {
          [config]: {
            view: {
              type: TermPickerInput,
              props: {
                source: 'botanicalphase',
              },
            },
          },
        },
        forms: {
          form: {
            [config]: {
              view: {
                type: TermPickerInput,
                props: {
                  source: 'herbariumform',
                },
              },
            },
          },
        },
      },
      'ns2:collectionobjects_herbarium': {
        [config]: {
          service: {
            ns: 'http://collectionspace.org/services/collectionobject/local/herbarium',
          },
        },
        localNameGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          localNameGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_herbarium.localNameGroup.name',
                  defaultMessage: 'Local name',
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
            localName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.localName.fullName',
                    defaultMessage: 'Local name',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.localName.name',
                    defaultMessage: 'Name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            localNameLanguage: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.localNameLanguage.fullName',
                    defaultMessage: 'Local name language',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.localNameLanguage.name',
                    defaultMessage: 'Language',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'languages',
                  },
                },
              },
            },
          },

        },
        herbHybridParentGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          herbHybridParentGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_herbarium.herbHybridParentGroup.name',
                  defaultMessage: 'Hybrid parent',
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
            herbHybridParent: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.herbHybridParent.fullName',
                    defaultMessage: 'Hybrid parent name',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.herbHybridParent.name',
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
            herbHybridParentQualifier: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.herbHybridParentQualifier.fullName',
                    defaultMessage: 'Hybrid parent qualifier',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.herbHybridParentQualifier.name',
                    defaultMessage: 'Qualifier',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'hybridparentqualifier',
                  },
                },
              },
            },
          },
        },
        hybridName: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_herbarium.hybridName.name',
                defaultMessage: 'Hybrid name',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        labelHeader: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_herbarium.labelHeader.name',
                defaultMessage: 'Label header',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'concept/labeltext',
              },
            },
          },
        },
        labelFooter: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_herbarium.labelFooter.name',
                defaultMessage: 'Label footer',
              },
            }),
            view: {
              type: AutocompleteInput,
              props: {
                source: 'concept/labeltext',
              },
            },
          },
        },
        sheetNumber: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_herbarium.sheetNumber.name',
                defaultMessage: 'Sheet number',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        sheetCount: {
          [config]: {
            dataType: DATA_TYPE_INT,
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_herbarium.sheetCount.name',
                defaultMessage: 'Sheet count',
              },
            }),
            view: {
              type: TextInput,
            },
          },
        },
        // FIXME: This appears to be redundant with typeSpecimenGroupList in
        // collectionobjects_naturalhistory_extension.
        herbTypeSpecimenGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          herbTypeSpecimenGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_herbarium.herbTypeSpecimenGroup.name',
                  defaultMessage: 'Type specimen',
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
            herbTypeSpecimenKind: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.herbTypeSpecimenKind.fullName',
                    defaultMessage: 'Type specimen kind',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.herbTypeSpecimenKind.name',
                    defaultMessage: 'Kind',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'typespecimenkind',
                  },
                },
              },
            },
            herbTypeSpecimenAssertionBy: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.herbTypeSpecimenAssertionBy.fullName',
                    defaultMessage: 'Type specimen asserted by',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.herbTypeSpecimenAssertionBy.name',
                    defaultMessage: 'Asserted by',
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
            herbTypeSpecimenReference: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.herbTypeSpecimenReference.fullName',
                    defaultMessage: 'Type specimen reference',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.herbTypeSpecimenReference.name',
                    defaultMessage: 'Reference',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            herbTypeSpecimenRefPage: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.herbTypeSpecimenRefPage.fullName',
                    defaultMessage: 'Type specimen reference page',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.herbTypeSpecimenRefPage.name',
                    defaultMessage: 'Page',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            herbTypeSpecimenBasionym: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.herbTypeSpecimenBasionym.fullName',
                    defaultMessage: 'Type specimen verified basionym',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.herbTypeSpecimenBasionym.name',
                    defaultMessage: 'Verified basionym',
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
            herbTypeSpecimenNotes: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.herbTypeSpecimenNotes.fullName',
                    defaultMessage: 'Type specimen note',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.herbTypeSpecimenNotes.name',
                    defaultMessage: 'Note',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
          },
        },
        postToPublic: {
          [config]: {
            defaultValue: 'yes',
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_herbarium.postToPublic.name',
                defaultMessage: 'Post to public',
              },
            }),
            view: {
              type: OptionPickerInput,
              props: {
                source: 'yesNoValues',
              },
            },
          },
        },
        habitat: {
          [config]: {
            messages: defineMessages({
              name: {
                id: 'field.collectionobjects_herbarium.habitat.name',
                defaultMessage: 'Habitat',
              },
            }),
            view: {
              type: TextInput,
              props: {
                multiline: true,
              },
            },
          },
        },
        // FIXME: This appears to be redundant with associatedTaxaGroupList in
        // collectionobjects_naturalhistory_extension.
        herbAssociatedTaxaGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          // FIXME: This was misspelled in 4.x.
          herbAassociatedTaxaGroup: {
            [config]: {
              messages: defineMessages({
                name: {
                  id: 'field.collectionobjects_herbarium.herbAassociatedTaxaGroup.name',
                  defaultMessage: 'Associated taxa',
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
            herbAssocTaxon: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.herbAssocTaxon.fullName',
                    defaultMessage: 'Associated taxon name',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.herbAssocTaxon.name',
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
            herbAssocTaxonCommonName: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.herbAssocTaxonCommonName.fullName',
                    defaultMessage: 'Associated taxon common name',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.herbAssocTaxonCommonName.name',
                    defaultMessage: 'Common name',
                  },
                }),
                view: {
                  type: TextInput,
                },
              },
            },
            herbAssocTaxonInteraction: {
              [config]: {
                messages: defineMessages({
                  fullName: {
                    id: 'field.collectionobjects_herbarium.herbAssocTaxonInteraction.fullName',
                    defaultMessage: 'Associated taxon interaction',
                  },
                  name: {
                    id: 'field.collectionobjects_herbarium.herbAssocTaxonInteraction.name',
                    defaultMessage: 'Interaction',
                  },
                }),
                view: {
                  type: TermPickerInput,
                  props: {
                    source: 'assoctaxoninteraction',
                  },
                },
              },
            },
          },
        },
        // FIXME: This appears to be redundant with localityGroupList from
        // collectionobjects_naturalhistory_extension.
        herbLocalityGroupList: {
          [config]: {
            view: {
              type: CompoundInput,
            },
          },
          herbLocalityGroup: {
            [config]: {
              messages: defineMessages({
                fullName: {
                  id: 'field.collectionobjects_herbarium.herbLocalityGroup.fullName',
                  defaultMessage: 'Locality',
                },
              }),
              repeating: true,
              view: {
                type: CompoundInput,
              },
            },
            herbCollectionLocationVerbatim: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_herbarium.herbCollectionLocationVerbatim.name',
                    defaultMessage: 'Field collection location verbatim',
                  },
                }),
                view: {
                  type: TextInput,
                  props: {
                    multiline: true,
                  },
                },
              },
            },
            herbCollectionPlace: {
              [config]: {
                messages: defineMessages({
                  name: {
                    id: 'field.collectionobjects_herbarium.herbCollectionPlace.name',
                    defaultMessage: 'Field collection place',
                  },
                }),
                view: {
                  type: AutocompleteInput,
                  props: {
                    source: 'place/local',
                  },
                },
              },
            },
          },
        },
      },
      ...extensions.naturalhistory.collectionobject.fields,
    },
  };
};
