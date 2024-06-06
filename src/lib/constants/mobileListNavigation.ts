export const mobileListNavigation = [
  { title: 'Services', nav: '/services' },
  { title: 'About', nav: '/about' },
  {
    title: 'Resources',
    nav: '/resources',
    submenu: [
      {
        title: 'Blog posts',
        subtitle: 'Find cool stories and ideas ',
        nav: '/resources/blog-post',
      },
      {
        title: 'Customer testimonials',
        subtitle: 'Lorem ipsum dolor sit dolor ',
        nav: '/resources/customer',
      },
      {
        title: 'Tutorials & Guides',
        subtitle: 'Lorem ipsum dolor sit dolor ',
        nav: '/resources/tutorials',
      },
      {
        title: 'Stay Updated',
        subtitle: 'Lorem ipsum dolor sit dolor ',
        nav: '/resources/updates',
      },
    ],
  },
  { title: 'Careers', nav: '/careers' },
  { title: 'Contact', nav: '/contact' },
];
