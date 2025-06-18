import { FC, useState } from 'react';

export type Tab = {
  label: string;
  content: React.ReactNode;
  disabled?: boolean;
};

export type TabsProps = {
  tabs: Tab[];
};

const Tabs: FC<TabsProps> = ({ tabs }) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const handleClick = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 dark:text-gray-400">
        {tabs.map((tab, index) => (
          <li className="me-2" key={index}>
            {tab.disabled ? (
              <span className="inline-block px-4 py-3 text-gray-400 cursor-not-allowed dark:text-gray-500">
                {tab.label}
              </span>
            ) : (
              <button
                onClick={() => handleClick(index)}
                className={`inline-block px-4 py-3 rounded-lg
                  ${
                    index === activeIndex
                      ? 'text-white bg-blue-600'
                      : 'hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-white'
                  }
                `}
                aria-current={index === activeIndex ? 'page' : undefined}
              >
                {tab.label}
              </button>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-4">{tabs[activeIndex]?.content}</div>
    </>
  );
};

export default Tabs;
