import fs from 'fs'
import matter from 'gray-matter'
import path from 'path'

const postsDirectory = path.join(process.cwd(), 'content/posts')

export interface PostData {
    slug: string
    title: string
    date: string
    thumbnail?: string
    description: string
    author: string
    tags: string[]
    body: string
    layout: string
}

export function getSortedPostsData(): PostData[] {
    // Get file names under /content/posts
    const fileNames = fs.readdirSync(postsDirectory)
    const allPostsData: PostData[] = fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            // Remove ".md" from file name to get slug
            const slug = fileName.replace(/\.md$/, '')

            // Read markdown file as string
            const fullPath = path.join(postsDirectory, fileName)
            const fileContents = fs.readFileSync(fullPath, 'utf8')

            // Use gray-matter to parse the post metadata section
            const matterResult = matter(fileContents)

            // Combine the data with the slug
            return {
                slug,
                ...matterResult.data,
                body: matterResult.content,
                date:
                    matterResult.data.date instanceof Date
                        ? matterResult.data.date.toISOString()
                        : matterResult.data.date,
            } as PostData
        })

    // Sort posts by date
    return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function getAllPostSlugs() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames
        .filter((fileName) => fileName.endsWith('.md'))
        .map((fileName) => {
            return {
                params: {
                    slug: fileName.replace(/\.md$/, ''),
                },
            }
        })
}

export function getPostData(slug: string): PostData {
    const fullPath = path.join(postsDirectory, `${slug}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    // Combine the data with the slug
    return {
        slug,
        ...matterResult.data,
        body: matterResult.content,
        date:
            matterResult.data.date instanceof Date
                ? matterResult.data.date.toISOString()
                : matterResult.data.date,
    } as PostData
}

export function getPageData(pageName: string) {
    const fullPath = path.join(process.cwd(), 'content/pages', `${pageName}.md`)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the page metadata section
    const matterResult = matter(fileContents)

    return {
        ...matterResult.data,
        body: matterResult.content,
    }
}
