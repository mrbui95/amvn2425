import React, { useState, useEffect } from 'react';

import { Table } from 'antd';

import { GROUP_NAME, COLUMN_KNOCK_OUT } from '../../config/config'

function Final(props) {
    const [fixtureData, setFixtureData] = useState([])
    const [loading, setLoading] = useState(true);

    const getFixtureData = async (gw) => {
        try {
            const fixtureDataURL = "https://mrbui95.github.io/amvn2425/data/c1/knockout/final_" + props.stage + ".json"

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


    const renderPlayOffResult = (groupName) => {
        let title = `Giải ${groupName}`

        let fixtureFinal = []
        let fixtureThirdPlace = []

        switch (groupName) {
            case GROUP_NAME.C1: {
                fixtureFinal = fixtureData.final ? fixtureData.final['c1'] : []
                fixtureThirdPlace = fixtureData.thirdPlace ? fixtureData.thirdPlace['c1'] : []
                title = 'Giải C1'
                break
            }
            case GROUP_NAME.C2: {
                fixtureFinal = fixtureData.final ? fixtureData.final['c2'] : []
                fixtureThirdPlace = fixtureData.thirdPlace ? fixtureData.thirdPlace['c2'] : []
                title = 'Giải C2'
                break
            }
            case GROUP_NAME.C3: {
                fixtureFinal = fixtureData.final ? fixtureData.final['c3'] : []
                fixtureThirdPlace = fixtureData.thirdPlace ? fixtureData.thirdPlace['c3'] : []
                title = 'Giải C3'
                break
            }
            case GROUP_NAME.C4: {
                fixtureFinal = fixtureData.final ? fixtureData.final['c4'] : []
                fixtureThirdPlace = fixtureData.thirdPlace ? fixtureData.thirdPlace['c4'] : []
                title = 'Giải C4'
                break
            }
        }

        if (Array.isArray(fixtureFinal) && fixtureFinal.length > 0) {

            fixtureFinal = fixtureFinal.map((match, index) => {
                const player1Name = props.getUInfoName(match[0])
                const player2Name = props.getUInfoName(match[1])

                return {
                    gw: props.selectedGw,
                    player1: player1Name,
                    points1: props.getUGwNetPoint(match[0]),
                    player2: player2Name,
                    points2: props.getUGwNetPoint(match[1]),
                }
            })
        } else {
            fixtureFinal = []
        }

        if (Array.isArray(fixtureThirdPlace) && fixtureThirdPlace.length > 0) {
            fixtureThirdPlace = fixtureThirdPlace.map((match, index) => {
                const player1Name = props.getUInfoName(match[0])
                const player2Name = props.getUInfoName(match[1])

                return {
                    gw: props.selectedGw,
                    player1: player1Name,
                    points1: props.getUGwNetPoint(match[0]),
                    player2: player2Name,
                    points2: props.getUGwNetPoint(match[1]),
                }
            })
        } else {
            fixtureThirdPlace = []
        }

        return (
            <React.Fragment>
                <div>{title}</div>
                <div>Chung kết</div>
                <Table
                    columns={COLUMN_KNOCK_OUT}
                    dataSource={fixtureFinal}
                    showSorterTooltip={{ target: 'sorter-icon' }}
                    pagination={false}
                    tableLayout={'fixed'}
                    loading={loading}
                    rowClassName={'row-knockout-result'}
                    sticky={{
                        offsetHeader: 0,
                    }}
                />
                <div>Tranh 3-4</div>
                <Table
                    columns={COLUMN_KNOCK_OUT}
                    dataSource={fixtureThirdPlace}
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
            {renderPlayOffResult(GROUP_NAME.C1)}
            {renderPlayOffResult(GROUP_NAME.C2)}
            {renderPlayOffResult(GROUP_NAME.C3)}
            {renderPlayOffResult(GROUP_NAME.C4)}
        </React.Fragment>
    )


}

export default Final
