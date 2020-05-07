import React from 'react';
import { List, Header, Item } from 'semantic-ui-react';

export const Values = ({values}) => {
    console.log(values)
    console.log(values.r)
    return (
        <List>
            {values.map(value => {
                return(
                    <List.Item key={value.date}>
                        <Header>{value.date}</Header>
                        <Item>{value.total_cases}</Item>
                    </List.Item>
                );
            })}
        </List>
    );
};
