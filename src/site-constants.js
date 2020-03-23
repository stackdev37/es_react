/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @providesModule site-constants
 * @flow
 */

// NOTE: We can't just use `location.toString()` because when we are rendering
// the SSR part in node.js we won't have a proper location.
<<<<<<< HEAD
const urlRoot = 'https://es.reactjs.org';
const version = '16.13.0';
=======
const urlRoot = 'https://reactjs.org';
const version = '16.13.1';
>>>>>>> 7e4f503d86bee08b88eed77a6c9d06077863a27c
const babelURL = 'https://unpkg.com/babel-standalone@6.26.0/babel.min.js';

export {babelURL, urlRoot, version};
