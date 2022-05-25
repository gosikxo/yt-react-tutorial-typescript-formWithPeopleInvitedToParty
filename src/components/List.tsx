import React from 'react'

interface IProps {
    people: {
        name: string,
        age: number,
        url: string,
        note?: string
    }[]
}

export const List: React.FC<IProps> = ({ people }) => {
    return (
        <div>List</div>
    )
}
