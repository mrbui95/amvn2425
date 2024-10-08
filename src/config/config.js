export const GROUP_MAX_MEMBER = 16

export const COLUMN_PHAN_HANG_RANK = [
    {
        title: '',
        dataIndex: 'index',
        width: '10%',
    },
    {
        title: 'Nickname',
        dataIndex: 'nick',
        width: '30%',
        render: (text, row) => <a href={`https://fantasy.premierleague.com/entry/${row.id}/event/${row.gw}`} target="_blank">{text}</a>,
    },
    {
        title: 'Points',
        dataIndex: 'points',
        width: '14%',
    },
    {
        title: 'Total Points',
        dataIndex: 'totalPoints',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.totalPoints - b.totalPoints,
        width: '18%',
    },
    {
        title: 'Team Values',
        dataIndex: 'teamValue',
        width: '15%',
    },
    {
        title: 'Total Cap',
        dataIndex: 'capPoint',
        width: '13%',
    },
]

export const GROUP_NAME = {
    C1: 0,
    C2: 1,
    C3: 2,
    C4: 3,
}

export const COLUMN_H2H = [
    {
        title: 'PLayer 1',
        dataIndex: 'player1',
        width: '35%',
    },
    {
        title: '',
        dataIndex: 'points1',
        width: '15%',
    },
    {
        title: '',
        dataIndex: 'points2',
        width: '15%',
    },
    {
        title: 'Player 2',
        dataIndex: 'player2',
        width: '35%',
    },
]

export const COLUMN_KNOCK_OUT = [
    {
        title: 'GW',
        dataIndex: 'gw',
        width: '15%',
    },
    {
        title: 'PLayer 1',
        dataIndex: 'player1',
        width: '27.5%',
    },
    {
        title: '',
        dataIndex: 'points1',
        width: '15%',
    },
    {
        title: '',
        dataIndex: 'points2',
        width: '15%',
    },
    {
        title: 'Player 2',
        dataIndex: 'player2',
        width: '27.5%',
    },
]

export const COLUMN_GROUP_RANK = [
    {
        title: 'TT',
        dataIndex: 'index',
        width: '15%',
    },
    {
        title: 'HLV',
        dataIndex: 'name',
        width: '45%',
    },
    {
        title: 'Điểm',
        dataIndex: 'point',
        width: '20%',
    },
    {
        title: 'Tổng điểm',
        dataIndex: 'total_points',
        width: '20%',
    },
]


