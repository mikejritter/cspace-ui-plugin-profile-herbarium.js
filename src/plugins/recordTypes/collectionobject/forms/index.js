import defaultForm from './default';
import inventoryForm from './inventory';
import photoForm from './photo';

export default (configContext) => ({
  default: defaultForm(configContext),
  inventory: inventoryForm(configContext),
  photo: photoForm(configContext),
  public: {
    disabled: true,
  },
  timebased: {
    disabled: true,
  },
});
