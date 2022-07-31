import React, {useState, useEffect} from 'react';
import * as C from './App.styles'
import { Category } from './types/Category'; 
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import TableArea from './components/TableArea';
import InfoArea from './components/InfoArea';

function App() {

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth)
  const [income, setIncome] = useState(0)
  const [expense, setExpense] = useState(0)

  useEffect(() => {

    setFilteredList(filterListByMonth(list, currentMonth))

  }, [list, currentMonth])

  const handleMonthChange = (newMonth:string) => {
    setCurrentMonth(newMonth)
  }

  return (
    <C.Container className='App'>
      <C.Header>
        <C.HeaderText>Gerenciador de Finanças</C.HeaderText>
      </C.Header>
      <C.Body>
        
        <InfoArea 
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income} 
          expense={expense} 
        />

        {/**área de inserção */}

        <TableArea list={filteredList}/>
        
      </C.Body>
    </C.Container>
  );
}

export default App;
