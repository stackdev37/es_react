/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * @emails react-core
 * @flow
 */

'use strict';

import {urlRoot} from 'site-constants';

export default (slug: string): string | null =>
  slug == null ? null : `${urlRoot}/${slug.replace(/^\//, '')}`;
