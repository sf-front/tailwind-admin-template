import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import ClickOutside from '@/components/ClickOutSide';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <ClickOutside onClick={() => setDropdownOpen(false)} className="relative">
      <div
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className="flex items-center gap-4"
      >
        <span className="hidden text-right lg:block">
          <span className="block text-sm font-medium text-black dark:text-white">
            전시 관리
          </span>
          <span className="block text-xs">Back Office</span>
        </span>

        <span className="h-12 w-12 rounded-full">
          <Image
            width={112}
            height={112}
            src={'/logo-header.png'}
            style={{
              width: 'auto',
              height: 'auto',
            }}
            alt="User"
          />
        </span>

      </div>
    </ClickOutside>
  );
};

export default DropdownUser;
