import React, { useState } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'
import { IState as Props } from 'pages/Home'

interface IProps {
  people: Props['people']
  setPeople: React.Dispatch<React.SetStateAction<Props['people']>>
}

function AddToList({ people, setPeople }: IProps) {
  const [input, setInput] = useState({
    name: '',
    age: '',
    note: '',
    image: ''
  })

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const handleClick = () => {
    if (!input.name || !input.age || !input.image) {
      return
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.image,
        note: input.note
      }
    ])

    setInput({
      name: '',
      age: '',
      note: '',
      image: ''
    })
  }

  return (
    <Segment inverted color="violet">
      <Form inverted>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            type="text"
            placeholder="Name"
            value={input.name}
            onChange={handleChange}
            name="name"
          />

          <Form.Input
            fluid
            label="Age"
            type="number"
            placeholder="Age"
            value={input.age}
            onChange={handleChange}
            name="age"
          />

          <Form.Input
            fluid
            label="Image URL"
            type="text"
            placeholder="Image URL"
            value={input.image}
            onChange={handleChange}
            name="image"
          />
        </Form.Group>

        <Form.TextArea
          label="Note"
          placeholder="Note"
          value={input.note}
          onChange={handleChange}
          name="note"
        />

        <div className="flex justify-end">
          <Button color="yellow" onClick={handleClick}>
            Add to List
          </Button>
        </div>
      </Form>
    </Segment>
  )
}

export default AddToList
