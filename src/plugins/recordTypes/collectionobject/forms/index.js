import defaultForm from './default';

export default (configContext) => ({
  default: defaultForm(configContext),
  public: {
    disabled: true,
  },
  timebased: {
    disabled: true,
  },
});
