export default {
  pages: [
    "pages/index/index",
    "pages/user/user",
    "pages/history/historySearch",
    "pages/history/history",
    "pages/tasks/tasksPending",
    "pages/tasks/tasksUpdate",
    "pages/task/task",
    "pages/taskDetail/taskDetail"
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
       text: '首页',
       iconPath: 'pages/imgs/tabs/home.png',
       selectedIconPath: 'pages/imgs/tabs/home-act.png'
     },
     {
       pagePath: 'pages/history/historySearch',
       text: '历史',
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
