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
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
    }, [])

    const onChange = (e) => {
        console.log('onChange', e)
    }


    return (
        <Table
            columns={columns}
            dataSource={props.gwData}
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