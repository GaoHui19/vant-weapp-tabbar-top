const tabList = [
	{
	  pagePath: 'pages/index/index',
	  text: '首页'
	},
	{
	  pagePath: 'pages/dier/dier',
	  text: '第二页'
	}
  ];
  
  Page({
	data: {
	  currentTab: 0,
	  tabList
	},
  
	onLoad() {
	  // 初始化下横线位置
	  this.setData({
		activeLineOffset: 0
	  });
	},
  
	handleTabClick(event) {
	  const { index } = event.currentTarget.dataset;
	  this.setData({
		currentTab: parseInt(index)
	  });
	},
  
	handleSwiperChange(event) {
	  this.setData({
		currentTab: event.detail.current
	  });
	}
  });
  