import React from 'react';
import { Progress, Tag } from 'antd';
import { EllipsisOutlined } from '@ant-design/icons';
import ProList from '@ant-design/pro-list';

const data = [
  '语雀的天空',
  'Ant Design',
  '蚂蚁金服体验科技',
  'TechUI',
  'TechUI 2.0',
  'Bigfish',
  'Umi',
].map((item) => ({
  title: item,
  subTitle: <Tag color="#5BD8A6">语雀专栏</Tag>,
  actions: [
    <a>邀请</a>,
    <a>操作</a>,
    <a>
      <EllipsisOutlined />
    </a>,
  ],
  avatar: 'https://gw.alipayobjects.com/zos/antfincdn/UCSiy1j6jx/xingzhuang.svg',
  content: (
    <div
      style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <div
        style={{
          width: 200,
        }}
      >
        <div>发布中</div>
        <Progress percent={80} />
      </div>
    </div>
  ),
}));

export default () => {
  return (
    <ProList<any>
      pagination={{
        defaultPageSize: 5,
        showSizeChanger: true,
      }}
      metas={{
        title: {},
        subTitle: {},
        type: {},
        avatar: {},
        content: {},
        actions: {},
      }}
      headerTitle="翻页"
      dataSource={data}
      renderItem={(item) => item}
    />
  );
};
