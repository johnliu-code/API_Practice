import { Label, Table } from 'semantic-ui-react'

function Teams({teams, displayInfo}) {
//Get clicked team id and pass it to app to switch showing team info
  return (
    <>
        <Table celled >
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Full Name</Table.HeaderCell>
            <Table.HeaderCell>City</Table.HeaderCell>
            <Table.HeaderCell>Abbreviation</Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
        {teams ? teams.map((team) => (
            <Table.Row key={team.id}>
            <Table.Cell onClick={() => displayInfo(team.id)} className="team">
                {team.id ===1 ? (
                <Label ribbon>First</Label>
                ) : undefined}             
                {team.full_name}
            </Table.Cell>
            <Table.Cell>{team.city}</Table.Cell>
            <Table.Cell>{team.abbreviation}</Table.Cell>
            </Table.Row>
            )) : undefined}
        </Table.Body>

        </Table>

    </>
  )
}

export default Teams