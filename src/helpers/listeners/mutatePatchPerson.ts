/* eslint-disable @typescript-eslint/no-explicit-any */
import { PersonSubscriberFn } from '../../app/People/Person/Person.control';
import { patchPerson } from '../../FakeBackend';
import { Debounce } from '../debounce';

const debounce = new Debounce();

export const mutatePatchPerson: PersonSubscriberFn = async (next, prev) => {
  if (!next || !prev) return;

  await debounce.run(next, patchPerson);

  console.log('done with mutating, returning');

  return next;
};
