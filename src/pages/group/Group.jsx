import React, { useState, useEffect } from 'react';
import { Collapse } from 'antd';
import { Table } from 'antd';
import { GROUP_NAME, COLUMN_PHAN_HANG_RANK } from '../../config/config'

function Group(props) {
    const [expandIconPosition, setExpandIconPosition] = useState('start');
    const [fixtureData, setFixtureData] = useState([])
    const [groupData, setGroupData] = useState([])
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

    const getGroupData = async () => {
        try {
            const groupDataURL = "https://mrbui95.github.io/amvn2425/data/c1/group/group_" + props.stage + ".json"

            const response = await fetch(groupDataURL);
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
            const groupData = await getGroupData();
            setGroupData(groupData)
            console.log(groupData)
            setLoading(false);
        };

        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
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
        let groupList

        switch (groupName) {
            case GROUP_NAME.C1: {
                groupList = groupData['c1']
                break
            }
            case GROUP_NAME.C2: {
                groupList = groupData['c2']
                break
            }
            case GROUP_NAME.C3: {
                groupList = groupData['c3']
                break
            }
            case GROUP_NAME.C4: {
                groupList = groupData['c4']
                break
            }
        }

        let rank = []

        if (!!props.gwData) {
            rank = props.gwData.filter(u => groupList.includes(u.id))
        }
        

        return (
            <React.Fragment>
                <div>Bảng xếp hạng</div>
                <Table
                    columns={COLUMN_PHAN_HANG_RANK}
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