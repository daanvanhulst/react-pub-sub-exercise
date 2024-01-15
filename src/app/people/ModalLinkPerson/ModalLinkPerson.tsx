import React, { useEffect, useState } from 'react';
import { Button } from '../../../components/common/Button/Button';
import {
  Modal,
  ModalCommonProps,
} from '../../../components/common/Modal/Modal';
import { Select } from '../../../components/common/Select/Select';
import { getPeople } from '../../../FakeBackend';
import { Person } from '../Person/Person.interface';

interface ModalDeleteAssetProps extends ModalCommonProps {
  onLink: (personId: string) => void;
}

export const ModalLinkPerson: React.FC<ModalDeleteAssetProps> = ({
  isOpen,
  onLink,
  onClose,
}) => {
  // TODO: TASK-0001 get people from shared state
  const [people, setPeople] = useState<Person[]>([]);
  useEffect(() => {
    async function fetchData() {
      setPeople(await getPeople());
    }
    fetchData();
  }, []);

  const [linkedPerson, setLinkedPerson] = useState<string>();
  const handleLink = () => {
    onLink(linkedPerson!);
    setLinkedPerson('');
    if (onClose) onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} title={'Link person'}>
      <form>
        <Select
          label='Select person to link'
          name='linkPerson'
          onChange={(event) => {
            setLinkedPerson(event.target.value);
          }}
          options={people.map((x) => ({ value: x.id, label: x.name }))}
        />
        <Modal.Actions>
          <Button variant='ghost-danger' onClick={onClose}>
            Annuleren
          </Button>
          <Button variant='danger' onClick={handleLink}>
            Linken
          </Button>
        </Modal.Actions>
      </form>
    </Modal>
  );
};
