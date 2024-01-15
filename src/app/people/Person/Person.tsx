import { cn } from '../../../helpers/cn';
import { Person } from './Person.interface';
import styles from './Person.module.scss';
import { ModalLinkPerson } from '../ModalLinkPerson/ModalLinkPerson';
import { useToggle } from 'react-use';
import { getPeople } from '../../../FakeBackend';
import { useContext, useEffect, useState } from 'react';
import { PersonMiddlewareFn } from './Person.control';
import { PersonControlsContext } from '../People';
import { usePersonControlsStore } from '../../../state/store';

interface PersonProps {
  person: Person;
}

const middlewareLinkPerson = (personToLink: Person): PersonMiddlewareFn => {
  return (person: Person) => {
    console.log('ik kom in de middleware');
    return {
      ...person,
      linkedPeople: [...person.linkedPeople, personToLink.id],
    };
  };
};

export const PersonTile: React.FC<
  PersonProps & React.ButtonHTMLAttributes<HTMLDivElement>
> = ({ person, ...props }) => {
  const [modalLinkPersonIsOpen, toggleModalLinkPerson] = useToggle(false);
  const [people, setPeople] = useState<Person[]>([]);
  const personControls = usePersonControlsStore(
    (state) => state.personControls
  );

  // TODO: TASK-0001 get people from shared state
  useEffect(() => {
    async function fetchData() {
      setPeople(await getPeople());
    }
    fetchData();
  }, []);

  const handleLink = async (id: string) => {
    console.log('TASK-0002 link people together', id);
    // TODO: TASK-0002 link people together

    // CODE Daan
    if (person.id === id) return;

    const person2 = people.find((x) => x.id === id);
    if (!person2) throw Error('Could not link to unknown person');
    const person1Control = personControls.find((x) => x.get().id === person.id);
    const person2Control = personControls.find(
      (x) => x.get().id === person2.id
    );

    person1Control?.patch(middlewareLinkPerson(person2));
    person2Control?.patch(middlewareLinkPerson(person));
    // EINDE CODE Daan
  };

  return (
    <div {...props} className={cn(styles['person'])}>
      <div className='px-1 sm:px-0'>
        <h3 className='text-base font-semibold leading-7 text-gray-900'>
          Person Information
        </h3>
      </div>
      <div className='mt-6 border-t border-gray-100'>
        <dl className='divide-y divide-gray-100'>
          {/* TODO: TASK-0003 get rid off duplicate code in classNames */}
          <div className='px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Full name
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {person.name}
            </dd>
          </div>
          <div className='px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Role
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {person.role}
            </dd>
          </div>
          <div className='px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Email address
            </dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {person.email}
            </dd>
          </div>
          <div className='px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>Age</dt>
            <dd className='mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0'>
              {person.age}
            </dd>
          </div>
          <div className='px-1 py-1 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0'>
            <dt className='text-sm font-medium leading-6 text-gray-900'>
              Linked
            </dt>
            <dd className='mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0'>
              {
                <ul className='divide-y divide-gray-100 rounded-md border border-gray-200'>
                  {person.linkedPeople.map((x) => (
                    <li
                      className='flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6'
                      key={x}
                    >
                      {people.find((y) => x === y.id)?.name}
                    </li>
                  ))}
                </ul>
              }
            </dd>
            <button
              className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
              onClick={toggleModalLinkPerson}
            >
              Link person
            </button>
          </div>
        </dl>
      </div>
      <ModalLinkPerson
        isOpen={modalLinkPersonIsOpen}
        onLink={handleLink}
        onClose={toggleModalLinkPerson}
      />
    </div>
  );
};
