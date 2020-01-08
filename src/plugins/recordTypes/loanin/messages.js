import { defineMessages } from 'react-intl';

export default {
  inputTable: defineMessages({
    transferIn: {
      id: 'inputTable.loanin.transferIn',
      defaultMessage: 'Transfer in',
    },
    transferOutReturn: {
      id: 'inputTable.loanin.transferOutReturn',
      defaultMessage: 'Transferred items returned',
    },
  }),
  panel: defineMessages({
    return: {
      id: 'panel.loanin.return',
      defaultMessage: 'Items Returned',
    },
    transferOut: {
      id: 'panel.loanin.transferOut',
      defaultMessage: 'Items Transferred Out',
    },
  }),
};
