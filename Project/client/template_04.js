import { Template } from 'meteor/templating';

import './template_04.html';

Template.template04.helpers({
  msg() {
    return "Ola venho do helper para o template 04";
  },
});
