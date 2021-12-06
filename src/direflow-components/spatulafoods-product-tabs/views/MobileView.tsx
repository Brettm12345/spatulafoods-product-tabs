import React, {FC} from 'react';
import {ChevronDownIcon} from '@heroicons/react/solid';
import {Disclosure, Transition} from '@headlessui/react';
import classNames from 'classnames';
import {ViewProps} from './types';
import {sections} from '../sections';

export const MobileView: FC<ViewProps> = ({product}) => (
  <div className="mt-4 space-y-3">
    {Object.entries(sections).map(([title, Component]) => (
      <Disclosure key={title}>
        {({open}) => (
          <>
            <Disclosure.Button
              className={classNames(
                'text-md no-tap-highlight flex items-center justify-between px-4 py-2 w-full text-left text-brand-900 font-bold bg-brand-100 rounded-lg select-none transition-colors ease-in-out',
                'hover:bg-brand-200 focus:outline-none focus:ring focus:ring-brand-300 focus:ring-opacity-75'
              )}
            >
              <span>{title}</span>{' '}
              <ChevronDownIcon
                className={classNames(
                  'size-6 text-brand-900 transition-transform duration-200 delay-75 ease-in',
                  {
                    ['rotate-180']: open,
                  }
                )}
              />
            </Disclosure.Button>
            <Disclosure.Panel className="my-4!">
              <Component {...product} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    ))}
  </div>
);
