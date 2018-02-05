import DS from 'ember-data';
import { gte, match, not , and} from '@ember/object/computed';

export default DS.Model.extend({
  email: DS.attr('string'),
  message: DS.attr('string'),

emailIsValid: match('email', /^.+@.+\..+$/),

textIsValid: gte("message.length",5),

isValid: and('emailIsValid', 'textIsValid'),

isDisabled: not('isValid')

});
