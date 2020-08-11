export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5f328f2535187df7841966b4',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-nvzjhhgt',
                  apiId: 'd5803e6f-0e66-48a6-9bb6-c3fc301c88e7'
                },
                {
                  buildHookId: '5f328f256d5d9f1aa9e314a6',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-evex1tg2',
                  apiId: 'ebea3768-c58a-42de-8f40-dc08c5b3330c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/rodriguesfelipeti/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-evex1tg2.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
