import React, { useState } from 'react'
import { ImportsNotUsedAsValues } from 'typescript'
import { IState as Props } from '../App'

interface IProps {
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
  people: Props["people"]
}

export const AddToList: React.FC<IProps> = ({ setPeople, people }) => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: ""
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input,
      //e.target.name to np. name, age itd.
      [e.target.name]: e.target.value
    })
  }

  const handleClick = (): void => {
    if (
      !input.name ||
      !input.age ||
      !input.img
    ) {
      return
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.img,
        note: input.note
      }
    ]);

    setInput({
      name: "",
      age: "",
      note: "",
      img: ""
    })
  }

  return (
    <div className='AddToList'>
      <input
        type="text"
        placeholder='Name'
        className='AddToList-input'
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder='Age'
        className='AddToList-input'
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder='Image Url'
        className='AddToList-input'
        value={input.img}
        onChange={handleChange}
        name="img"
      />
      <textarea
        placeholder='Notes'
        className='AddToList-input'
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button
        className='AddToList-btn'
        onClick={handleClick}
      >
        Add to List
      </button>
    </div>
  )
}
