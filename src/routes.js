const Index = resolve => require(['./R.vue'], resolve);
const Outer = resolve => require(['./index.vue'], resolve);
const Welcome = resolve => require(['./App.vue'], resolve);
const List = resolve => require(['./components/list.vue'], resolve);

// const Index = resolve => {
//   require.ensure(['./R.vue'], () => {
//     resolve(require('./R.vue'));
//   })
// };
//
// const Outer = resolve => {
//   require.ensure(['./index.vue'], () => {
//     resolve(require('./index.vue'));
//   })
// };
//
// const Welcome = resolve => {
//   require.ensure(['./App.vue'], () => {
//     resolve(require('./App.vue'));
//   })
// };
//
// const List = resolve => {
//   require.ensure(['./components/list.vue'], () => {
//     resolve(require('./components/list.vue'));
//   })
// };


const routes = [{
  path: '/index',
  name: 'out',
  component: Outer,
  children: [
    {
      path: 'welcome/:user?',
      name: 'welcome',
      component: Welcome,
      beforeEnter:(to,from,next)=>{
        console.log(1112)
        next();
      }
    },
    {
      path: 'list',
      name: 'list',
      component: List
    }
  ]
}, {
  path: '/',
  name: '',
  component: Index,
}];

export default routes;
