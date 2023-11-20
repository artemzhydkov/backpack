/*
 * Backpack - Skyscanner's Design System
 *
 * Copyright 2016 Skyscanner Ltd
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/* @flow strict */

import PropTypes from 'prop-types';
import type { Node } from 'react';

import { cssModules } from '../../bpk-react-utils';

import STYLES from './BpkList.module.css';

const getClassName = cssModules(STYLES);

type Props = {
  children: Node,
  className: ?string,
};

const BpkListItem = (props: Props) => {
  const { children, className } = props;

  const classNames = getClassName('bpk-list__item', className);

  return <li className={classNames}>{children}</li>;
};

BpkListItem.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  className: PropTypes.string,
};

BpkListItem.defaultProps = {
  className: null,
};

export default BpkListItem;
