#!/usr/bin/env node
import fs from 'fs'

console.log('🦙 Verifying Tina CMS Setup...\n')

// Check if required files exist
const requiredFiles = [
    'tina/config.ts',
    'tina/__generated__/client.ts',
    'tina/__generated__/types.ts',
    'public/admin/index.html',
    'content/posts/hello-world.mdx',
    'content/pages/about.mdx',
]

let allFilesExist = true

requiredFiles.forEach((file) => {
    if (fs.existsSync(file)) {
        console.log(`✅ ${file}`)
    } else {
        console.log(`❌ ${file} - Missing!`)
        allFilesExist = false
    }
})

// Check package.json scripts
const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const requiredScripts = {
    dev: 'tinacms dev -c "next dev"',
    build: 'tinacms build && next build',
    start: 'tinacms build && next start',
}

console.log('\n📦 Checking package.json scripts:')
let scriptsCorrect = true

Object.entries(requiredScripts).forEach(([script, expectedCommand]) => {
    if (packageJson.scripts[script] === expectedCommand) {
        console.log(`✅ ${script}: ${packageJson.scripts[script]}`)
    } else {
        console.log(
            `❌ ${script}: Expected "${expectedCommand}", got "${packageJson.scripts[script]}"`
        )
        scriptsCorrect = false
    }
})

// Check React version
console.log('\n⚛️  Checking React version:')
const reactVersion = packageJson.dependencies.react
if (reactVersion.startsWith('^18') || reactVersion.startsWith('18')) {
    console.log(`✅ React version: ${reactVersion} (Compatible with Tina CMS)`)
} else {
    console.log(
        `⚠️  React version: ${reactVersion} (Tina CMS recommends React 18)`
    )
}

// Check if Tina dependencies are installed
console.log('\n📚 Checking Tina CMS dependencies:')
const tinaDeps = ['tinacms', '@tinacms/cli', '@tinacms/auth']
tinaDeps.forEach((dep) => {
    if (packageJson.dependencies[dep]) {
        console.log(`✅ ${dep}: ${packageJson.dependencies[dep]}`)
    } else {
        console.log(`❌ ${dep} - Not installed!`)
        allFilesExist = false
    }
})

// Final status
console.log(`\n${'='.repeat(50)}`)
if (allFilesExist && scriptsCorrect) {
    console.log('🎉 Tina CMS setup is complete!')
    console.log('\n📋 Next steps:')
    console.log(
        '1. Start development server: TINA_PUBLIC_IS_LOCAL=true npm run dev'
    )
    console.log('2. Access admin: http://localhost:3000/admin/index.html')
    console.log('3. For production, follow the setup guide in TINA_SETUP.md')
} else {
    console.log('❌ Tina CMS setup has issues. Please check the errors above.')
    process.exit(1)
}
