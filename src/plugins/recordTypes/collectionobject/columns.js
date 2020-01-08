import { defineMessages } from 'react-intl';

export default (configContext) => {
  const {
    formatRefName,
  } = configContext.formatHelpers;

  return {
    default: {
      title: {
        disabled: true,
      },
      determinationTaxon: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.default.determinationTaxon',
            defaultMessage: 'Scientific name',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_naturalhistory_extension:determinationHistoryGroupList/0/determinationTaxon',
        width: 450,
      },
    },
    narrow: {
      title: {
        disabled: true,
      },
      determinationTaxon: {
        formatValue: formatRefName,
        messages: defineMessages({
          label: {
            id: 'column.collectionobject.narrow.determinationTaxon',
            defaultMessage: 'Sci. name',
          },
        }),
        order: 20,
        sortBy: 'collectionobjects_naturalhistory_extension:determinationHistoryGroupList/0/determinationTaxon',
        width: 450,
      },
    },
  };
};
