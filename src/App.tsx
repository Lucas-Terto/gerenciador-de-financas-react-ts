import React, {useState, useEffect} from 'react';
import * as C from './App.styles'
import { Category } from './types/Category'; 
import { Item } from './types/Item';
import { categories } from './data/categories';
import { items } from './data/items';
import { getCurrentMonth, filterListByMonth } from './helpers/dateFilter'
import TableArea from './components/TableArea';

function App() {

  const [list, setList] = useState(items)
  const [filteredList, setFilteredList] = useState<Item[]>([])
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth)

  useEffect(() => {

    setFilteredList(filterListByMonth(list, currentMonth))

  }, [list, currentMonth])

  return (
    <C.Container className='App'>
      <C.Header>
        <C.HeaderText>Gerenciador de Finanças</C.HeaderText>
      </C.Header>
      <C.Body>
        
        {/**área de informações */}

        {/**área de inserção */}

        <TableArea list={filteredList}/>
        
      </C.Body>
    </C.Container>
  );
}

export default App;
