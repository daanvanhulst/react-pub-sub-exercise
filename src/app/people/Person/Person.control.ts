import { cloneDeep } from 'lodash-es';
import { PubSub } from '../../../helpers/pubSub';
import { Person } from './Person.interface';

export type PersonSubscriberFn = (
  next: Person | null,
  previous: Person | null
) => void;
export type PersonMiddlewareFn = (asset: Person) => Person;

export class PersonControl extends PubSub<PersonSubscriberFn> {
  constructor(private person: Person) {
    super();
  }

  public patch(...callbacks: Array<PersonMiddlewareFn>) {
    const prev = cloneDeep(this.person);
    let next = cloneDeep(this.person);

    callbacks.forEach((callback) => (next = callback(next)));

    this.person = next;
    super.notify(next, prev);
  }

  public delete(...callbacks: Array<(asset: Person) => void>) {
    callbacks.forEach((callback) => callback(this.person));
    super.notify(null, this.person);
  }

  public get() {
    return this.person;
  }

  public notify() {
    super.notify(this.person, null);
  }
}
