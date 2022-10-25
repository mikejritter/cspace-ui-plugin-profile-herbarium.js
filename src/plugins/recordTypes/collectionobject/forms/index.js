import defaultForm from './default';

export default (configContext) => ({
  default: defaultForm(configContext),
  timebased: {
    disabled: true,
  },
});
