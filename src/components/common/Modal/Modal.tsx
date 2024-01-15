import React from 'react';
import ReactModal from 'react-modal';
import { Box } from '../Box/Box';
import { Heading } from '..//Heading/Heading';
import { Icon } from '..//Icon/Icon';
import styles from './Modal.module.scss';
import { cn } from '../../../helpers/cn';

interface ModalActionsProps {
  children: React.ReactNode;
  spaceBetween?: boolean;
}

const ModalActions: React.FC<ModalActionsProps> = ({
  children,
  spaceBetween,
}) => {
  return (
    <footer
      className={cn(styles['o-modal__actions'], {
        [styles['o-modal__actions--space-between']]: spaceBetween,
      })}
    >
      {children}
    </footer>
  );
};

export type ModalCommonProps = Pick<ModalProps, 'onClose' | 'isOpen'>;

export interface ModalProps {
  title?: string;
  isOpen: boolean;
  onClose?: () => void;
  options?: React.ComponentPropsWithRef<typeof ReactModal>;
  children: React.ReactNode;
}

export const Modal: React.FC<ModalProps> & {
  Actions: React.FC<ModalActionsProps>;
} = (props) => {
  const { children, isOpen, onClose, options, title, ...restProps } = props;

  return (
    <ReactModal
      ariaHideApp={false}
      isOpen={isOpen}
      overlayClassName={styles['o-modal']}
      className={styles['o-modal__aligner']}
      onRequestClose={onClose}
      shouldCloseOnEsc
      shouldFocusAfterRender
      shouldCloseOnOverlayClick
      shouldReturnFocusAfterClose
      {...options}
    >
      <Box rounded>
        <main
          className={styles['o-modal__content']}
          aria-describedby={title}
          {...restProps}
        >
          {onClose && (
            <button
              onClick={onClose}
              className={styles['o-modal__close-button']}
              aria-label={`Sluit ${title ?? 'modal'}`}
              data-testid='closeModal'
            >
              <Icon name='X' />
            </button>
          )}
          {title && (
            <Heading size='h1' as='h2' className={styles['o-modal__title']}>
              {title}
            </Heading>
          )}
          {children}
        </main>
      </Box>
    </ReactModal>
  );
};

Modal.Actions = ModalActions;
