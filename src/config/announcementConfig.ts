import type { AnnouncementConfig } from "../types/config";

export const announcementConfig: AnnouncementConfig = {
	// 公告标题
	title: "看这里～",

	// 公告内容
	content: "合作翻译官绝赞招募中！",

	// 是否允许用户关闭公告
	closable: false,

	link: {
		// 启用链接
		enable: true,
		// 链接文本
		text: "参与贡献",
		// 链接 URL
		url: "/posts/recruit-linguister/",
		// 是否为外部链接
		external: false,
	},
};
