import { Table } from 'semantic-ui-react'

function Teams({players, id}) {
    //Conditional display team's players info if exist
  return (
    <>
        <Table celled >
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Full Name</Table.HeaderCell>
            <Table.HeaderCell>Team</Table.HeaderCell>
            <Table.HeaderCell>Position</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
         { console.log(id) }
        <Table.Body>
        {players ? players.filter((p) => (p.team.id === id)).map((player) => (
            <Table.Row key={player.id}>
            <Table.Cell>            
                {player.first_name} {player.last_name} 
            </Table.Cell>
            <Table.Cell>{player.team.full_name} </Table.Cell>
            <Table.Cell>{player.position} </Table.Cell>
            </Table.Row>
            )) : undefined }
        </Table.Body>

        </Table>

    </>
  )
}

export default Teams