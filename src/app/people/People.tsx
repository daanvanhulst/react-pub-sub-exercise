import { useEffect } from 'react';
import { getPeople } from '../../FakeBackend';
import { setSubscribers } from '../../helpers/setSubscribers';
import { PersonControl } from './Person/Person.control';
import { usePersonControlsStore } from '../../state/store';

export const People: React.FC = () => {
  const { setControls: setPersonControls } = usePersonControlsStore(
    (state) => state
  );

  // TODO: TASK-0001 get people from shared state
  useEffect(() => {
    async function fetchData() {
      const peopleData = await getPeople();

      const controls = peopleData.map((x) => {
        const control = new PersonControl(x);
        setSubscribers(control);
        control.notify();
        return control;
      });

      setPersonControls(controls);
    }

    fetchData();
  }, []);

  return (
    <div>
      <div id='people' className='grid grid-cols-4 gap-4'></div>
    </div>
  );
};
