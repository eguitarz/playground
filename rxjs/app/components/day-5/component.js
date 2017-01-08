import Ember from 'ember';
import Rx from 'npm:rxjs/Rx';

export default Ember.Component.extend({
  init() {
    this._super(...arguments);
    let rx = Rx.Observable.of(1,2,3);
    console.log(rx);
  }
});
