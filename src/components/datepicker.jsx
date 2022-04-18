import React,{useState} from 'react';
import { Button } from '@mui/material';
import "./datepicker.css"
import Search from './Search'

function DatePick(){
    const [showSearch, setShowSearch] = useState(false)
    return (
        <>
        <br />
            <Button style={{backgroundColor: "white", color: "black"}} className='search_Btn' variant="contained" color="primary" onClick={() => setShowSearch(!showSearch)}>{showSearch ? "Hide" : "Search Dates"}</Button>
            {showSearch && <Search/>}
        </>
    )
}

export default DatePick;