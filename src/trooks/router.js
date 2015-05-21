import {Router} from 'backbone-routing';
import HeaderService from '../header/service';
import LayoutView from './layout-view';
import IndexRoute from './index/route';
import ShowRoute from './show/route';

export default Router.extend({
  initialize(options) {
    this.container = options.container;

    HeaderService.command('add', {
      name: 'Trooks',
      path: 'trooks',
      type: 'primary'
    });
  },

  onBeforeEnter() {
    this.layout = new LayoutView();
    this.container.show(this.layout);
    HeaderService.command('activate', {
      path: 'trooks'
    });
  },

  routes: {
    'trooks'     : 'index',
    'trooks/:id' : 'show'
  },

  index() {
    return new IndexRoute();
  },

  show() {
    return new ShowRoute({
      layout: this.layout
    });
  }
});
