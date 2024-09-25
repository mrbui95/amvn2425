import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import { GROUP_MAX_MEMBER } from '../../config/config'


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
        render: (text, row) => <a href={`https://fantasy.premierleague.com/entry/${row.id}/event/${row.gw}`} target="_blank">{text}</a>,
    },
    {
        title: 'Points',
        dataIndex: 'points',
        width: '14%',
    },
    {
        title: 'Total Points',
        dataIndex: 'totalPoints',
        defaultSortOrder: 'descend',
        sorter: (a, b) => a.totalPoints - b.totalPoints,
        width: '18%',
    },
    {
        title: 'Team Values',
        dataIndex: 'teamValue',
        width: '15%',
    },
    {
        title: 'Total Cap',
        dataIndex: 'capPoint',
        width: '13%',
    },
]

function PhanHang(props) {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        
    }, [])

    const onChange = (e) => {
        
    }

    const calcRowClassName = (record) => {
        let className = 'row-phanhang '
        console.log(record)
        if (record.index <= GROUP_MAX_MEMBER) {
            return className + ' row-phanhang-c1'
        } else if (record.index <= GROUP_MAX_MEMBER * 2) {
            return className + ' row-phanhang-c2'
        } else if (record.index <= GROUP_MAX_MEMBER * 3) {
            return className + ' row-phanhang-c3'
        } else {
            return className + ' row-phanhang-c4'
        }   
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
            rowClassName={calcRowClassName}
            sticky={{
                offsetHeader: 0,
            }}
        />
    )

}

export default PhanHang;