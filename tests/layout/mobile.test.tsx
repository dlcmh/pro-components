﻿import { mount, render } from 'enzyme';
import React from 'react';
import BasicLayout from '@ant-design/pro-layout';
import defaultProps from './defaultProps';

import { waitForComponentToPaint } from '../util';

describe('mobile BasicLayout', () => {
  beforeAll(() => {
    process.env.NODE_ENV = 'TEST';
    process.env.USE_MEDIA = 'xs';

    Object.defineProperty(global.window, 'matchMedia', {
      value: jest.fn((query) => {
        //  (max-width: 575px)
        return {
          media: query,
          matches: query.includes('max-width: 575px'),
          addListener: jest.fn(),
          removeListener: jest.fn(),
        };
      }),
    });
  });

  afterAll(() => {
    process.env.USE_MEDIA = 'md';
    process.env.NODE_ENV = 'dev';
  });

  it('📱 base use', async () => {
    const html = render(
      <BasicLayout {...defaultProps} getContainer={false} onCollapse={() => {}} />,
    );
    waitForComponentToPaint(html);
    expect(html).toMatchSnapshot();
  });

  it('📱 collapsed=false', async () => {
    const html = render(<BasicLayout {...defaultProps} getContainer={false} collapsed={false} />);
    waitForComponentToPaint(html);
    expect(html).toMatchSnapshot();
  });

  it('📱 layout=mix', async () => {
    const html = render(
      <BasicLayout {...defaultProps} getContainer={false} layout="mix" collapsed={false} />,
    );
    waitForComponentToPaint(html);
    expect(html).toMatchSnapshot();
  });

  it('📱 layout=mix and splitMenus', async () => {
    const html = render(
      <BasicLayout
        {...defaultProps}
        splitMenus
        getContainer={false}
        layout="mix"
        collapsed={false}
      />,
    );
    waitForComponentToPaint(html);
    expect(html).toMatchSnapshot();
  });

  it('📱 layout menuHeaderRender=false', async () => {
    const html = render(
      <BasicLayout
        {...defaultProps}
        collapsed
        getContainer={false}
        layout="mix"
        menuHeaderRender={false}
      />,
    );
    waitForComponentToPaint(html);
    expect(html).toMatchSnapshot();
  });

  it('📱 layout menuHeaderRender', async () => {
    const html = render(
      <BasicLayout
        {...defaultProps}
        collapsed
        getContainer={false}
        layout="mix"
        menuHeaderRender={() => 'title'}
      />,
    );
    waitForComponentToPaint(html);
    expect(html).toMatchSnapshot();
  });

  it('📱 layout menuHeaderRender', async () => {
    const html = render(
      <BasicLayout
        {...defaultProps}
        collapsed
        getContainer={false}
        layout="mix"
        menuHeaderRender={() => 'title'}
      />,
    );
    waitForComponentToPaint(html);
    expect(html).toMatchSnapshot();
  });

  it('📱 layout collapsedButtonRender', async () => {
    const onCollapse = jest.fn();
    const html = mount(
      <BasicLayout
        {...defaultProps}
        onCollapse={onCollapse}
        collapsed
        collapsedButtonRender={() => {
          return 'div';
        }}
        getContainer={false}
        layout="mix"
      />,
    );

    waitForComponentToPaint(html);

    html.find('span.ant-pro-global-header-collapsed-button').simulate('click');
    expect(onCollapse).toHaveBeenCalled();
    html.unmount();
  });
});
