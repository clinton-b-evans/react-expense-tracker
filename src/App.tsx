import { useState } from 'react'
import ExpenseList from './expense-tracker/components/ExpenseList'

const App = () => {
  const [expenses, setExpenses] = useState([
    { id: 1, description: 'Groceries', amount: 50, category: 'Food' },
    { id: 2, description: 'Gas', amount: 30, category: 'Transportation' },
    {
      id: 3,
      description: 'Movie tickets',
      amount: 20,
      category: 'Entertainment',
    },
    { id: 4, description: 'Restaurant', amount: 40, category: 'Food' },
  ])

  return (
    <div>
      <ExpenseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id != id))}
      />
    </div>
  )
}

export default App
