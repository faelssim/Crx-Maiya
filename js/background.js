chrome.contextMenus.create({
	title: "测试右键菜单",
	onclick: function(){
        chrome.tabs.create({
            url:"http://www.baidu.com"
        })
	}
});
chrome.contextMenus.create({
	title: "测试右键菜单2",
	onclick: function(){
        chrome.tabs.create({
            url:"http://www.baidu.com"
        })
	}
});