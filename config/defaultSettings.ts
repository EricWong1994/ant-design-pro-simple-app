import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  // navTheme: 'light',
  // // 拂晓蓝
  // primaryColor: '#1890ff',
  // layout: 'mix',
  // contentWidth: 'Fluid',
  // fixedHeader: false,
  // fixSiderbar: true,
  // colorWeak: false,
  // title: 'Ant Design Pro',
  // pwa: false,
  // logo: 'https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg',
  // iconfontUrl: '',

    navTheme: "light",
    primaryColor: "#52C41A",
    // layout: "mix",
    layout: "side",
    contentWidth: "Fluid",
    fixedHeader: false,
    fixSiderbar: true,
    pwa: false,
    logo: "https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg",
    headerHeight: 48,
    splitMenus: false
};

export default Settings;
