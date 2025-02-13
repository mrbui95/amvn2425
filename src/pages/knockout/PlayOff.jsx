import React, { useState, useEffect } from 'react';

import { Table } from 'antd';

import { GROUP_NAME, COLUMN_KNOCK_OUT } from '../../config/config'

function PlayOff(props) {
    const [fixtureData, setFixtureData] = useState([])
    const [loading, setLoading] = useState(true);
    const [isFirstLeg, setIsFirstLeg] = useState(true);

    const getFixtureData = async (gw) => {
        try {
            const fixtureDataURL = "https://mrbui95.github.io/amvn2425/data/c1/knockout/playoff_" + props.stage + ".json"

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

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const fixtureData = await getFixtureData();
            if (fixtureData) {
                setFixtureData(fixtureData)
            }
            setLoading(false)
        }

        fetchData()

        
    }, [])

    useEffect(() => {
        if (props.selectedGw === '14') {
            let isFirstLeg = false
            setIsFirstLeg(isFirstLeg)
        }
    }, [props.selectedGw])




    const renderPlayOffResult = (groupName) => {
        let title = `Giải ${groupName}`

        let fixture = []

        switch (groupName) {
            case GROUP_NAME.C2: {
                fixture = fixtureData['c2']
                title = 'Giải C2'
                break
            }
            case GROUP_NAME.C3: {
                fixture = fixtureData['c3']
                title = 'Giải C3'
                break
            }
            case GROUP_NAME.C4: {
                fixture = fixtureData['c4']
                title = 'Giải C4'
                break
            }
        }

        if (Array.isArray(fixture) && fixture.length > 0) {
            const fullFixture = []
            fixture.forEach((match) => {
                fullFixture.push(match)
                // fullFixture.push([...match].reverse())
                fullFixture.push(match)
                fullFixture.push(match)
            })



            fixture = fullFixture.map((match, index) => {
                const player1Id = match[0]
                const player2Id = match[1]
                const player1Name = props.getUInfoName(player1Id)
                const player2Name = props.getUInfoName(player2Id)

                if (isFirstLeg) {
                    if (index % 3 === 0) {
                        return {
                            gw: props.selectedGw,
                            player1: player1Name,
                            points1: props.getUGwNetPoint(player1Id),
                            player2: player2Name,
                            points2: props.getUGwNetPoint(player2Id),
                            player1Id,
                            player2Id,
                        }
                    } else if (index % 3 === 0) {
                        return {
                            gw: Number(props.selectedGw) + 1,
                            player1: player1Name,
                            points1: 0,
                            player2: player2Name,
                            points2: 0,
                            player1Id,
                            player2Id,
                        }
                    } else {
                        return {
                            gw: 'Tổng cộng',
                            player1: player1Name,
                            points1: props.getUGwPrevNetPoint(match[0]) + props.getUGwNetPoint(match[0]),
                            player2: player2Name,
                            points2: props.getUGwPrevNetPoint(match[1]) + props.getUGwNetPoint(match[1]),
                            isSum: true,
                            last_gw: Number(props.selectedGw) + 1,
                            player1Id,
                            player2Id,
                        }
                    }
                } else {
                    if (index % 3 == 0) {
                        return {
                            gw: Number(props.selectedGw) - 1,
                            player1: player1Name,
                            points1: props.getUGwPrevNetPoint(player1Id),
                            player2: player2Name,
                            points2: props.getUGwPrevNetPoint(player2Id),
                            player1Id,
                            player2Id,
                        }
                    } else if (index % 3 == 1) {
                        return {
                            gw: props.selectedGw,
                            player1: player1Name,
                            points1: props.getUGwNetPoint(player1Id),
                            player2: player2Name,
                            points2: props.getUGwNetPoint(player2Id),
                            player1Id,
                            player2Id,
                        }
                    } else {
                        return {
                            gw: 'Tổng cộng',
                            player1: player1Name,
                            points1: props.getUGwPrevNetPoint(match[0]) + props.getUGwNetPoint(match[0]),
                            player2: player2Name,
                            points2: props.getUGwPrevNetPoint(match[1]) + props.getUGwNetPoint(match[1]),
                            isSum: true,
                            last_gw: Number(props.selectedGw),
                            player1Id,
                            player2Id,
                        }
                    }
                }
            })

            console.log(fixture)
        } else {
            fixture = []
        }

        return (
            <React.Fragment>
                <div>{title}</div>
                <Table
                    columns={COLUMN_KNOCK_OUT}
                    dataSource={fixture}
                    showSorterTooltip={{ target: 'sorter-icon' }}
                    pagination={false}
                    tableLayout={'fixed'}
                    loading={loading}
                    rowClassName={'row-knockout-result'}
                    sticky={{
                        offsetHeader: 0,
                    }}
                />
            </React.Fragment>
        )
    }


    return (
        <React.Fragment>
            {renderPlayOffResult(GROUP_NAME.C2)}
            {renderPlayOffResult(GROUP_NAME.C3)}
            {renderPlayOffResult(GROUP_NAME.C4)}
        </React.Fragment>
    )


}

export default PlayOff
