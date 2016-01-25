export const styler = (type) => {
  switch (type) {
    case 'table':
      return 'mdl-data-table mdl-js-data-table mdl-shadow--2dp';
    case 'th':
      return 'mdl-data-table__cell--non-numeric';
    case 'td':
      return 'mdl-data-table__cell--non-numeric';
    case 'textfield':
      return 'mdl-textfield mdl-js-textfield mdl-textfield--floating-label';
    case 'input':
      return 'mdl-textfield__input';
    case 'label':
      return 'mdl-textfield__label'
    case 'radioLabel':
      return 'mdl-radio mdl-js-radio mdl-js-ripple-effect';
    case 'radioInput':
      return 'mdl-radio__button';
    case 'radioSpan':
      return 'mdl-radio__label';
    case 'button':
      return 'mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect';
    default:
      return console.log('styling was not applied to ',type);
  }
}