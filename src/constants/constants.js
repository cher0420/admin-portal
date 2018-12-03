export const MENUS=[
  {
    id:'dashboard',
    chineseName:'仪表盘',
    englishName:'dashboard',
    path:'wait',
    children:
      [
        {
          id:'config',
          chineseName:'配置',
          englishName:'config',
          path:'config'
        }
      ]
  },
  {
    id:'bot',
    chineseName:'机器人列表',
    englishName:'bot',
    path:'bot',
    children:
      [
        {
          id:'config',
          chineseName:'配置',
          englishName:'config',
          path:'config',
          children:[
            {
              id:'web',
              chineseName:'网页',
              englishName:'web',
              path:'web',
            },
            {
              id:'weChatService',
              chineseName:'微信服务号',
              englishName:'weChatService',
              path:'weChatService',
            },
            {
              id:'weChatCompany',
              chineseName:'微信企业号',
              englishName:'weChatCompany',
              path:'weChatCompany',
            },
            {
              id:'robot',
              chineseName:'实体机器人',
              englishName:'robot',
              path:'robot',
            },
            {
              id:'desktopApp',
              chineseName:'桌面应用',
              englishName:'desktopApp',
              path:'desktopApp',
            }
          ]
        }
      ]
  },
  {
    id:'skill',
    chineseName:'机器人技能',
    englishName:'skill',
    path:'wait',
    children:
      [
        {
          id:'config',
          chineseName:'配置',
          englishName:'config',
          path:'config'
        }
      ]
  },
  {
    id:'custom',
    chineseName:'定制服务',
    englishName:'custom',
    path:'wait',
    children:
      [
        {
          id:'config',
          chineseName:'配置',
          englishName:'config',
          path:'config'
        }
      ]
  },
  {
    id:'opinion',
    chineseName:'意见反馈',
    englishName:'opinion',
    path:'wait',
    children:
      [
        {
          id:'config',
          chineseName:'配置',
          englishName:'config',
          path:'config'
        }
      ]
  },
  {
    id:'authority',
    chineseName:'权限管理',
    englishName:'authority',
    path:'wait',
    children:
      [
        {
          id:'config',
          chineseName:'配置',
          englishName:'config',
          path:'config'
        }
      ]
  },
]

export const SECONDMENUS = [
  {
    id:'config',
    chineseName:'基本资料',
    englishName:'config',
    path:'config',
  },
  {
    id:'channel',
    chineseName:'渠道配置',
    englishName:'channel',
    path:'channel',
    children:[
      {
        id:'web',
        chineseName:'网页',
        englishName:'web',
        path:'web',
      },
      {
        id:'weChatService',
        chineseName:'微信服务号',
        englishName:'weChatService',
        path:'weChatService',
      },
      {
        id:'weChatCompany',
        chineseName:'微信企业号',
        englishName:'weChatCompany',
        path:'weChatCompany',
      },
      {
        id:'robot',
        chineseName:'实体机器人',
        englishName:'robot',
        path:'robot',
      },
      {
        id:'desktopApp',
        chineseName:'桌面应用',
        englishName:'desktopApp',
        path:'desktopApp',
      },
    ]
  },
  {
    id:'knowledgeBuild',
    chineseName:'知识建设',
    englishName:'knowledgeBuild',
    path:'knowledgeBuild',
    children:[
      {
        id:'knowledgeQuiz',
        chineseName:'知识问答',
        englishName:'knowledgeQuiz',
        path:'knowledgeQuiz',
      },
      // {
      //   id:'caseStore',
      //   chineseName:'案例库',
      //   englishName:'caseStore',
      //   path:'caseStore',
      // },
      // {
      //   id:'quicklyQA',
      //   chineseName:'快速问答',
      //   englishName:'quicklyQA',
      //   path:'quicklyQA',
      // }
    ]
  }
]
export const STR = {
  authority:'权限管理',
  custom:'定制服务',
  opinion:'意见反馈',
  bot:'机器人列表',
  skill:'机器人技能',
  dashboard:'仪表盘',
  create: '创建',
  edit: '编辑',
  config:'基本资料',
  web:'网页',
  weChatService:'微信服务号',
  weChatCompany:'微信企业号',
  robot:'实体机器人',
  desktopApp:'桌面应用',
  knowledgeQuiz:'知识问答',
  knowledgeDetail:'知识问答',
  caseStore:'案例库',
  quicklyQA:'快速问答'
}
export const USERNAME = 'userName';
export const TOKEN = 'token';
export const TENANTID = 'TenantId'
export const SID = 'SID'



