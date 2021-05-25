import React from 'react'
import CIcon from '@coreui/icons-react'
const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Visit Site',
    to: '/visit-site',
    icon: <CIcon name="cil-arrow-right" customClasses="c-sidebar-nav-icon"/>,
  },
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-home" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  {_tag: 'CSidebarNavDropdown',
  name: 'Rating',
  route: '/rating',
  icon: 'cil-star',
  },
  
  {_tag: 'CSidebarNavDropdown',
  name: 'Comment',
  route: '/comment',
  icon: 'cil-comment-square',
  },
  {_tag: 'CSidebarNavDropdown',
  name: 'User',
  route: '/user',
  icon: 'cil-people',
  },
  {_tag: 'CSidebarNavDropdown',
  name: 'Category',
  route: '/category',
  icon: 'cil-list-rich',
    _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Add Category',
      to: '/category/add-category',
      icon: 'cil-user-plus',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Category List',
      to: '/category/category-list',
      icon: 'cil-eye',
    },
  ]
  },
  {_tag: 'CSidebarNavDropdown',
  name: 'Movie',
  route: '/movie',
  icon: 'cil-movie',
    _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Add Movie',
      to: '/movie/add-movie',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Movie List',
      to: '/movie/movie-list',
    },
  ]
  },
  {_tag: 'CSidebarNavDropdown',
  name: 'Show',
  route: '/show',
  icon: 'cil-movie',
    _children: [
    {
      _tag: 'CSidebarNavItem',
      name: 'Add Show',
      to: '/show/add-show',
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Show List',
      to: '/show/show-list',
    },
  ]
  },
  {_tag: 'CSidebarNavDropdown',
  name: 'Pages',
  route: '/pages',
  icon: 'cil-page',
    _children: [
    {
      _tag: 'CSidebarNavDropdown',
      name: 'Authentication',
      to: '/pages/authentication',
      icon: 'cil-puzzle',
        _children: [
       {
         _tag: 'CSidebarNavItem',
         name: 'Login',
         to: '/pages/authentication/login',
  },
   ],
    },
    {
      _tag: 'CSidebarNavItem',
      name: 'Extra Pages',
      to: '/pages/extra-pages',
    },
     ]
      }
]
export default _nav
