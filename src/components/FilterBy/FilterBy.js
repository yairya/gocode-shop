import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import ProductContext from '../ProductContext/ProductContext'
import * as Constants from "../../constants"

export default function SelectSmall() {
  const [option, setOption] = React.useState('');
  const {categories, setCategory} = React.useContext(ProductContext);

  const handleChange = (event) => {
    setOption(event.target.value);
    setCategory(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 150 }} size="small">
      <InputLabel id="input-lable-filter-by">Filter by:</InputLabel>
      <Select
        labelId="filter-by-select"
        id="filter-by-select"
        value={option}
        label="Filter by"
        onChange={handleChange}>
        <MenuItem key={0} value={Constants.ALL_CATEGORIES}>{Constants.ALL_CATEGORIES}</MenuItem>
        {categories.map( (option,index) => <MenuItem key={index+1} value={option}>{option}</MenuItem>)}
      </Select>
    </FormControl>
  );
}

