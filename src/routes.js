import React from 'react';

import { Icon } from '@chakra-ui/react';
import { MdDashboard, MdHome, MdLock, MdOutlineShoppingCart } from 'react-icons/md';


import ProfileOverview from 'views/admin/main/profile/overview';

// Others

// Auth Imports

import ForgotPasswordDefault from 'views/auth/forgotPassword/ForgotPasswordDefault.jsx';

import SignInDefault from 'views/auth/signIn/SignInDefault.jsx';

import SignUpDefault from 'views/auth/signUp/SignUpDefault.jsx';

import VerificationDefault from 'views/auth/verification/VerificationDefault.jsx';

const routes = [
  // // --- Main pages ---
  {
    name: 'Main Pages',
    path: '/main',
    icon: <Icon as={MdDashboard} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      {
        name: 'Profile',
        path: '/main/profile',
        collapse: true,
        items: [
          {
            name: 'Profile Overview',
            layout: '/admin',
            path: '/main/profile/overview',
            exact: false,
            component: <ProfileOverview />,
          },
        
        ],
      },
    
    ],
  },
  // --- Authentication ---
  {
    name: 'Authentication',
    path: '/auth',
    icon: <Icon as={MdLock} width="20px" height="20px" color="inherit" />,
    collapse: true,
    items: [
      // --- Sign In ---
      {
        name: 'Sign In',
        path: '/sign-in',
        collapse: true,
        items: [
          {
            name: 'Default',
            layout: '/auth',
            path: '/sign-in/default',
            component: <SignInDefault />,
          },
        
        ],
      },
      // --- Sign Up ---
      {
        name: 'Sign Up',
        path: '/sign-up',
        collapse: true,
        items: [
          {
            name: 'Default',
            layout: '/auth',
            path: '/sign-up/default',
            component: <SignUpDefault />,
          },
        
        ],
      },
      // --- Verification ---
      {
        name: 'Verification',
        path: '/verification',
        collapse: true,
        items: [
          {
            name: 'Default',
            layout: '/auth',
            path: '/verification/default',
            component: <VerificationDefault />,
          },
        
        ],
      },
  
      // --- Forgot Password ---
      {
        name: 'Forgot Password',
        path: '/forgot-password',
        collapse: true,
        items: [
          {
            name: 'Default',
            layout: '/auth',
            path: '/forgot-password/default',
            component: <ForgotPasswordDefault />,
          },
        
        ],
      },
    ],
  },
];

export default routes;
