import { FC, useState } from 'react';

import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as RadixSelect from '@radix-ui/react-select';
import { Option } from 'store/services/filter.ts';

import cl from './Select.module.scss';

type Props = {
  onChange: (value: string) => void;
  options: Array<Option>;
  value: string;
};

export const Select: FC<Props> = ({ onChange, options, value }) => {
  const [open, setOpen] = useState(false);

  const onValueChange = (value: string) => {
    if (value === 'all') {
      onChange('');
    } else {
      onChange(value);
    }
  };

  return (
    <RadixSelect.Root
      open={open}
      value={value}
      onOpenChange={(e) => setOpen(e)}
      onValueChange={(e) => onValueChange(e)}
    >
      <RadixSelect.Trigger className={cl.trigger}>
        <RadixSelect.Value placeholder='Filter By Region' />
        <RadixSelect.Icon className='SelectIcon'>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          sideOffset={5}
          position='popper'
          className={cl.content}
          hideWhenDetached={true}
        >
          <RadixSelect.ScrollUpButton className='SelectScrollButton'>
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className='SelectViewport'>
            <RadixSelect.Group>
              {options.map((o) => (
                <RadixSelect.Item
                  key={o.value}
                  value={o.value}
                  className={cl.item}
                >
                  <RadixSelect.ItemText>{o.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Group>
          </RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton className='SelectScrollButton'>
            <ChevronDownIcon />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};
