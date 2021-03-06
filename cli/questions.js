const { kebabcase } = require('./helpers');

module.exports = [
  {
    type: 'input',
    name: 'npmName',
    message: 'What is the npm name of your component ?'
  },
  {
    type: 'input',
    name: 'componentName',
    message: val => {
      return 'What is the kebab-case tag name for your component ?';
    },
    default: val => {
      return kebabcase(val.npmName);
    }
  },
  {
    type: 'input',
    name: 'componentPath',
    message: 'Enter a location to save the component files : ',
    default: val => {
      return `./${val.componentName}`;
    }
  }
];
