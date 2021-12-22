import * as React from 'react';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';

export default function SelectVariants() {
    const [time, setTime] = React.useState('all');

    const handleChange = (event: SelectChangeEvent) => {
        setTime(event.target.value);
    };

    return (
        <div>
            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>

                <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    value={time}
                    onChange={handleChange}
                    label="время"
                >

                    <MenuItem value={"all"}>за все время</MenuItem>
                    <MenuItem value={"hour"}>за час</MenuItem>
                    <MenuItem value={"day"}>за день</MenuItem>
                </Select>
            </FormControl>

        </div>
    );
}
