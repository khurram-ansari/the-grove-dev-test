import { Button } from '@/components/ui/button';

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { ChevronDown } from 'lucide-react';
import Image from 'next/image';

export default function LangSelector() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          className="cursor-pointer p-0 hover:bg-transparent hover:text-white hover:outline"
          size={'sm'}
          asChild
        >
          <div>
            <ChevronDown className="mr-2" />
            <div className="flex items-center gap-2">
              <Image
                width={33}
                height={22}
                alt=""
                src="/flags_icons/uk_flag.png"
              ></Image>
              <span>English</span>
            </div>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-2">
          <div className="grid grid-cols-3 items-center gap-4">hello</div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
