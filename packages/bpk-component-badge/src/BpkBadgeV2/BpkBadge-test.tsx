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

import { render } from '@testing-library/react';

// @ts-expect-error Untyped import. See `decisions/imports-ts-suppressions.md`.
import BpkSmallFlightIcon from '../../../bpk-component-icon/sm/flight';
import type { BadgeType } from '../BpkBadge';
import { BADGE_TYPES } from '../BpkBadge';

import BpkBadgeV2 from './BpkBadge';

describe('BpkBadge', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<BpkBadgeV2>Promociando</BpkBadgeV2>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with a "centered"', () => {
    const { asFragment } = render(<BpkBadgeV2 centered>Promociando</BpkBadgeV2>);
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with an icon', () => {
    const { asFragment } = render(
      <BpkBadgeV2>
        <BpkSmallFlightIcon />
        Promociando
      </BpkBadgeV2>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with a "docked" attribute value equal to "right"', () => {
    const { asFragment } = render(
      <BpkBadgeV2 docked="right">Promociando</BpkBadgeV2>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it('should render correctly with a "docked" attribute value equal to "left"', () => {
    const { asFragment } = render(
      <BpkBadgeV2 docked="left">Promociando</BpkBadgeV2>,
    );
    expect(asFragment()).toMatchSnapshot();
  });

  Object.keys(BADGE_TYPES).forEach((badgeType) => {
    it(`should render correctly with type="${badgeType}"`, () => {
      const { asFragment } = render(
        <BpkBadgeV2 type={badgeType as BadgeType}>
          <BpkSmallFlightIcon />
          Promociando
        </BpkBadgeV2>,
      );
      expect(asFragment()).toMatchSnapshot();
    });
  });
});
