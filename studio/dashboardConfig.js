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
                  buildHookId: '614bd995bbfd000090179b6c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-12gbett4',
                  apiId: 'e076b366-a070-4750-b3d8-2fa9f7acd45e'
                },
                {
                  buildHookId: '614bd995184eb600dd0b8f0e',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-hyugn5xh',
                  apiId: 'ff095878-9c44-4377-9be4-3e0dc36edd81'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aayush6194/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-hyugn5xh.netlify.app', category: 'apps'}
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
