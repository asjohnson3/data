import React from 'react';
import { Checkbox } from "semantic-ui-react";

export const ColumnCheckboxes = ({values}) => {
    let columns = values["0"]
    console.log(columns)
    if(!columns){
        return (
            null
        )
    }
   return (
       <React.Fragment>
            {Object.keys(columns).map((key) => (
                <Checkbox key = {key} label={<label>{key}</label>}/>

                ))}
        </React.Fragment>
   );
};


                