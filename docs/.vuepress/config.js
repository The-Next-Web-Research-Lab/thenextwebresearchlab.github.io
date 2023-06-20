import {
  googleAnalyticsPlugin
} from "@vuepress/plugin-google-analytics";
import {
  defaultTheme
} from "vuepress";
import {
  getDirname,
  path
} from '@vuepress/utils'

const __dirname = getDirname(
  import.meta.url)

export default {
  title: 'The Next Web Research Lab',
  base: '/',
  markdown: {
    importCode: {
      handleImportPath: (str) => {
        return str
          .replace('@/docs', path.resolve(__dirname, '../'))
          .replace('@/0_files', path.resolve(__dirname, '../../0_files'))
      }
    }
  },
  theme: defaultTheme({
    colorMode: 'dark',
    colorModeSwitch: false,
    navbar: [{
        text: '소개',
        link: '/intro/'
      }, {
        text: '선행개발',
        link: '/next-web-research/'
      },
      {
        text: '실용주의 FE Dev',
        children: [{
            text: '0장 소개',
            link: '/fe-dev/intro'
          },
          {
            text: '1장 좋은코드',
            link: '/fe-dev/good-code'
          },
          {
            text: '2장 리팩터링',
            link: '/fe-dev/refactoring'
          },
          {
            text: '3장 프로젝트 관리',
            link: '/fe-dev/project-management'
          },
          {
            text: '4장 React / Vue / Angular',
            link: '/fe-dev/framework',
          },
          {
            text: '5장 명령형 / 객체지향 / 함수형',
            link: '/fe-dev/paradigm'
          },
          {
            text: '6장 코드 스니펫',
            link: '/fe-dev/code-snippets'
          },
          {
            text: '7장 펫 프로젝트',
            link: '/fe-dev/pet-project'
          },
          {
            text: '8장 디자인 패턴',
            link: '/fe-dev/design-patterns'
          },
        ]
      },
      {
        text: '에세이',
        link: '/essay/'
      },
    ],
    sidebar: {
      '/fe-dev/code-snippets': [
        '/fe-dev/code-snippets/',
        {
          text: 'Data Structure',
          collapsible: true,
          children: [
            {text: 'Set', link: '/fe-dev/code-snippets/Data-Structure/Set/'},
            {text: 'Stack', link: '/fe-dev/code-snippets/Data-Structure/Stack/'},
            {text: 'Queue', link: '/fe-dev/code-snippets/Data-Structure/Queue/'},
            {text: 'LinkedList', link: '/fe-dev/code-snippets/Data-Structure/LinkedList/'},
          ]
        },
        {
          text: 'UIComponent',
          collapsible: true,
          children: [
            {text: 'Boilerplate', link: '/fe-dev/code-snippets/UIComponent/Boilerplate/'},
            {text: 'Pagination', link: '/fe-dev/code-snippets/UIComponent/Pagination/'},
            {text: 'Calendar', link: '/fe-dev/code-snippets/UIComponent/Calendar/'},
            {text: 'TimePicker', link: '/fe-dev/code-snippets/UIComponent/TimePicker/'},
            {text: 'InfiniteScrolling', link: '/fe-dev/code-snippets/UIComponent/InfiniteScrolling/'},
            {text: 'Slider', link: '/fe-dev/code-snippets/UIComponent/Slider/'},
          ]
        },
        {
          text: 'Helper',
          collapsible: true,
          children: [
            {text: 'Helper', link: '/fe-dev/code-snippets/Helper/Helper/'},
            {text: 'Contextmenu', link: '/fe-dev/code-snippets/Helper/contextmenu/'},
            {text: 'clone', link: '/fe-dev/code-snippets/Helper/clone/'},
            {text: 'produce', link: '/fe-dev/code-snippets/Helper/produce/'},
            {text: 'safe-chain', link: '/fe-dev/code-snippets/Helper/safe-chain/'},
            {text: 'shuffle', link: '/fe-dev/code-snippets/Helper/shuffle/'},
            {text: 'Router', link: '/fe-dev/code-snippets/Helper/router/'},
            {text: 'Observer', link: '/fe-dev/code-snippets/Helper/observer/'},
            {text: 'Component', link: '/fe-dev/code-snippets/Helper/component/'},
            {text: 'Directive', link: '/fe-dev/code-snippets/Helper/directive/'},
            {text: 'Template Binding', link: '/fe-dev/code-snippets/Helper/template-binding/'},
          ]
        },
        {
          text: 'Javascript',
          collapsible: true,
          children: [
            {text: 'Web APIs', link: '/fe-dev/code-snippets/Javascript/WebApis/'},
            {text: 'Array', link: '/fe-dev/code-snippets/Javascript/Array/'},
            {text: 'Date', link: '/fe-dev/code-snippets/Javascript/Date/'},
            {text: 'Iterable', link: '/fe-dev/code-snippets/Javascript/Iterable/'},
            {text: 'Object', link: '/fe-dev/code-snippets/Javascript/Object/'},
            {text: 'String', link: '/fe-dev/code-snippets/Javascript/String/'},
            {text: 'RegExp', link: '/fe-dev/code-snippets/Javascript/RegExp/'},
          ]
        },
        {
          text: 'CSS3',
          collapsible: true,
          children: [
            {text: 'Flex', link: '/fe-dev/code-snippets/CSS3/Flex/'},
            {text: 'Mask Image', link: '/fe-dev/code-snippets/CSS3/MaskImage/'},
          ]
        },
        {
          text: 'HTML5',
          collapsible: true,
          children: [
            {text: 'HTML5', link: '/fe-dev/code-snippets/HTML5/HTML5/'},
            {text: 'FetchApi', link: '/fe-dev/code-snippets/HTML5/FetchApi/'},
            {text: 'FileReader', link: '/fe-dev/code-snippets/HTML5/FileReader/'},
            {text: 'SVG', link: '/fe-dev/code-snippets/HTML5/SVG/'},
          ]
        },
        {
          text: 'OpenSources',
          collapsible: true,
          children: [
            {text: 'eslint', link: '/fe-dev/code-snippets/OpenSources/eslint/'},
            {text: 'chart-adaptor', link: '/fe-dev/code-snippets/OpenSources/chart-adaptor/'},
            {text: 'editor', link: '/fe-dev/code-snippets/OpenSources/editor/'},
            {text: 'express-server', link: '/fe-dev/code-snippets/OpenSources/express-server/'},
            {text: 'pdfjs-sample', link: '/fe-dev/code-snippets/OpenSources/pdfjs-sample/'},
          ]
        },
        {
          text: 'Functional',
          link: '/fe-dev/code-snippets/Functional/Functional/'
        },
        {
          text: 'TodoList',
          link: '/fe-dev/code-snippets/TodoList/'
        },
        {
          text: 'Reactive',
          link: '/fe-dev/code-snippets/Reactive/Reactive/'
        },
      ],
      '/fe-dev/pet-project': [
        '/fe-dev/pet-project/',
        {
          text: 'Vue',
          collapsible: true,
          children: [
            '/fe-dev/pet-project/vue2-part/',
            '/fe-dev/pet-project/vue2-component/',
            '/fe-dev/pet-project/vuex/'
          ]
        },
        {
          text: 'Helper',
          collapsible: true,
          children: ['/fe-dev/pet-project/momentjs/',
            '/fe-dev/pet-project/immerjs/',
            '/fe-dev/pet-project/axios/',
          ]
        },
        {
          text: 'Component',
          collapsible: true,
          children: [
            '/fe-dev/pet-project/component/2020-08-component/',
            '/fe-dev/pet-project/component/vuex-feature/',
            '/fe-dev/pet-project/component/recoil-feature/',
            '/fe-dev/pet-project/component/fragment-dom/',
            '/fe-dev/pet-project/component/simple-dom/',
            '/fe-dev/pet-project/component/simple-component/'
          ]
        },
        {
          text: 'MVC',
          collapsible: true,
          children: [
            '/fe-dev/pet-project/mvc/2021-07-mvc/',
            '/fe-dev/pet-project/mvc/2020-08-mvc/', '/fe-dev/pet-project/mvc/2021-07-mvc-class/', '/fe-dev/pet-project/mvc/2020-08-mvc-class/', '/fe-dev/pet-project/mvc/2020-08-mvc-function/'
          ],
        },
      ]
    }
  }),
  head: [
    [
      'meta',
      {
        name: 'google-site-verification',
        content: '' // yX6dHIw5DyDCd9iNbZSo2w8VjnED68OLdw6zu_Rm554
      }
    ]
  ],
  plugins: [
    googleAnalyticsPlugin({
      id: '' // G-B42104C429
    }),
  ]
}