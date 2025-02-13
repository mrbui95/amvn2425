import React, { useState, useEffect } from 'react';

import { Table } from 'antd';

import { GROUP_NAME, COLUMN_KNOCK_OUT } from '../../config/config'

function QuarterFinal(props) {
    const [fixtureData, setFixtureData] = useState([])
    const [loading, setLoading] = useState(true);
    const [isFirstLeg, setIsFirstLeg] = useState(true);

    const getFixtureData = async (gw) => {
        try {
            const fixtureDataURL = "https://mrbui95.github.io/amvn2425/data/c1/knockout/quarter_" + props.stage + ".json"

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
        updateIsFirstLeg()

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
        updateIsFirstLeg()
    }, [props.selectedGw])

    const updateIsFirstLeg = () => {
        if (props.selectedGw === '16') {
            let isFirstLeg = false
            setIsFirstLeg(isFirstLeg)
        }
    }


    const renderPlayOffResult = (groupName) => {
        let title = `Giải ${groupName}`

        let fixture = []

        switch (groupName) {
            case GROUP_NAME.C1: {
                fixture = fixtureData['c1']
                title = 'Giải C1'
                break
            }
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
                const player1Name = props.getUInfoName(match[0])
                const player2Name = props.getUInfoName(match[1])

                if (isFirstLeg) {
                    if (index % 3 === 0) {
                        return {
                            gw: props.selectedGw,
                            player1: player1Name,
                            points1: props.getUGwNetPoint(match[0]),
                            player2: player2Name,
                            points2: props.getUGwNetPoint(match[1]),
                            player1Id: match[0],
                            player2Id: match[1],
                        }
                    } else if (index % 3 === 1) {
                        return {
                            gw: Number(props.selectedGw) + 1,
                            player1: player1Name,
                            points1: 0,
                            player2: player2Name,
                            points2: 0,
                            player1Id: match[0],
                            player2Id: match[1],
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
                            player1Id: match[0],
                            player2Id: match[1],
                        }
                    }
                } else {
                    if (index % 3 === 0) {
                        return {
                            gw: Number(props.selectedGw) - 1,
                            player1: player1Name,
                            points1: props.getUGwPrevNetPoint(match[0]),
                            player2: player2Name,
                            points2: props.getUGwPrevNetPoint(match[1]),
                            player1Id: match[0],
                            player2Id: match[1],
                        }
                    } else if (index % 3 === 1) {
                        return {
                            gw: props.selectedGw,
                            player1: player1Name,
                            points1: props.getUGwNetPoint(match[0]),
                            player2: player2Name,
                            points2: props.getUGwNetPoint(match[1]),
                            player1Id: match[0],
                            player2Id: match[1],
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
                            player1Id: match[0],
                            player2Id: match[1],
                        }
                    }
                }
            })

            console.log(fixture)
        } else {
            fixture = []
        }

        const calcRowClassName = (record) => {
            let className = 'row-knockout-result '
            console.log(record)
            if (record.isSum) {
                className += 'sum_row'
            }
            return className
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
                    rowClassName={calcRowClassName}
                    sticky={{
                        offsetHeader: 0,
                    }}
                />
            </React.Fragment>
        )
    }


    return (
        <React.Fragment>
            {renderPlayOffResult(GROUP_NAME.C1)}
            {renderPlayOffResult(GROUP_NAME.C2)}
            {renderPlayOffResult(GROUP_NAME.C3)}
            {renderPlayOffResult(GROUP_NAME.C4)}
        </React.Fragment>
    )


}

export default QuarterFinal
