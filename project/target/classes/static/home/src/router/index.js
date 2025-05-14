import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue'
import login from '../views/account/login.vue';
Vue.use(VueRouter)

const routes = [
	// 主页
	{
		path: '/',
		name: 'index',
		component: index
	},
	// 登录
	{
		path: '/account/login',
		name: 'login',
		component: login
	},
	// 忘记密码
	{
		path: '/account/forgot',
		name: 'forgot',
		component: () => import('../views/account/forgot.vue')
	},
	// 注册账号
	{
		path: '/account/register',
		name: 'register',
		component: () => import('../views/account/register.vue')
	},
		// 媒体图片
	{
		path: '/media/image',
		name: 'media_image',
		component: () => import('../views/media/image.vue')
	},

	// 音乐
	// {
	// 	path: '/media/music',
	// 	name: 'media_music',
	// 	component: () => import('../views/media/music.vue')
	// },
	// 媒体视频
	{
		path: '/media/video',
		name: 'media_video',
		component: () => import('../views/media/video.vue')
	},
	// 媒体视频
	{
		path: '/user_center/index',
		name: 'user_center_index',
		component: () => import('../views/user_center/index.vue')
	},
	// 文章路由
	{
		path: '/article/list',
		name: 'article_list',
		component: () => import('../views/article/list.vue')
	},
	{
		path: '/article/details',
		name: 'article_details',
		component: () => import('../views/article/details.vue')
	},
	// 浏览网站
	// 收藏路由
	{
		path: '/user/collect',
		name: 'collect_list',
		component: () => import('../views/user/collect.vue')
	},


	{
		path: '/comment/table',
		name: 'comment_table',
		component: () => import('../views/comment/table.vue')
	},
	{
		path: '/comment/view',
		name: 'comment_view',
		component: () => import('../views/comment/view.vue')
	},

	


	 // 留言路由
	 {
	 	path: '/message/list',
	 	name: 'message_list',
	 	component: () => import('../views/message/list.vue')
	 },
	 {
		path: '/message/edit',
		name: 'message_edit',
		component: () => import('../views/message/edit.vue')
	 },
	// 留言板路由
	{
		path: '/message/table',
		name: 'message_table',
		component: () => import('../views/message/table.vue')
	},
	{
		path: '/message/view',
		name: 'message_view',
		component: () => import('../views/message/view.vue')
	},

	// 公告路由
	{
		path: '/notice/list',
		name: 'notice_list',
		component: () => import('../views/notice/list.vue')
	},
	{
		path: '/notice/details',
		name: 'notice_details',
		component: () => import('../views/notice/details.vue')
	},
	// 医师用户表格路由
	{
		path: '/physician_user/table',
		name: '/physician_user_table',
		component: () => import('../views/physician_user/table.vue')
	},
	// 医师用户详情路由
	{
		path: '/physician_user/view',
		name: '/physician_user_view',
		component: () => import('../views/physician_user/view.vue')
	},
	
	
		
		
		
	// 普通用户表格路由
	{
		path: '/ordinary_user/table',
		name: '/ordinary_user_table',
		component: () => import('../views/ordinary_user/table.vue')
	},
	// 普通用户详情路由
	{
		path: '/ordinary_user/view',
		name: '/ordinary_user_view',
		component: () => import('../views/ordinary_user/view.vue')
	},
	
	
		
		
		
	// 医师信息表格路由
	{
		path: '/physician_information/table',
		name: '/physician_information_table',
		component: () => import('../views/physician_information/table.vue')
	},
	// 医师信息详情路由
	{
		path: '/physician_information/view',
		name: '/physician_information_view',
		component: () => import('../views/physician_information/view.vue')
	},
	
		// 医师信息列表路由
	{
		path: '/physician_information/list',
		name: '/physician_information_list',
		component: () => import('../views/physician_information/list.vue')
	},
	
		// 医师信息详情路由
	{
		path: '/physician_information/details',
		name: '/physician_information_details',
		component: () => import('../views/physician_information/details.vue')
	},
		
		
		
	// 预约挂号表格路由
	{
		path: '/appointment_registration/table',
		name: '/appointment_registration_table',
		component: () => import('../views/appointment_registration/table.vue')
	},
	// 预约挂号详情路由
	{
		path: '/appointment_registration/view',
		name: '/appointment_registration_view',
		component: () => import('../views/appointment_registration/view.vue')
	},
		// 预约挂号添加路由
	{
		path: '/appointment_registration/edit',
		name: '/appointment_registration_edit',
		component: () => import('../views/appointment_registration/edit.vue')
	},
	
	
		
		
		
	// 开药信息表格路由
	{
		path: '/prescription_information/table',
		name: '/prescription_information_table',
		component: () => import('../views/prescription_information/table.vue')
	},
	// 开药信息详情路由
	{
		path: '/prescription_information/view',
		name: '/prescription_information_view',
		component: () => import('../views/prescription_information/view.vue')
	},
	
	
		
		
		
	// 入院信息表格路由
	{
		path: '/admission_information/table',
		name: '/admission_information_table',
		component: () => import('../views/admission_information/table.vue')
	},
	// 入院信息详情路由
	{
		path: '/admission_information/view',
		name: '/admission_information_view',
		component: () => import('../views/admission_information/view.vue')
	},
	
	
		
		
		
	// 疾病分类表格路由
	{
		path: '/classification_of_diseases/table',
		name: '/classification_of_diseases_table',
		component: () => import('../views/classification_of_diseases/table.vue')
	},
	// 疾病分类详情路由
	{
		path: '/classification_of_diseases/view',
		name: '/classification_of_diseases_view',
		component: () => import('../views/classification_of_diseases/view.vue')
	},
	
	
		
		
		
	// 疾病信息表格路由
	{
		path: '/disease_information/table',
		name: '/disease_information_table',
		component: () => import('../views/disease_information/table.vue')
	},
	// 疾病信息详情路由
	{
		path: '/disease_information/view',
		name: '/disease_information_view',
		component: () => import('../views/disease_information/view.vue')
	},
	
		// 疾病信息列表路由
	{
		path: '/disease_information/list',
		name: '/disease_information_list',
		component: () => import('../views/disease_information/list.vue')
	},
	
		// 疾病信息详情路由
	{
		path: '/disease_information/details',
		name: '/disease_information_details',
		component: () => import('../views/disease_information/details.vue')
	},
		
		
		
	// 药品信息表格路由
	{
		path: '/drug_information/table',
		name: '/drug_information_table',
		component: () => import('../views/drug_information/table.vue')
	},
	// 药品信息详情路由
	{
		path: '/drug_information/view',
		name: '/drug_information_view',
		component: () => import('../views/drug_information/view.vue')
	},
	
		// 药品信息列表路由
	{
		path: '/drug_information/list',
		name: '/drug_information_list',
		component: () => import('../views/drug_information/list.vue')
	},
	
		// 药品信息详情路由
	{
		path: '/drug_information/details',
		name: '/drug_information_details',
		component: () => import('../views/drug_information/details.vue')
	},
		
		
		

	// 用户路由
	{
		path: '/user/index',
		name: 'user_index',
		component: () => import('../views/user/index.vue')
	},
	// 基本信息
	{
		path: '/user/info',
		name: 'user_info',
		component: () => import('../views/user/info.vue')
	},
	// 找回密码
	{
		path: '/user/password',
		name: 'user_password',
		component: () => import('../views/user/password.vue')
	},

	// 搜索
	{
		path: '/search',
		name: 'search',
		component: () => import('../views/search/index.vue')
	},
	// 局部搜索
	{
		path: '/search/details',
		name: 'search_details',
		component: () => import('../views/search/details.vue')
	}
]

const router = new VueRouter({
	mode: 'hash',
	base: process.env.BASE_URL,
	routes
})

router.afterEach((to, from, next) => {
	let title = "智慧中医药医疗系统-home";
	document.title = title;
	document.logo = "智慧中医药医疗系统"
})

export default router
