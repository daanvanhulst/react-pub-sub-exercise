import { isObject } from 'lodash-es';
import React, { useId } from 'react';
import { Icon } from '../Icon/Icon';
import styles from './Select.module.scss';

export type SelectOption<T> = { label: string; value: T };

export interface SelectProps<T extends string[] = string[]> {
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  value?: T[number];
  placeholder?: string;
  disabled?: boolean;
  name: string;
  label?: string;
  options: Array<{ label: string; value: T[number] }> | T;
}

export const Select = React.forwardRef<
  HTMLSelectElement,
  SelectProps<string[]>
>((props, ref) => {
  const {
    label,
    onChange,
    name,
    disabled,
    options,
    value,
    placeholder,
    ...restProps
  } = props;
  const id = useId();

  return (
    <div className={styles['o-select']}>
      {label && (
        <label className={styles['o-select__label']} htmlFor={id}>
          {label}
        </label>
      )}
      <div className={styles['o-select__input']}>
        <select
          ref={ref}
          id={id}
          className={styles['o-select__tag']}
          name={name}
          disabled={disabled}
          defaultValue={value ?? ''}
          onChange={onChange}
          {...restProps}
        >
          <option disabled value=''>
            {placeholder}
          </option>
          {options.map((x) => {
            const value = isObject(x) ? x.value : x;
            const label = isObject(x) ? x.label : x;

            return (
              <option key={value} value={value}>
                {label}
              </option>
            );
          })}
        </select>
        <Icon
          name='ChevronDown'
          size={20}
          className={styles['o-select__icon']}
        />
      </div>
    </div>
  );
});
