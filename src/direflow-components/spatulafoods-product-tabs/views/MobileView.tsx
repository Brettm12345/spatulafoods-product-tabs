import React, {FC} from 'react';
import {ChevronDownIcon} from '@heroicons/react/solid';
import {Disclosure} from '@headlessui/react';
import classNames from 'classnames';
import {ViewProps} from './types';
import {sections} from '../sections';

export const MobileView: FC<ViewProps> = ({product}) => (
  <div className="mt-4 space-y-2">
    {Object.entries(sections).map(([title, Component]) => (
      <Disclosure key={title}>
        {({open}) => (
          <>
            <Disclosure.Button
              className={classNames(
                'text-md flex items-center justify-between px-4 py-2 w-full text-left text-brand-900 font-bold bg-brand-100 rounded-lg transition-colors ease-in-out',
                'hover:bg-brand-200 focus:outline-none focus-visible:ring focus-visible:ring-brand-500 focus-visible:ring-opacity-75'
              )}
            >
              <span>{title}</span>{' '}
              <ChevronDownIcon
                className={classNames('w-5 h-5 text-brand-900', {
                  ['transform rotate-180']: open,
                })}
              />
            </Disclosure.Button>
            <Disclosure.Panel>
              <Component {...product} />
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    ))}
  </div>
);
