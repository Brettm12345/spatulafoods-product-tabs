import React, {FC} from 'react';
import {Tab} from '@headlessui/react';
import classNames from 'classnames';
import {ViewProps} from './types';
import {sections} from '../sections';

export const DesktopView: FC<ViewProps> = ({product}) => (
  <Tab.Group>
    <Tab.List className="flex my-10 p-1 bg-brand-100 rounded-xl space-x-1">
      {Object.keys(sections).map(tab => (
        <Tab
          key={tab}
          className={({selected}) =>
            classNames(
              'py-2.5 w-full text-brand-700 text-sm font-bold tracking-wider leading-5 rounded-xl uppercase transition-colors ease-linear',
              'focus:outline-none focus:ring-2 ring-white ring-opacity-60 ring-offset-2 ring-offset-brand-400',
              selected ? 'bg-brand-500 text-white' : 'hover:bg-brand-500/20'
            )
          }
        >
          {tab}
        </Tab>
      ))}
    </Tab.List>
    <Tab.Panels>
      {Object.entries(sections).map(([title, Component]) => (
        <Tab.Panel key={title}>
          <Component {...product} />
        </Tab.Panel>
      ))}
    </Tab.Panels>
  </Tab.Group>
);
