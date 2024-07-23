import React, { useState, useEffect } from 'react';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';
import PhanHang from './phanhang/PhanHang.jsx'


const currentGwURL = 'https://mrbui95.github.io/amvn/data/current_gw.json';

const dropDownItems = new Array(38).fill(null).map((_, index) => ({
    key: index + 1,
    label: `GW ${index + 1}`,
}));

function European() {
    const [currentGw, setCurrentGw] = useState('');
    const [selectedGw, setSelectedGw] = useState('');


    const fetchData = async () => {
        const response = await fetch(currentGwURL);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setCurrentGw(data.current_gw);
        setSelectedGw(currentGw)
    }

    useEffect(() => {
        fetchData();
    }, [])

    const onSelectGW = (e) => {
        setSelectedGw(e.key)
    }

    const renderContent = () => {
        if (selectedGw <= 4) {
            return (
                <PhanHang
                    selectedGw={selectedGw}
                />
            )
        }
        else if (selectedGw < 11) {

        }
    }

    return (
        <div>
            <div>European Cup 2024 - 2025</div>
            <div>
                <Dropdown
                    menu={{
                        items: dropDownItems.filter(item => item.key <= currentGw),
                        selectable: true,
                        selectedKeys: [currentGw],
                        onClick: onSelectGW,
                    }}
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