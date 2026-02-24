
import React from 'react';

interface QuickActionProps {
  label: string;
  onClick: (label: string) => void;
}

const QuickAction: React.FC<QuickActionProps> = ({ label, onClick }) => {
  return (
    <button
      onClick={() => onClick(label)}
      className="px-4 py-2 bg-white border border-blue-100 rounded-full text-blue-700 text-xs font-medium 
      hover:bg-blue-50 hover:border-blue-300 transition-all duration-200 shadow-sm whitespace-nowrap"
    >
      {label}
    </button>
  );
};

export default QuickAction;
