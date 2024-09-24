import React, { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import { Select } from 'antd'
import PhanHang from './phanhang/PhanHang.jsx'
import Group from './group/Group.jsx'
import PlayOff from './knockout/PlayOff.jsx'
import QuarterFinal from './knockout/QuarterFinal.jsx'
import SemiFinal from './knockout/SemiFinal.jsx'
import Final from './knockout/Final.jsx'


const currentGwURL = 'https://mrbui95.github.io/amvn2425/data/current_gw.json';

const dropDownItems = new Array(38).fill(null).map((_, index) => ({
    key: index + 1,
    label: `Gameweek ${index + 1}`,
}));

function European() {
    const [currentGw, setCurrentGw] = useState('');
    const [selectedGw, setSelectedGw] = useState('');
    const [userData, setUserData] = useState([])
    const [gwData, setGwData] = useState([])
    const [totalCap, setTotalCap] = useState({})
    const [prevGwData, setPrevGwData] = useState([])
    const [stage, setStage] = useState(1)

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

    const getTotalCap = async (selectedGw) => {
        try {
            if (selectedGw) {
                const totalCapURL = `https://mrbui95.github.io/amvn2425/data/c1/result/total_cap_${selectedGw}.json`;

                const response = await fetch(totalCapURL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                return data
            }
        } catch (e) {
            console.error(e)
            return null
        }
    }

    const getGWData = async (selectedGw) => {
        try {
            if (selectedGw) {
                const gwDataURL = `https://mrbui95.github.io/amvn2425/data/c1/result/${selectedGw}.json`;

                const response = await fetch(gwDataURL);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();

                const totalCap = await getTotalCap(selectedGw)
                setTotalCap(totalCap)

                const gwData = Object.entries(data).map(([key, value]) => {
                    return ({
                        id: key,
                        nick: getUInfoName(key),
                        points: value?.entry_history?.points || 0,
                        totalPoints: value?.entry_history?.total_points || 0,
                        teamValue: (value?.entry_history?.value || 0) / 10,
                        netPoints: (value?.entry_history?.points || 0) - (value?.entry_history?.event_transfers_cost || 0),
                        capPoint: totalCap[key],
                        gw: selectedGw,
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

    const getUInfo = (uid) => {
        try {
            return userData.filter(u => u.id.toString() === uid.toString())[0]
        } catch (e) { }
        return null
    }

    const getUInfoName = (uid) => {
        const uData = getUInfo(uid)
        if (uData) {
            return `${uData.name} (${uData.player_first_name} ${uData.player_last_name})`
        }
        return ''
    }

    const getUGwNetPoint = (uid) => {
        const uDataList = !!gwData ? gwData.filter(u => u.id.toString() === uid.toString()) : []
        if (uDataList.length > 0) {
            const uData = uDataList[0]
            return uData.netPoints || 0
        }
        return 0
    }

    const getUGwPrevNetPoint = (uid) => {
        const uDataList = !!prevGwData ? prevGwData.filter(u => u.id.toString() === uid.toString()) : []
        if (uDataList.length > 0) {
            const uData = uDataList[0]
            return uData.netPoints || 0
        }
        return 0
    }


    const fetchData = async () => {
        const userData = await getUserData()
        if (userData) {
            setUserData(userData)
        }

        const response = await fetch(currentGwURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCurrentGw(data.current_gw);
        setSelectedGw(data.current_gw)

        const gwData = await getGWData(currentGw)
        setGwData(gwData)

        if (selectedGw > 1) {
            const prevGwData = await getGWData(selectedGw - 1)
            setPrevGwData(prevGwData)
        }
    }

    const updateStage = (gw) => {
        let stage = 1
        if (gw > 19) {
            stage = 2
        }

        return stage
    }

    useEffect(() => {
        fetchData();
    }, [])

    useEffect(() => {
        const fetchUpdate = async () => {
            const gwData = await getGWData(selectedGw)
            setGwData(gwData)
            if (selectedGw > 1) {
                const prevGwData = await getGWData(selectedGw - 1)
                setPrevGwData(prevGwData)
            }
        }

        updateStage(selectedGw)

        fetchUpdate()
    }, [selectedGw])

    const renderMenu = () => {
        const items = dropDownItems.filter(item => item.key <= currentGw + 1)
        return {
            items,
            selectable: true,
            selectedKeys: [currentGw],
            onClick: onSelectGW,
        }
    }

    const onSelectGW = (e) => {
        setSelectedGw(e.key)
    }

    const renderContent = () => {
        if (selectedGw <= 4) {
            return (
                <PhanHang
                    selectedGw={selectedGw}
                    userData={userData}
                    getUInfo={getUInfo}
                    getUInfoName={getUInfoName}
                    gwData={gwData}
                    prevGwData={prevGwData}
                    getUGwNetPoint={getUGwNetPoint}
                    getUGwPrevNetPoint={getUGwPrevNetPoint}
                    stage={stage}
                />
            )
        }
        else if (selectedGw <= 12) {
            return (
                <Group
                    selectedGw={selectedGw}
                    userData={userData}
                    getUInfo={getUInfo}
                    getUInfoName={getUInfoName}
                    gwData={gwData}
                    prevGwData={prevGwData}
                    getUGwNetPoint={getUGwNetPoint}
                    getUGwPrevNetPoint={getUGwPrevNetPoint}
                    stage={stage}
                />
            )
        } else if (selectedGw <= 14) {
            return (
                <PlayOff
                    selectedGw={selectedGw}
                    userData={userData}
                    getUInfo={getUInfo}
                    getUInfoName={getUInfoName}
                    gwData={gwData}
                    prevGwData={prevGwData}
                    getUGwNetPoint={getUGwNetPoint}
                    getUGwPrevNetPoint={getUGwPrevNetPoint}
                    stage={stage}
                />
            )
        } else if (selectedGw <= 16) {
            return (
                <QuarterFinal
                    selectedGw={selectedGw}
                    userData={userData}
                    getUInfo={getUInfo}
                    getUInfoName={getUInfoName}
                    gwData={gwData}
                    prevGwData={prevGwData}
                    getUGwNetPoint={getUGwNetPoint}
                    getUGwPrevNetPoint={getUGwPrevNetPoint}
                    stage={stage}
                />
            )
        } else if (selectedGw <= 18) {
            return (
                <SemiFinal
                    selectedGw={selectedGw}
                    userData={userData}
                    getUInfo={getUInfo}
                    getUInfoName={getUInfoName}
                    gwData={gwData}
                    prevGwData={prevGwData}
                    getUGwNetPoint={getUGwNetPoint}
                    getUGwPrevNetPoint={getUGwPrevNetPoint}
                    stage={stage}
                />
            )
        } else if (selectedGw == 19) {
            return (
                <Final
                    selectedGw={selectedGw}
                    userData={userData}
                    getUInfo={getUInfo}
                    getUInfoName={getUInfoName}
                    gwData={gwData}
                    prevGwData={prevGwData}
                    getUGwNetPoint={getUGwNetPoint}
                    getUGwPrevNetPoint={getUGwPrevNetPoint}
                    stage={stage}
                />
            )
        }
    }

    return (
        <div>
            <div>European Cup 2024 - 2025</div>
            <div>
                <Dropdown
                    menu={renderMenu()}
                    autoFocus={true}
                >
                    <Typography.Link>
                        <Space>
                            {`Gameweek ${selectedGw}`}
                            <DownOutlined />
                        </Space>
                    </Typography.Link>
                </Dropdown>
            </div>
            <div>
                {renderContent()}
            </div>
        </div>
    )
}

export default European;