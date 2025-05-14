import Vue from 'vue';
import VueRouter from 'vue-router';
import index from '../views/index.vue';
import login from '../views/login.vue';
import forgot from '../views/forgot.vue';
import register from '../views/register.vue';
Vue.use(VueRouter)

const routes = [
    // 主页
    {
        path: '/',
        name: 'index',
        component: index,
        meta: {
            index: 0,
            title: '首页'
        }
    },

    // 登录
    {
        path: '/login',
        name: 'login',
        component: login,
        meta: {
            index: 0,
            title: '登录'
        }
    },

            // 注册
        {
            path: '/register',
            name: 'register',
            component: register,
            meta: {
                index: 0,
                title: '注册'
            }
        },
    	
	
    // 忘记密码
    {
        path: '/forgot',
        name: "forgot",
        component: forgot,
        meta: {
            index: 0,
            title: '忘记密码'
        }
    },

    // 修改密码
    {
        path: '/user/password',
        name: "password",
        component: () => import("../views/user/password.vue"),
        meta: {
            index: 0,
            title: '修改密码'
        }
    },

    // 视频播放页
    {
        path: "/media/video",
        name: "video",
        component: () => import('../views/media/video.vue'),
        meta: {
            index: 0,
            title: "视频"
        }
    },

    // 音频播放页
    {
        path: "/media/audio",
        name: "audio",
        component: () => import('../views/media/audio.vue'),
        meta: {
            index: 0,
            title: "音频"
        }
    },

    
    
                // 轮播图路由
        {
            path: '/slides/table',
            name: 'slides_table',
            component: () => import('../views/slides/table.vue'),
            meta: {
                index: 0,
                title: '轮播图列表'
            }
        },
        {
            path: '/slides/view',
            name: 'slides_view',
            component: () => import('../views/slides/view.vue'),
            meta: {
                index: 0,
                title: '轮播图详情'
            }
        },
                    // 文章路由
            {
                path: '/article/table',
                name: 'article_table',
                component: () => import('../views/article/table.vue'),
                meta: {
                    index: 0,
                    title: '新闻资讯列表'
                }
            },
            {
                path: '/article/view',
                name: 'article_view',
                component: () => import('../views/article/view.vue'),
                meta: {
                    index: 0,
                    title: '新闻资讯详情'
                }
            },

            // 文章分类路由
            {
                path: '/article_type/table',
                name: 'article_type_table',
                component: () => import('../views/article_type/table.vue'),
                meta: {
                    index: 0,
                    title: '新闻资讯分类列表'
                }
            },
            {
                path: '/article_type/view',
                name: 'article_type_view',
                component: () => import('../views/article_type/view.vue'),
                meta: {
                    index: 0,
                    title: '新闻资讯分类详情'
                }
            },
                            
            // 留言板路由
        {
            path: '/message/table',
            name: 'message_table',
            component: () => import('../views/message/table.vue'),
            meta: {
                index: 0,
                title: '用户反馈列表'
            }
        },
        {
            path: '/message/view',
            name: 'message_view',
            component: () => import('../views/message/view.vue'),
            meta: {
                index: 0,
                title: '用户反馈详情'
            }
        },
    
    
            // 公告路由
        {
            path: '/notice/table',
            name: 'notice_table',
            component: () => import('../views/notice/table.vue'),
            meta: {
                index: 0,
                title: '公告消息列表'
            }
        },
        {
            path: '/notice/view',
            name: 'notice_view',
            component: () => import('../views/notice/view.vue'),
            meta: {
                index: 0,
                title: '公告消息详情'
            }
        },
            	    
            // 评论路由
        {
            path: '/comment/table',
            name: 'comment_table',
            component: () => import('../views/comment/table.vue'),
            meta: {
                index: 0,
                title: '评论列表'
            }
        },
        {
            path: '/comment/view',
            name: 'comment_view',
            component: () => import('../views/comment/view.vue'),
            meta: {
                index: 0,
                title: '评论详情'
            }
        },
        	            // 医师用户路由
        {
            path: '/physician_user/table',
            name: 'physician_user_table',
            component: () => import('../views/physician_user/table.vue'),
            meta: {
                index: 0,
                title: '医师用户列表'
            }
        },
        {
            path: '/physician_user/view',
            name: 'physician_user_view',
            component: () => import('../views/physician_user/view.vue'),
            meta: {
                index: 0,
                title: '医师用户详情'
            }
        },
						            // 普通用户路由
        {
            path: '/ordinary_user/table',
            name: 'ordinary_user_table',
            component: () => import('../views/ordinary_user/table.vue'),
            meta: {
                index: 0,
                title: '普通用户列表'
            }
        },
        {
            path: '/ordinary_user/view',
            name: 'ordinary_user_view',
            component: () => import('../views/ordinary_user/view.vue'),
            meta: {
                index: 0,
                title: '普通用户详情'
            }
        },
						            // 医师信息路由
        {
            path: '/physician_information/table',
            name: 'physician_information_table',
            component: () => import('../views/physician_information/table.vue'),
            meta: {
                index: 0,
                title: '医师信息列表'
            }
        },
        {
            path: '/physician_information/view',
            name: 'physician_information_view',
            component: () => import('../views/physician_information/view.vue'),
            meta: {
                index: 0,
                title: '医师信息详情'
            }
        },
						            // 预约挂号路由
        {
            path: '/appointment_registration/table',
            name: 'appointment_registration_table',
            component: () => import('../views/appointment_registration/table.vue'),
            meta: {
                index: 0,
                title: '预约挂号列表'
            }
        },
        {
            path: '/appointment_registration/view',
            name: 'appointment_registration_view',
            component: () => import('../views/appointment_registration/view.vue'),
            meta: {
                index: 0,
                title: '预约挂号详情'
            }
        },
						            // 开药信息路由
        {
            path: '/prescription_information/table',
            name: 'prescription_information_table',
            component: () => import('../views/prescription_information/table.vue'),
            meta: {
                index: 0,
                title: '开药信息列表'
            }
        },
        {
            path: '/prescription_information/view',
            name: 'prescription_information_view',
            component: () => import('../views/prescription_information/view.vue'),
            meta: {
                index: 0,
                title: '开药信息详情'
            }
        },
						            // 入院信息路由
        {
            path: '/admission_information/table',
            name: 'admission_information_table',
            component: () => import('../views/admission_information/table.vue'),
            meta: {
                index: 0,
                title: '入院信息列表'
            }
        },
        {
            path: '/admission_information/view',
            name: 'admission_information_view',
            component: () => import('../views/admission_information/view.vue'),
            meta: {
                index: 0,
                title: '入院信息详情'
            }
        },
						            // 疾病分类路由
        {
            path: '/classification_of_diseases/table',
            name: 'classification_of_diseases_table',
            component: () => import('../views/classification_of_diseases/table.vue'),
            meta: {
                index: 0,
                title: '疾病分类列表'
            }
        },
        {
            path: '/classification_of_diseases/view',
            name: 'classification_of_diseases_view',
            component: () => import('../views/classification_of_diseases/view.vue'),
            meta: {
                index: 0,
                title: '疾病分类详情'
            }
        },
						            // 疾病信息路由
        {
            path: '/disease_information/table',
            name: 'disease_information_table',
            component: () => import('../views/disease_information/table.vue'),
            meta: {
                index: 0,
                title: '疾病信息列表'
            }
        },
        {
            path: '/disease_information/view',
            name: 'disease_information_view',
            component: () => import('../views/disease_information/view.vue'),
            meta: {
                index: 0,
                title: '疾病信息详情'
            }
        },
						            // 药品信息路由
        {
            path: '/drug_information/table',
            name: 'drug_information_table',
            component: () => import('../views/drug_information/table.vue'),
            meta: {
                index: 0,
                title: '药品信息列表'
            }
        },
        {
            path: '/drug_information/view',
            name: 'drug_information_view',
            component: () => import('../views/drug_information/view.vue'),
            meta: {
                index: 0,
                title: '药品信息详情'
            }
        },
						    	    // 用户路由
    {
        path: '/user/table',
        name: 'user_table',
        component: () => import('../views/user/table.vue'),
        meta: {
            index: 0,
            title: '用户列表'
        }
    },
    {
        path: '/user/view',
        name: 'user_view',
        component: () => import('../views/user/view.vue'),
        meta: {
            index: 0,
            title: '用户详情'
        }
    },
    {
        path: '/user/info',
        name: 'user_info',
        component: () => import('../views/user/info.vue'),
        meta: {
            index: 0,
            title: '个人信息'
        }
    },
    // 用户组路由
    {
        path: '/user_group/table',
        name: 'user_group_table',
        component: () => import('../views/user_group/table.vue'),
        meta: {
            index: 0,
            title: '用户组列表'
        }
    },
    {
        path: '/user_group/view',
        name: 'user_group_view',
        component: () => import('../views/user_group/view.vue'),
        meta: {
            index: 0,
            title: '用户组详情'
        }
    }
]

const router = new VueRouter({
    mode: 'hash',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    let token = to.query.token;
    if (token) {
        $.db.set("token", token, 120);
    }
    next();
})

router.afterEach((to, from, next) => {
    let title = "智慧中医药医疗系统-admin";
    document.title = title;
})

export default router
