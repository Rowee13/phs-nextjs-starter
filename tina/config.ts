import { defineConfig } from 'tinacms'

// Your hosting provider likely exposes this as an environment variable
const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    'main'

export default defineConfig({
    branch,

    // Get this from tina.io - these are required for authentication
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    // Get this from tina.io - this is your read-only token
    token: process.env.TINA_TOKEN,

    build: {
        outputFolder: 'admin',
        publicFolder: 'public',
    },
    media: {
        tina: {
            mediaRoot: '',
            publicFolder: 'public',
        },
    },
    // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
    schema: {
        collections: [
            {
                name: 'post',
                label: 'Posts',
                path: 'content/posts',
                format: 'mdx',
                ui: {
                    router: ({ document }) => `/blog/${document._sys.filename}`,
                },
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'description',
                        label: 'Description',
                        required: true,
                    },
                    {
                        type: 'image',
                        name: 'heroImage',
                        label: 'Hero Image',
                    },
                    {
                        type: 'datetime',
                        name: 'publishedAt',
                        label: 'Published At',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'author',
                        label: 'Author',
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'category',
                        label: 'Category',
                        options: [
                            {
                                value: 'technology',
                                label: 'Technology',
                            },
                            {
                                value: 'business',
                                label: 'Business',
                            },
                            {
                                value: 'design',
                                label: 'Design',
                            },
                            {
                                value: 'development',
                                label: 'Development',
                            },
                        ],
                    },
                    {
                        type: 'string',
                        name: 'tags',
                        label: 'Tags',
                        list: true,
                    },
                    {
                        type: 'boolean',
                        name: 'featured',
                        label: 'Featured Post',
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                    },
                ],
            },
            {
                name: 'page',
                label: 'Pages',
                path: 'content/pages',
                format: 'mdx',
                ui: {
                    router: ({ document }) => `/${document._sys.filename}`,
                },
                fields: [
                    {
                        type: 'string',
                        name: 'title',
                        label: 'Title',
                        isTitle: true,
                        required: true,
                    },
                    {
                        type: 'string',
                        name: 'description',
                        label: 'Description',
                    },
                    {
                        type: 'rich-text',
                        name: 'body',
                        label: 'Body',
                        isBody: true,
                    },
                ],
            },
        ],
    },
})
