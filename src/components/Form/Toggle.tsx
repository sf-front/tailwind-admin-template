import React, { useState } from 'react';

interface ToggleProps {
  isChcked?: boolean;
  label?: string;
  onChange?: (state: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ isChcked = false, label, onChange }) => {
  // useState
  const [isOn, setIsOn] = useState<boolean>(isChcked);

  // handler
  const handleToggle = () => {
    setIsOn(!isOn);
    if (onChange) {
      onChange(!isOn);
    }
  };

  return (
    <div className="mb-4">
      {label && <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>}
      <div
        className={`w-14 h-8 flex items-center bg-gray-300 rounded-full p-1 cursor-pointer ${isOn ? 'bg-primary' : 'bg-body'}`}
        onClick={handleToggle}
      >
        <div className={`bg-white w-6 h-6 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? 'translate-x-6' : ''}`}></div>
      </div>
    </div>
  );
};

export default Toggle;
