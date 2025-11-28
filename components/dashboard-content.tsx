"use client";

import { useState, useEffect } from "react";
import { ExpenseForm } from "@/components/expense-form";
import { ExpenseTable, Expense } from "@/components/expense-table";
import { SpendingChart } from "@/components/spending-chart";
import { StreakCounter } from "@/components/streak-counter";
import { ActivityGraph } from "@/components/activity-graph";
import { createClient } from "@/utils/supabase/client";
import { motion } from "framer-motion";

export function DashboardContent() {
    const [expenses, setExpenses] = useState<Expense[]>([]);

    useEffect(() => {
        const fetchExpenses = async () => {
            const supabase = createClient();
            const { data: { user } } = await supabase.auth.getUser();
            console.log("User Metadata:", user?.user_metadata);

            const { data, error } = await supabase.from('expenses').select('*').order('date', { ascending: false });

            if (error) {
                console.error('Error fetching expenses:', error);
            } else if (data) {
                // Ensure data matches Expense type. Supabase returns any[], so we might need casting or validation.
                // For now, assuming the DB schema matches the frontend type.
                setExpenses(data as unknown as Expense[]);
            }
        };

        fetchExpenses();
    }, []);

    const handleExpenseAdded = (newExpenses: Expense[]) => {
        setExpenses((prev) => [...newExpenses, ...prev]);
    };

    const handleDeleteExpense = async (id: string | number) => {
        const supabase = createClient();
        const { error } = await supabase.from('expenses').delete().eq('id', id);

        if (error) {
            console.error('Error deleting expense:', error);
            alert('Failed to delete expense');
        } else {
            setExpenses((prev) => prev.filter((e) => e.id !== id));
        }
    };

    return (
        <div className="space-y-8">
            <div className="flex justify-end">
                <StreakCounter expenses={expenses} />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-8"
            >
                <div className="md:col-span-1">
                    <ExpenseForm onExpenseAdded={handleExpenseAdded} />
                </div>
                <div className="md:col-span-2 space-y-8">
                    <SpendingChart expenses={expenses} />

                    <div className="p-6 bg-white dark:bg-zinc-900 rounded-lg shadow-sm border border-zinc-200 dark:border-zinc-800">
                        <h3 className="text-lg font-semibold mb-4 text-zinc-900 dark:text-zinc-100">Consistency</h3>
                        <ActivityGraph expenses={expenses} />
                    </div>

                    <ExpenseTable expenses={expenses} onDelete={handleDeleteExpense} />
                </div>
            </motion.div>
        </div>
    );
}
