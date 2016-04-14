import DS from 'ember-data';

export default DS.Model.extend({
  result: DS.attr('boolean'),
  count: DS.attr('number'),
  nameSchool: DS.attr('string'),
  distritSchool: DS.attr('string'),
});
