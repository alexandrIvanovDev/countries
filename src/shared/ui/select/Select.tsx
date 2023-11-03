import { FC, useState } from 'react';

import { Option } from '@/shared/types';
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import * as RadixSelect from '@radix-ui/react-select';

import cl from './Select.module.scss';

type Props = {
  value: string;
  options: Array<Option>;
  onValueChange: (value: string) => void;
};

export const Select: FC<Props> = ({ onValueChange, options, value }) => {
  const [open, setOpen] = useState(false);

  return (
    <RadixSelect.Root
      open={open}
      value={value}
      onValueChange={(e) => onValueChange(e)}
      onOpenChange={() => setOpen((prev) => !prev)}
    >
      <RadixSelect.Trigger className={cl.trigger}>
        <RadixSelect.Value placeholder='Filter By Region' />
        <RadixSelect.Icon>{open ? <ChevronUpIcon /> : <ChevronDownIcon />}</RadixSelect.Icon>
      </RadixSelect.Trigger>
      <RadixSelect.Portal>
        <RadixSelect.Content
          sideOffset={5}
          position='popper'
          className={cl.content}
          hideWhenDetached={true}
        >
          <RadixSelect.Viewport>
            <RadixSelect.Group>
              {options.map((o) => (
                <RadixSelect.Item key={o.value} value={o.value} className={cl.item}>
                  <RadixSelect.ItemText>{o.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              ))}
            </RadixSelect.Group>
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
};
