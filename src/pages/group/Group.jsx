import React, { useState, useEffect } from 'react';
import { Collapse } from 'antd';
import { Table } from 'antd';
import { GROUP_NAME, COLUMN_H2H, COLUMN_GROUP_RANK } from '../../config/config'

function Group(props) {
    const [expandIconPosition, setExpandIconPosition] = useState('start');
    const [fixtureData, setFixtureData] = useState([])
    const [rankData, setRankData] = useState([])
    const [loading, setLoading] = useState(true);

    const getFixtureData = async () => {
        try {
            const fixtureDataURL = "https://mrbui95.github.io/amvn2425/data/c1/group/fixture_" + props.stage + ".json"

            const response = await fetch(fixtureDataURL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            return data
        } catch (e) {
            console.error(e)
            return null
        }
    }


    const getRankData = async (gw) => {
        try {
            const rankDataURL = "https://mrbui95.github.io/amvn2425/data/c1/group/rank_" + gw + ".json"

            const response = await fetch(rankDataURL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            return data
        } catch (e) {
            console.error(e)
            return null
        }
    }


    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const fixtureData = await getFixtureData();
            console.log(fixtureData)
            if (fixtureData) {
                setFixtureData(fixtureData);
                const rankData = await getRankData(props.selectedGw)
                if (rankData) {
                    setRankData(rankData)
                } else {
                    setRankData([])
                }
            }
            setLoading(false);
        };

        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const rankData = await getRankData(props.selectedGw)
            if (rankData) {
                setRankData(rankData)
            } else {
                setRankData([])
            }
            setLoading(false);
        };

        fetchData();
    }, [props.selectedGw])


    const getRound = () => {
        let round = props.selectedGw - 5
        if (round >= 19) {
            round = round - 19
        }
        return round
    }

    const renderGroupResult = (groupName) => {
        let gwData = []

        let fixtureAll
        let fixture

        const round = getRound()
        let rank = []

        switch (groupName) {
            case GROUP_NAME.C1: {
                fixtureAll = fixtureData['c1']
                rank = rankData['c1']
                break
            }
            case GROUP_NAME.C2: {
                fixtureAll = fixtureData['c2']
                rank = rankData['c2']
                break
            }
            case GROUP_NAME.C3: {
                fixtureAll = fixtureData['c3']
                rank = rankData['c3']
                break
            }
            case GROUP_NAME.C4: {
                fixtureAll = fixtureData['c4']
                rank = rankData['c4']
                break
            }
        }

        if (Array.isArray(fixtureAll)) {
            fixture = fixtureAll[round]
        }

        if (fixture) {
            gwData = fixture.map((match) => {
                return {
                    player1: props.getUInfoName(match[0]),
                    points1: props.getUGwNetPoint(match[0]),
                    player2: props.getUInfoName(match[1]),
                    points2: props.getUGwNetPoint(match[1]),
                }
            })
        }

        if (Array.isArray(rank) && rank.length > 0) {
            rank = rank.sort((u1, u2) => {
                if (u1.point != u2.point) {
                    return u2.point - u1.point
                } else {
                    return u2.total_points - u1.total_points
                }
            })
            rank = rank.map((u, index) => {
                const uid = u.id
                const name = props.getUInfoName(uid)
                return {
                    index: index + 1,
                    name,
                    ...u,
                }
            })
        }

        return (
            <React.Fragment>
                <Table
                    columns={COLUMN_H2H}
                    dataSource={gwData}
                    showSorterTooltip={{ target: 'sorter-icon' }}
                    pagination={false}
                    tableLayout={'fixed'}
                    loading={loading}
                    rowClassName={'row-group-result'}
                    sticky={{
                        offsetHeader: 0,
                    }}
                />
                <div>Bảng xếp hạng</div>
                <Table
                    columns={COLUMN_GROUP_RANK}
                    dataSource={rank}
                    showSorterTooltip={{ target: 'sorter-icon' }}
                    pagination={false}
                    tableLayout={'fixed'}
                    loading={loading}
                    rowClassName={'row-group-rank'}
                    sticky={{
                        offsetHeader: 0,
                    }}
                />
            </React.Fragment>
        )

        return ''
    }

    const onPositionChange = (newExpandIconPosition) => {
        setExpandIconPosition(newExpandIconPosition);
    };

    const OnCollapeChange = (e) => {
        console.log('OnCollapeChange', e)
    }

    const items = [
        {
            key: '1',
            label: 'Group C1',
            children: renderGroupResult(GROUP_NAME.C1),
        },
        {
            key: '2',
            label: 'Group C2',
            children: renderGroupResult(GROUP_NAME.C2),
        },
        {
            key: '3',
            label: 'Group C3',
            children: renderGroupResult(GROUP_NAME.C3),
        },
        {
            key: '4',
            label: 'Group C4',
            children: renderGroupResult(GROUP_NAME.C4),
        },
    ];


    return (
        <React.Fragment>
            <Collapse
                defaultActiveKey={['1', '2', '3', '4']}
                onChange={OnCollapeChange}
                expandIconPosition={expandIconPosition}
                items={items}
            />
        </React.Fragment >
    )
}

export default Group