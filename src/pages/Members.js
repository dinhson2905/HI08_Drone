import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './Member.css';
import { Table, Switch, Radio, Form } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import React, { Component } from 'react';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'London',
        value: 'London',
      },
      {
        text: 'New York',
        value: 'New York',
      },
    ],
    onFilter: (value, record) => record.address.indexOf(value) === 0,
  },
  {
    title: 'Action',
    key: 'action',
    sorter: true,
    filters: [],
    onFilter: () => {},
    render: () => (
      <span>
        <a style={{ marginRight: 16 }}>Delete</a>
        <a className="ant-dropdown-link">
          More actions <DownOutlined />
        </a>
      </span>
    ),
  },
];

const data = [];
for (let i = 1; i <= 10; i++) {
  data.push({
    key: i,
    name: 'Nguyen Dinh Son',
    age: `${i}2`,
    address: `New York No. ${i} Lake Park`,
    description: `My name is John Brown, I am ${i}2 years old, living in New York No. ${i} Lake Park.`,
  });
}

const expandable = { expandedRowRender: record => <p>{record.description}</p> };
const title = () => 'Here is title';
const showHeader = true;
const footer = () => 'Here is footer';
const pagination = { position: 'bottom' };
class Members extends Component {
	  state = {
	    bordered: false,
	    loading: false,
	    pagination,
	    size: 'default',
	    expandable,
	    title: undefined,
	    showHeader,
	    footer,
	    rowSelection: {},
	    scroll: undefined,
	    hasData: true,
	    tableLayout: undefined,
	    top: 'none',
	    bottom: 'bottomRight',
	  };

	  handleToggle = prop => enable => {
	    this.setState({ [prop]: enable });
	  };

	  handleSizeChange = e => {
	    this.setState({ size: e.target.value });
	  };

	  handleTableLayoutChange = e => {
	    this.setState({ tableLayout: e.target.value });
	  };

	  handleExpandChange = enable => {
	    this.setState({ expandable: enable ? expandable : undefined });
	  };

	  handleEllipsisChange = enable => {
	    this.setState({ ellipsis: enable });
	  };

	  handleTitleChange = enable => {
	    this.setState({ title: enable ? title : undefined });
	  };

	  handleHeaderChange = enable => {
	    this.setState({ showHeader: enable ? showHeader : false });
	  };

	  handleFooterChange = enable => {
	    this.setState({ footer: enable ? footer : undefined });
	  };

	  handleRowSelectionChange = enable => {
	    this.setState({ rowSelection: enable ? {} : undefined });
	  };

	  handleYScrollChange = enable => {
	    this.setState({ yScroll: enable });
	  };

	  handleXScrollChange = e => {
	    this.setState({ xScroll: e.target.value });
	  };

	  handleDataChange = hasData => {
	    this.setState({ hasData });
	  };
    render() {
    	const { xScroll, yScroll, ...state } = this.state;

    const scroll = {};
    if (yScroll) {
      scroll.y = 240;
    }
    if (xScroll) {
      scroll.x = '100vw';
    }

    const tableColumns = columns.map(item => ({ ...item, ellipsis: state.ellipsis }));
    if (xScroll === 'fixed') {
      tableColumns[0].fixed = true;
      tableColumns[tableColumns.length - 1].fixed = 'right';
    }
        return (
            <div>
        <Table
          {...this.state}
          pagination={{ position: [this.state.top, this.state.bottom] }}
          columns={tableColumns}
          dataSource={state.hasData ? data : null}
          scroll={scroll}
        />
      </div>
        );
    }
}

export default Members;