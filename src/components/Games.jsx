import { Label, Table } from 'semantic-ui-react'

function Games({games, id}) {
    //Conditional display team's games info if exist
    const displayGames = games.filter((g) => (g.home_team.id === id || g.visitor_team.id === id));
  return (
    <>
        <Table celled >
        <Table.Header>
            <Table.Row>
            <Table.HeaderCell>Host Team</Table.HeaderCell>
            <Table.HeaderCell>Vist Team</Table.HeaderCell>
            <Table.HeaderCell>Season and Period</Table.HeaderCell>
            <Table.HeaderCell>Status</Table.HeaderCell>
            <Table.HeaderCell>Score H:V </Table.HeaderCell>
            </Table.Row>
        </Table.Header>

        <Table.Body>
        {displayGames ? displayGames.map((game) => (
            <Table.Row key={game.id}>
            <Table.Cell>           
                {game.home_team.full_name}
            </Table.Cell>
            <Table.Cell>{game.visitor_team.full_name}</Table.Cell>
            <Table.Cell>{game.season} - {game.period}</Table.Cell>
            <Table.Cell>{game.status}</Table.Cell>
            <Table.Cell>{game.home_team_score} : {game.visitor_team_score}</Table.Cell>
            </Table.Row>
            )) : undefined }
        </Table.Body>

        </Table>

    </>
  )
}

export default Games