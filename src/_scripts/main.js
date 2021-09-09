// Main javascript entry point
// Should handle bootstrapping/starting application

'use strict';

import $ from 'jquery'; // Make sure this is removed and jQuery is used from the website
import { Link } from '../_modules/link/link';

$(() => {
  new Link(); // Activate Link modules logic
  console.log('Welcome to Yeogurt!');
});
