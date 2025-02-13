import { Table } from 'antd';
import React, { useState, useEffect } from 'react';
import { COLUMN_SECOND_CHANCE } from '../config/config'

const currentGwURL = 'https://mrbui95.github.io/amvn2425/data/current_gw.json';

function SecondChance() {
    const [currentGw, setCurrentGw] = useState('');
    const [userData, setUserData] = useState([])
    const [totalCap, setTotalCap] = useState({})
    const [gwData, setGwData] = useState([])
    const [stage, setStage] = useState(1)
    const [loading, setLoading] = useState(true);

    const getUserData = async () => {
        try {
            const userDataURL = "https://mrbui95.github.io/amvn2425/data/u_info.json"

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

    const getUInfo = (uid, userData) => {
        console.log(uid, userData)
        try {
            return userData.filter(u => u.id.toString() === uid.toString())[0]
        } catch (e) { }
        return null
    }

    const getUInfoName = (uid, userData) => {
        const uData = getUInfo(uid, userData)
        if (uData) {
            return `${uData.name} (${uData.player_first_name} ${uData.player_last_name})`
        }
        return ''
    }

    const getGWData = async (currentGw, userData) => {
        try {
            if (currentGw) {
                const gwDataURL = `https://mrbui95.github.io/amvn2425/data/c1/result/${currentGw}.json`;

                const response = await fetch(gwDataURL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                const totalCap = await getTotalCap(currentGw)
                setTotalCap(totalCap)

                const gwData = Object.entries(data).map(([key, value]) => {
                    return ({
                        id: key,
                        nick: getUInfoName(key, userData),
                        points: value?.entry_history?.points || 0,
                        totalPoints: value?.entry_history?.total_points || 0,
                        teamValue: (value?.entry_history?.value || 0) / 10,
                        netPoints: (value?.entry_history?.points || 0) - (value?.entry_history?.event_transfers_cost || 0),
                        capPoint: totalCap[key],
                        gw: currentGw,
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

    const getTotalCap = async (currentGw) => {
        console.log('========getTotalCap', currentGw)
        try {
            const totalCapURL = `https://mrbui95.github.io/amvn2425/data/c1/result/total_cap_${currentGw}.json`;

            const response = await fetch(totalCapURL);
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

    const fetchData = async () => {
        const response = await fetch(currentGwURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCurrentGw(data.current_gw);
        console.log(data.current_gw)

        const userData = await getUserData(data.current_gw)
        if (userData) {
            setUserData(userData)
        }

        const gwData = await getGWData(data.current_gw, userData)
        setGwData(gwData)

        setLoading(false)
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        console.log('currentGw', currentGw, 'gwData', gwData, 'totalCap', totalCap)
    }, [currentGw, gwData, totalCap])

    return (
        <Table
            columns={COLUMN_SECOND_CHANCE}
            dataSource={gwData}
            showSorterTooltip={{ target: 'sorter-icon' }}
            pagination={false}
            tableLayout={'fixed'}
            loading={loading}
            sticky={{
                offsetHeader: 0,
            }}
        />
    )

}

export default SecondChance;
