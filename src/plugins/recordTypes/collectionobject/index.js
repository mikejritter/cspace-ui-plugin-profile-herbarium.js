import columns from './columns';
import fields from './fields';
import forms from './forms';
import messages from './messages';

export default () => (configContext) => ({
  recordTypes: {
    collectionobject: {
      columns: columns(configContext),
      fields: fields(configContext),
      forms: forms(configContext),
      messages: messages(configContext),
    },
  },
});
