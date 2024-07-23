import React, { useState, useEffect } from 'react';
import { Table } from 'antd';


const columns = [
    {
        title: '',
        dataIndex: 'index',
        width: '10%',
    },
    {
        title: 'Nickname',
        dataIndex: 'nick',
        width: '30%',
    },
    {
        title: 'Points',
        dataIndex: 'points',
        width: '15%',
    },
    {
        title: 'Total Points',
        dataIndex: 'totalPoints',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.totalPoints - b.totalPoints,
        width: '15%',
    },
    {
        title: 'Team Values',
        dataIndex: 'teamValue',
        width: '15%',
    },
    {
        title: 'Captain Points',
        dataIndex: 'capPoint',
        width: '15%',
    },
]

function PhanHang(props) {
    const [gwData, setGwData] = useState([])
    const [userData, setUserData] = useState([])
    const [loading, setLoading] = useState(true);

    const getUserData = async () => {
        try {
            const userDataURL = "https://mrbui95.github.io/amvn/data/u_info.json"

            const response = await fetch(userDataURL);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();

            const userData = Object.entries(data).map(([key, value]) => ({ id: key, ...value, }));
            console.log('userData', userData);

            return userData;
        } catch (e) {
            console.error(e)
            return null
        }
    }

    const getGWData = async (selectedGw) => {
        try {
            if (selectedGw) {
                const gwDataURL = `https://mrbui95.github.io/amvn/data/c1/result/${selectedGw}.json`;

                const response = await fetch(gwDataURL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();


                const gwData = Object.entries(data).map(([key, value]) => {
                    const uData = userData.filter(u => u.id.toString() === key.toString())[0]

                    return ({
                        id: key,
                        nick: `${uData.name} (${uData.player_first_name} ${uData.player_last_name})`,
                        points: value.entry_history.points,
                        totalPoints: value.entry_history.total_points,
                        teamValue: (value.entry_history.bank + value.entry_history.value) / 10,
                        capPoint: 0,
                    })
                }).sort((a, b) => {
                    if (b.totalPoints !== a.totalPoints) {
                        return b.totalPoints - a.totalPoints; // Sắp xếp giảm dần theo totalPoints
                    } else if (b.teamValue !== a.teamValue) {
                        return b.teamValue - a.teamValue; // Nếu total bằng nhau, sắp xếp giảm dần theo teamValue
                    } else {
                        return b.capPoint - a.capPoint; // Nếu value cũng bằng nhau, sắp xếp giảm dần theo capPoint
                    }
                }).map((item, index) => {
                    item.index = index + 1;
                    return item;
                });

                return gwData
            }
        } catch (e) {
            console.error(e)
            return null
        }
    }

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const userResult = await getUserData();
            if (userResult) {
                setUserData(userResult);
                const gwDataResult = await getGWData(props.selectedGw);
                setGwData(gwDataResult);
            }
            setLoading(false);
        };

        fetchData();
    }, [])

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);

            const gwDataResult = await getGWData(props.selectedGw);
            setGwData(gwDataResult);

            setLoading(false);
        }

        fetchData()
    }, [props.selectedGw])

    const onChange = (e) => {
        console.log('onChange', e)
    }


    return (
        <Table
            columns={columns}
            dataSource={gwData}
            onChange={onChange}
            showSorterTooltip={{ target: 'sorter-icon' }}
            pagination={false}
            tableLayout={'fixed'}
            loading={loading}
            rowClassName={'row-phanhang'}
            sticky={{
                offsetHeader: 0,
            }}
        />
    )

}

export default PhanHang;