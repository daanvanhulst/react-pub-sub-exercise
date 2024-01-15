import { PersonControl } from '../app/People/Person/Person.control';
import { mutateCreatePerson } from './listeners/mutateCreatePerson';
import { mutatePatchPerson } from './listeners/mutatePatchPerson';
import { mutateDeletePerson } from './listeners/mutateDeletePerson';
import { drawPerson } from './listeners/drawPerson';

export const setSubscribers = (assetControl: PersonControl) => {
  const listeners = [
    drawPerson,
    mutateCreatePerson,
    mutatePatchPerson,
    mutateDeletePerson,
  ];

  listeners.forEach((l) => assetControl.subscribe(l));
};
