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
    title: 'Birthday',
    dataIndex: 'birthday',
    sorter: (a, b) => new Date(a.birthday) - new Date(b.birthday),
  },
  {
  	title: 'Level',
  	dataIndex: 'level',
  	filters: [
  	  {
        text: 'Commander',
        value: 'Commander',
      },
      {
        text: 'Worker',
        value: 'Worker',
      },
  	],
  	onFilter: (value, record) => record.level.indexOf(value) === 0,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    filters: [
      {
        text: 'Tupelo, MS',
        value: 'Tupelo, MS',
      },
      {
        text: 'London, UK',
        value: 'London, UK',
      },
      {
        text: 'Boston, MA',
        value: 'Boston, MA',
      },
      {
        text: 'Long Branch, NJ',
        value: 'Long Branch, NJ',
      },
      {
        text: 'Gary, IN',
        value: 'Gary, IN',
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
data.push({
    key: 1,
    name: `Nguyen Dinh Son`,
    birthday: `1998-05-29`,
    address: `Tupelo, MS`,
    level: `Commander`,
    description: `My name is Nguyen Dinh Son, level Commander.`,
  });
data.push({
    key: 2,
    name: 'Nguyen Tri Hieu',
    birthday: `1990-04-14`, 
    address: `London, UK`,
    level: `Commander`,
    description: `My name is Nguyen Tri Hieu, level Commander.`,
  });
data.push({
    key: 3,
    name: 'Dang Ngoc Diep',
    birthday: `1991-03-02`,
    address: `Boston, MA`,
    level: `Commander`,
    description: `My name is Dang Ngoc Diep, level Commander.`,
  });
data.push({
    key: 4,
    name: 'Nguyen Van Khanh',
    birthday: `1993-01-30`,
    address: `Long Branch, NJ`,
    level: `Worker`,
    description: `My name is Nguyen Van Khanh, level Worker.`,
  });
data.push({
    key: 5,
    name: 'Tran Viet',
    birthday: `1992-02-20`,
    address: `Gary, IN`,
    level: `Worker`,
    description: `My name is Tran Viet, level Worker.`,
  });

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