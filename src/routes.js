const Index = resolve => {
  require.ensure(['./index.vue'], ()=> {
    resolve(require('./index.vue'));
  })
};

const Welcome = resolve => {
  require.ensure(['./App.vue'], ()=> {
    resolve(require('./App.vue'));
  })
};

const List = resolve => {
  require.ensure(['./components/list.vue'], ()=> {
    resolve(require('./components/list.vue'));
  })
};

const routes = [{
  path: '/',
  name: 'index',
  component: Index,
  children: [
    {
      path: 'welcome',
      name: 'welcome',
      component: Welcome
    },
    {
      path: 'list',
      name: 'list',
      component: List
    }
  ]
}];

export default routes;
