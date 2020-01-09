import fields from './fields';
import forms from './forms';
import messages from './messages';

export default () => (configContext) => ({
  recordTypes: {
    loanout: {
      messages,
      fields: fields(configContext),
      forms: forms(configContext),
    },
  },
});
