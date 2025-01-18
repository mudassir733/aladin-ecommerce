import React from 'react';
export default function StepIndicator  ({ step })  {
    const steps = [
      { id: 1, label: 'Address', key: 'address' },
      { id: 2, label: 'Shipping', key: 'shipping' },
      { id: 3, label: 'Payment', key: 'payment' },
      { id: 4, label: 'Review', key: 'review' },
    ];
  
    return (
      <div className="w-full bg-white shadow-sm py-4">
        <div className="max-w-7xl mx-auto flex justify-center space-x-4 items-baseline">
          {steps.map((s, index) => (
            <React.Fragment key={s.id}>
              <div className="text-sm font-medium text-gray-500 flex flex-col items-center">
                <div
                  className={`w-6 h-6 flex items-center justify-center rounded-full ${
                    s.key === step ? 'bg-[#0B8BA6] text-white' : 'bg-gray-300'
                  }`}
                >
                  {s.id}
                </div>
                <span className="mt-2">{s.label}</span>
              </div>
              {index < steps.length - 1 && (
                <div className="w-6 border-t-2 border-gray-300"></div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    );
  };
  