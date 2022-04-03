export const postMenuItems =[
  { label: 'Main', to: '/post', children: [] },
  { label: 'About', to: '/post/about', children: [] },
  { label: 'Skill', to: '/post/skill', children: [] },
  { label: 'Project', to: '/post/project', children: [] },
  { label: 'Study', to: '/post/project', children: [
    { label: 'Java script', to: '/post/list/javascript', children: [] },
    { label: 'html', to: '/post/list/html', children: [] },
    { label: 'html', to: '/post/list/css', children: [] },
    { label: 'React', to: '/post/list/react', children: [] },
    { label: 'Node.js', to: '/post/list/nodejs', children: [] },
    { label: 'next.js', to: '/post/list/nextjs', children: [] },
  ] },
  

  {
    label: 'images', to: '/post/list/nodejs', children: [
      { label: 'test', to: '/post/list/test', children: [] },
      { label: 'test', to: '/post/list/test', children: [] },
      { label: 'test', to: '/post/list/test', children: [] },
      { label: 'test', to: '/post/list/test', children: [] },
      { label: 'test', to: '/post/list/test', children: [] },
    ]
  },
  {
    label: 'account', to: '', children: [
      { label: 'Signup', to: '/post/auth/signup', children: [] },
      { label: 'Signin', to: '/post/auth/signin', children: [] },
      { label: 'profile', to: '/post/auth/profile', children: [] },
      { label: 'Admin', to: '/post/admin', children: [] }
    ]
  },
]

