export default {
  pages: [
    "pages/index/index",
    "pages/user/user",
    "pages/history/historyDetail",
    "pages/taskDetail/taskDetail",
    "pages/taskDetail/taskActive",
    "pages/taskDetail/taskComplete",
    "pages/taskDetail/taskReady",
    "pages/taskDetail/taskNotReady",
    "pages/wbs/wbs",
    "pages/wbs/sub"
  ],
  window: {
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "中交一航局进度管理小程序",
    navigationBarTextStyle: "black",
  },
  tabBar: {
    list: [
     {
       pagePath: 'pages/index/index',
       text: '任务',
       iconPath: 'pages/imgs/tabs/home.png',
       selectedIconPath: 'pages/imgs/tabs/home-act.png'
     },
     {
       pagePath: 'pages/wbs/wbs',
       text: 'WBS',
       iconPath: 'pages/imgs/tabs/history.png',
       selectedIconPath: 'pages/imgs/tabs/history-act.png'
     },
     {
       pagePath: 'pages/user/user',
       text: '个人',
       iconPath: 'pages/imgs/tabs/user.png',
       selectedIconPath: 'pages/imgs/tabs/user-act.png'
     },
   ],
    color: '#000',
    selectedColor: '#56abe4',
    backgroundColor: '#fff',
    borderStyle: 'white'
  }
};
