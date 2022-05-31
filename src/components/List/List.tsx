import { Container, Grid, Image } from 'semantic-ui-react'
interface IProps {
  people: {
    age: number
    name: string
    url: string
    note?: string
  }[]
}

function List({ people }: IProps) {
  const renderList = (): JSX.Element[] => {
    return people.map((person, index) => (
      <Grid.Row verticalAlign="middle" key={index}>
        <Grid.Column width={2}>
          <Image
            size="small"
            centered
            rounded
            bordered
            alt={person.name}
            src={person.url}
          />
        </Grid.Column>

        <Grid.Column>
          <p>{person.name}</p>
        </Grid.Column>

        <Grid.Column>
          <p>{person.age} years old</p>
        </Grid.Column>

        <Grid.Column>
          <p>{person.note}</p>
        </Grid.Column>
      </Grid.Row>
    ))
  }

  return (
    <Container className="my-8">
      <Grid padded divided="vertically" columns={4}>
        {renderList()}
      </Grid>
    </Container>
  )
}

export default List
