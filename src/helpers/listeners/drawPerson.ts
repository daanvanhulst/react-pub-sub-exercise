import { PersonSubscriberFn } from '../../app/People/Person/Person.control';
import { PersonTile } from '../../app/People/Person/Person';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { Person } from '../../app/People/Person/Person.interface';

/**
 * NOTE: SHOULD NOT BE USED LIKE THIS IN A NORMAL APPLICATION
 *
 * This is only used to mimic a real life example where something needs to be rendered outside of the React context.
 * For example data on a Open layers map. But since we do not want make this Exercise more complex, we have chosen to use this
 * quick workaround.
 *
 */
export const drawPerson: PersonSubscriberFn = async (next) => {
  return new Promise<Person | null>((resolve) => {
    setTimeout(() => {
      if (!next) return resolve(null);

      const container = document.getElementById('people')!;

      const child = document.getElementById(next.id);
      if (child?.parentElement) {
        child.parentElement?.removeChild(child);
      }

      const newDiv = document.createElement('div');
      newDiv.setAttribute('id', next.id);
      container.appendChild(newDiv);

      const element = React.createElement(PersonTile, { person: next });
      const root = createRoot(newDiv);

      root.render(element);

      return resolve(next);
    }, 500);
  });
};
