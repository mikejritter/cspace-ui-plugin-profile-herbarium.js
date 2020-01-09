export default (configContext) => {
  const {
    OP_EQ,
    OP_CONTAIN,
  } = configContext.searchOperators;

  const {
    defaultAdvancedSearchBooleanOp,
    extensions,
  } = configContext.config;

  return {
    op: defaultAdvancedSearchBooleanOp,
    value: [
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/objectNumber',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/collection',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_naturalhistory_extension/determinationHistoryGroupList/determinationHistoryGroup/determinationTaxon',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/sex',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/phase',
      },
      {
        op: OP_EQ,
        path: 'ns2:collectionobjects_common/forms/form',
      },
      {
        op: OP_CONTAIN,
        path: 'ns2:collectionobjects_common/styles/style',
      },
      ...extensions.core.advancedSearch,
    ],
  };
};
