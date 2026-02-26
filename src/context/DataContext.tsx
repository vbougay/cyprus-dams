import React, { createContext, useContext, useState, ReactNode } from 'react';
import { availableDataSets, DEFAULT_DATASET_ID } from '@/utils/dataManager';

// Define the context type
interface DataContextType {
  currentDataSetId: string;
  availableDataSets: { id: string; label: string; value: string }[];
  setDataSet: (dataSetId: string) => void;
  isPlaying: boolean;
  setIsPlaying: (isPlaying: boolean) => void;
}

// Create the context with default values
const DataContext = createContext<DataContextType>({
  currentDataSetId: DEFAULT_DATASET_ID,
  availableDataSets: availableDataSets,
  setDataSet: () => {},
  isPlaying: false,
  setIsPlaying: () => {},
});

// Custom hook to use the data context
export const useDataContext = () => useContext(DataContext);

// Provider component
interface DataProviderProps {
  children: ReactNode;
}

export const DataProvider: React.FC<DataProviderProps> = ({ children }) => {
  const [currentDataSetId, setCurrentDataSetId] = useState<string>(DEFAULT_DATASET_ID);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const setDataSet = (dataSetId: string) => {
    if (availableDataSets.some(ds => ds.id === dataSetId)) {
      setCurrentDataSetId(dataSetId);
    }
  };

  return (
    <DataContext.Provider
      value={{
        currentDataSetId,
        availableDataSets,
        setDataSet,
        isPlaying,
        setIsPlaying,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};
