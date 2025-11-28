import React from 'react';
import { Expense } from './expense-table';
import { subDays, format, isSameDay, parseISO } from 'date-fns';

interface ActivityGraphProps {
    expenses: Expense[];
}

export function ActivityGraph({ expenses }: ActivityGraphProps) {
    // Generate last 28 days
    const days = Array.from({ length: 28 }, (_, i) => {
        const date = subDays(new Date(), 27 - i);
        return date;
    });

    const getIntensity = (date: Date) => {
        const dayExpenses = expenses.filter(e => isSameDay(parseISO(e.date), date));
        if (dayExpenses.length === 0) return 0;
        return 1; // Simple binary for now: 0 or 1
    };

    return (
        <div className="grid grid-cols-7 gap-1 w-full max-w-[200px]">
            {days.map((date, i) => {
                const active = getIntensity(date) > 0;
                return (
                    <div
                        key={i}
                        title={`${format(date, 'MMM d')}: ${active ? 'Spent' : 'No spend'}`}
                        className={`
                            aspect-square rounded-sm transition-colors
                            ${active
                                ? 'bg-emerald-500 dark:bg-emerald-500'
                                : 'bg-zinc-100 dark:bg-zinc-800'
                            }
                        `}
                    />
                );
            })}
        </div>
    );
}
