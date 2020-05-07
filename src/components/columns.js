import React from 'react';
import { Form, Checkbox } from "semantic-ui-react";
 
export const Columns = ({values}) => {
    let columns = values["0"]
    // const [location, setLocation] = useState('');
    console.log(columns)
    if(!columns){
        return (
            null
        )
    }
   return (
       <Form>
            {Object.keys(columns).map((key) => (
                <Form.Field>
                    <label>{key}</label>
                    <input 
                        placeholder = {key}
                        value = {key} 
                        onChange={e => e.target.value} 
                        // onChange={e => setLocation(e.target.value)} 
                        />
                </Form.Field>
                ))}
        </Form>
   );
};