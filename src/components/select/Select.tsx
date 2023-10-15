import * as RadixSelect from '@radix-ui/react-select';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import { FC, useState } from 'react';
import cl from './Select.module.scss';
import { Option } from 'src/store/services/filter.ts';

type Props = {
  value: string;
  options: Array<Option>;
  onChange: (value: string) => void;
};

export const Select: FC<Props> = ({ options, onChange, value }) => {
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
      onOpenChange={(e) => setOpen(e)}
      onValueChange={(e) => onValueChange(e)}
      value={value}
    >
      <RadixSelect.Trigger className={cl.trigger}>
        <RadixSelect.Value placeholder='Filter By Region' />
        <RadixSelect.Icon className='SelectIcon'>
          <ChevronDownIcon />
        </RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          className={cl.content}
          position='popper'
          sideOffset={5}
          hideWhenDetached={true}
        >
          <RadixSelect.ScrollUpButton className='SelectScrollButton'>
            <ChevronUpIcon />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport className='SelectViewport'>
            <RadixSelect.Group>
              {options.map((o) => (
                <RadixSelect.Item
                  value={o.value}
                  key={o.value}
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
