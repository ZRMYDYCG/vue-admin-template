// 常量路由
export const constantRoute = [
    {
        // 登录
        path: '/login',
        component: () => import('@/views/login/index.vue'),
        name: 'login', // 命名路由 - 做菜单权限时会有作用
        meta: {
            title: '登录',
            hidden: true
        }
    },
    {
        // 登录成功后展示数据的路由
        path: '/',
        component: () => import('@/Layout/index.vue'),
        name: 'layout',
        meta: {
            title: '',
            hidden: false
        },
        redirect: '/home',
        children: [
            {
                path: '/home',
                component: () => import('@/views/home/index.vue'),
                meta: {
                    title: '首页',
                    hidden: false
                }
            }
        ]
    },
    {
      path: '/component',
      component: () => import('@/Layout/index.vue'),
      name: 'component',
      meta: {
          title: 'IKUN-UI组件库源码',
          hidden: false
      },
      redirect: '/GenericComponents',
      children: [
          {
              // 通用组件
              path: '/GenericComponents',
              component: () => import('@/views/GenericComponents/index.vue'),
              name: 'GenericComponents',
              meta: {
                  title: '通用组件',
                  hidden: false
              },
              redirect: '/GenericComponents/Button',
              children: [
                  {
                      path: '/GenericComponents/Button',
                      component: import('@/views/GenericComponents/Button/index.vue'),
                      meta: {
                          title: '按钮 Button',
                          hidden: false
                      }
                  },
                  {
                      path: '/GenericComponents/Icon',
                      component: import('@/views/GenericComponents/Icon/index.vue'),
                      meta: {
                          title: '图标 Icon',
                          hidden: false
                      }
                  },
                  {
                      path: '/GenericComponents/Layout',
                      component: import('@/views/GenericComponents/Layout/index.vue'),
                      meta: {
                          title: '布局 Layout',
                          hidden: false
                      }
                  },
                  {
                      path: '/GenericComponents/Menu',
                      component: import('@/views/GenericComponents/Menu/index.vue'),
                      meta: {
                          title: '导航菜单 Menu',
                          hidden: false
                      }
                  },
                  {
                      path: '/GenericComponents/Space',
                      component: import('@/views/GenericComponents/Space/index.vue'),
                      meta: {
                          title: '间距 Space',
                          hidden: false
                      }
                  },
                  {
                      path: '/GenericComponents/BackTop',
                      component: import('@/views/GenericComponents/BackTop/index.vue'),
                      meta: {
                          title: '回到顶部 BackTop',
                          hidden: false
                      }
                  },
                  {
                      path: '/GenericComponents/Ripple',
                      component: import('@/views/GenericComponents/Ripple/index.vue'),
                      meta: {
                          title: '水波纹 Ripple',
                          hidden: false
                      }
                  }
              ]
          },
          {
              // 数据展示组件
              path: '/DataDisplayComponent',
              component: () => import('@/views/DataDisplayComponent/index.vue'),
              name: 'DataDisplayComponent',
              meta: {
                  title: '数据展示组件',
                  hidden: false
              },
              redirect: '/DataDisplayComponent/Avatar',
              children: [
                  {
                      path: '/DataDisplayComponent/Avatar',
                      component: import('@/views/DataDisplayComponent/Avatar/index.vue'),
                      meta: {
                          title: '头像 Avatar',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataDisplayComponent/Card',
                      component: import('@/views/DataDisplayComponent/Card/index.vue'),
                      meta: {
                          title: '卡片 Card',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataDisplayComponent/Modal',
                      component: import('@/views/DataDisplayComponent/Modal/index.vue'),
                      meta: {
                          title: '对话框 Modal',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataDisplayComponent/Drawer',
                      component: import('@/views/DataDisplayComponent/Drawer/index.vue'),
                      meta: {
                          title: '抽屉 Drawer',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataDisplayComponent/Tabs',
                      component: import('@/views/DataDisplayComponent/Tabs/index.vue'),
                      meta: {
                          title: '选项卡 Tabs',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataDisplayComponent/Tag',
                      component: import('@/views/DataDisplayComponent/Tag/index.vue'),
                      meta: {
                          title: '标签 Tag',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataDisplayComponent/Collapse',
                      component: import('@/views/DataDisplayComponent/Collapse/index.vue'),
                      meta: {
                          title: '折叠动画 Collapse',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataDisplayComponent/Calendar',
                      component: import('@/views/DataDisplayComponent/Calendar/index.vue'),
                      meta: {
                          title: '日历 Calendar',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataDisplayComponent/Carousel',
                      component: import('@/views/DataDisplayComponent/Carousel/index.vue'),
                      meta: {
                          title: '轮播 Carousel',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataDisplayComponent/Empty',
                      component: import('@/views/DataDisplayComponent/Empty/index.vue'),
                      meta: {
                          title: '空状态 Empty',
                          hidden: false
                      }
                  }
              ]
          },
          {
              // 数据录入组件
              path: '/DataEntryComponent',
              component: () => import('@/views/DataEntryComponent/index.vue'),
              name: 'DataEntryComponent',
              meta: {
                  title: '数据录入组件',
                  hidden: false
              },
              redirect: '/DataEntryComponent/Switch',
              children: [
                  {
                      path: '/DataEntryComponent/Switch',
                      component: import('@/views/DataEntryComponent/Switch/index.vue'),
                      meta: {
                          title: '开关 Switch',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataEntryComponent/Input',
                      component: import('@/views/DataEntryComponent/Input/index.vue'),
                      meta: {
                          title: '输入框 Input',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataEntryComponent/Select',
                      component: import('@/views/DataEntryComponent/Select/index.vue'),
                      meta: {
                          title: '下拉框 Select',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataEntryComponent/Checkbox',
                      component: import('@/views/DataEntryComponent/Checkbox/index.vue'),
                      meta: {
                          title: '复选框 Checkbox',
                          hidden: false
                      }
                  },
                  {
                      path: '/DataEntryComponent/Slider',
                      component: import('@/views/DataEntryComponent/Slider/index.vue'),
                      meta: {
                          title: '滑块 Slider',
                          hidden: false
                      }
                  }
              ]
          },
          {
              // 数据反馈组件
              path: '/FeedbackComponent',
              component: () => import('@/views/FeedbackComponent/index.vue'),
              name: 'FeedbackComponent',
              meta: {
                  title: '信息反馈组件',
                  hidden: false
              },
              redirect: '/FeedbackComponent/Slider',
              children: [
                  {
                      path: '/FeedbackComponent/Slider',
                      component: import('@/views/FeedbackComponent/Message/index.vue'),
                      meta: {
                          title: '提示 Message',
                          hidden: false
                      }
                  },
                  {
                      path: '/FeedbackComponent/Loading',
                      component: import('@/views/FeedbackComponent/Loading/index.vue'),
                      meta: {
                          title: '加载状态 Loading',
                          hidden: false
                      }
                  },
                  {
                      path: '/FeedbackComponent/Tooltip',
                      component: import('@/views/FeedbackComponent/Tooltip/index.vue'),
                      meta: {
                          title: '文字提示 Tooltip',
                          hidden: false
                      }
                  },
                  {
                      path: '/FeedbackComponent/LockScreen',
                      component: import('@/views/FeedbackComponent/LockScreen/index.vue'),
                      meta: {
                          title: '锁屏 LockScreen',
                          hidden: false
                      }
                  },
                  {
                      path: '/FeedbackComponent/Skeleton',
                      component: import('@/views/FeedbackComponent/Skeleton/index.vue'),
                      meta: {
                          title: '骨架屏 Skeleton',
                          hidden: false
                      }
                  }
              ]
          }
      ]
    },
    {
        // 404
        path: '/404',
        component: () => import('@/views/404/index.vue'),
        name: '404',
        meta: {
            title: '404',
            hidden: true
        }
    },
    {
        path: '/screen',
        component: () => import('@/views/screen/index.vue'),
        name: 'Screen',
        meta: {
            title: '数据大屏',
            hidden: false
        }
    },
    {
        // 任意路由
        path: '/:pathMatch(.*)*',
        redirect: '/404',
        name: 'Any',
        meta: {
            title: 'Any',
            hidden: true
        }
    }
]
