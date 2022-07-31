import React from 'react'
import * as C from './styles'
import { formatcurrentMonth } from '../../helpers/dateFilter'

type Props = {
    currentMonth:string;
    onMonthChange: (newMonth:string) => void;
    income:number;
    expense:number;
}

const InfoArea = ({currentMonth, onMonthChange, income, expense}:Props) => {

    const handlePrevMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1)
        currentDate.setMonth(currentDate.getMonth() - 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }

    const handleNextMonth = () => {
        let [year, month] = currentMonth.split('-')
        let currentDate = new Date(parseInt(year), parseInt(month)-1, 1)
        currentDate.setMonth(currentDate.getMonth() + 1)
        onMonthChange(`${currentDate.getFullYear()}-${currentDate.getMonth()+1}`)
    }

  return (
    <C.Container>
        <C.MonthArea>
            <C.MonthArrow onClick={handlePrevMonth}>⬅️</C.MonthArrow>
            <C.MonthTitle>{formatcurrentMonth(currentMonth)}</C.MonthTitle>
            <C.MonthArrow onClick={handleNextMonth}>➡️</C.MonthArrow>
        </C.MonthArea>
        <C.ResumeArea>
            
        </C.ResumeArea>
    </C.Container>
  )
}

export default InfoArea