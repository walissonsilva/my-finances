import React, { createContext, FormEvent, useContext, useEffect, useMemo, useState } from 'react';

import expenses from '../data/expenses';
import gains from '../data/gains';

import { IOption } from '../components/SelectInput';

interface ISelectsContext {
  monthSelected: string;
  handleMonthChange: (e: FormEvent<HTMLSelectElement>) => void;
  yearSelected: string;
  handleYearChange: (e: FormEvent<HTMLSelectElement>) => void;
  yearOptions: IOption[];
  monthOptions: IOption[];
  totalExpensesOnMonth: number;
  totalGainsOnMonth: number;
  balanceOnMonth: number;
}

const SelectsContext = createContext({} as ISelectsContext);

const SelectMonthYearProvider: React.FC = ({ children }) => {
  const [monthSelected, setMonthSelected] = useState('Janeiro');
  const [yearSelected, setYearSelected] = useState('2020');

  const monthMap = useMemo(() => {
    return ['Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ];
  }, []);
  
  const yearOptions: IOption[] = useMemo(() => {
    const options: IOption[] = [];

    // Loading yearOptions to Select
    expenses.forEach(expense => {
      const date = new Date(expense.date);
      const year = String(date.getFullYear());

      if (options.findIndex(y => y.value === year) === -1) {
        options.push({ label: year, value: year });
      }
    });

    return options;
  }, []);
  
  const monthOptions: IOption[] = useMemo(() => {
    const options: IOption[] = [];

    // Loading monthOptions to Select
    expenses.forEach(expense => {
      const date = new Date(expense.date);
      const month = date.getMonth();
      const monthName = monthMap[month];

      if (options.findIndex(m => m.value === monthName) === -1) {
        options.push({ label: monthName, value: monthName });
      }
    });

    return options;
  }, [monthMap]);

  const totalExpensesOnMonth = useMemo(() => {
    let total: number = 0;

    expenses.forEach((expense) => {
      const date = new Date(expense.date);
      const year = date.getFullYear();
      const month = date.getMonth();

      if (String(year) === yearSelected && monthMap[month] === monthSelected) {
        total += Number(expense.amount);
      }
    });

    return total;
  }, [monthMap, monthSelected, yearSelected]);

  const totalGainsOnMonth = useMemo(() => {
    let total: number = 0;

    gains.forEach((gain) => {
      const date = new Date(gain.date);
      const year = date.getFullYear();
      const month = date.getMonth();

      if (String(year) === yearSelected && monthMap[month] === monthSelected) {
        total += Number(gain.amount);
      }
    });

    return total;
  }, [monthMap, monthSelected, yearSelected]);

  const balanceOnMonth = useMemo(() => {
    return totalGainsOnMonth - totalExpensesOnMonth;
  }, [totalGainsOnMonth, totalExpensesOnMonth]);

  const handleMonthChange = (e: FormEvent<HTMLSelectElement>) => {
    setMonthSelected(e.currentTarget.value);

    localStorage.setItem('@my-finances:monthSelected', e.currentTarget.value);
  }

  const handleYearChange = (e: FormEvent<HTMLSelectElement>) => {
    setYearSelected(e.currentTarget.value);

    localStorage.setItem('@my-finances:yearSelected', e.currentTarget.value);
  }

  useEffect(() => {
    const month = localStorage.getItem('@my-finances:monthSelected');
    const year = localStorage.getItem('@my-finances:yearSelected');

    if (month) {
      setMonthSelected(month);
    }

    if (year) {
      setYearSelected(year);
    }
  }, []);

  return (
    <SelectsContext.Provider value={{
      monthSelected,
      handleMonthChange,
      yearSelected,
      handleYearChange,
      yearOptions,
      monthOptions,
      totalExpensesOnMonth,
      totalGainsOnMonth,
      balanceOnMonth,
    }}>
      { children }
    </SelectsContext.Provider>
  )
}

export default SelectMonthYearProvider;

export function useSelectMonthYear() {
  const context = useContext(SelectsContext);

  if (!context) {
    throw Error('SelectsContext must be used within a SelectMonthYearProvider');
  }

  const {
    monthSelected,
    handleMonthChange,
    yearSelected,
    handleYearChange,
    yearOptions,
    monthOptions,
    totalExpensesOnMonth,
    totalGainsOnMonth,
    balanceOnMonth,
  } = context;

  return {
    monthSelected,
    handleMonthChange,
    yearSelected,
    handleYearChange,
    yearOptions,
    monthOptions,
    totalExpensesOnMonth,
    totalGainsOnMonth,
    balanceOnMonth,
  };
}