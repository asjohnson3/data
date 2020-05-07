import { Form, Input, Button } from 'semantic-ui-react'
import React, { useState } from 'react';
// import ReactFileReader from 'react-file-reader';

export const ValueForm = ({onNewFilter}) => {
    const [location, setLocation] = useState('');
    const [start_date, setStart] = useState('');
    const [end_date, setEnd] = useState('');
    return (
        <Form>
            <Form.Field>
                <Input 
                    placeholder = "Country: United States" 
                    value = {location} 
                    onChange={e => setLocation(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Input 
                    placeholder = "Start Date: YYYY-MM-DD" 
                    value = {start_date} 
                    onChange={e => setStart(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Input 
                    placeholder = "End Date: YYYY-MM-DD" 
                    value = {end_date} 
                    onChange={e => setEnd(e.target.value)} />
            </Form.Field>
            <Form.Field>
                <Button onClick={async() => {
                    const filter = {location, start_date, end_date};
                    const response = await fetch('/simple_chart', {
                        method : 'Post',
                        headers : {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(filter)
                    })
                    if(response.ok) {
                        console.log('Response Worked!')

                        response.json().then(data => {
                            onNewFilter(data);
                          })
                    }
                }}>
                    Submit
                </Button>
            </Form.Field>
        </Form>
    )
}