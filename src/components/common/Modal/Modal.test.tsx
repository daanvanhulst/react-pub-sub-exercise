import React from 'react';
import { render, screen } from '@testing-library/react';
import { Modal, ModalProps } from './Modal';
import ReactModal from 'react-modal';
import { describe, it, expect } from 'vitest';

ReactModal.setAppElement(document.body);

const TestComponent: React.FC<Partial<ModalProps>> = (props) => {
  const [isOpen, setIsOpen] = React.useState(props.isOpen ?? true);
  const handleOpen = () => setIsOpen(!isOpen);

  return (
    <Modal isOpen={isOpen} onClose={handleOpen} {...props}>
      <p>Modal content</p>
    </Modal>
  );
};

describe('Modal', () => {
  it('renders title correct', () => {
    render(<TestComponent title="App" />);
    expect(screen.getByText('App')).toBeInTheDocument();
  });

  it('renders title not when closed', () => {
    render(<TestComponent isOpen={false} title="App" />);
    expect(screen.queryByText('App')).not.toBeInTheDocument();
  });
});
