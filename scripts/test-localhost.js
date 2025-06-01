#!/usr/bin/env node
import fs from 'fs'
import http from 'http'
import path from 'path'

console.log('🧪 Testing Decap CMS Localhost Setup...\n')

// Test 1: Check if config.yml exists
console.log('1. Checking config.yml...')
const configPath = path.join(process.cwd(), 'public/admin/config.yml')
if (fs.existsSync(configPath)) {
    console.log('   ✅ config.yml found')

    // Check if local_backend is enabled
    const configContent = fs.readFileSync(configPath, 'utf8')
    if (configContent.includes('local_backend: true')) {
        console.log('   ✅ local_backend is enabled')
    } else {
        console.log('   ⚠️  local_backend not found or not enabled')
    }
} else {
    console.log('   ❌ config.yml not found')
}

// Test 2: Check if content directories exist
console.log('\n2. Checking content directories...')
const postsDir = path.join(process.cwd(), 'content/posts')
const pagesDir = path.join(process.cwd(), 'content/pages')

if (fs.existsSync(postsDir)) {
    console.log('   ✅ content/posts directory exists')
} else {
    console.log('   ❌ content/posts directory missing')
}

if (fs.existsSync(pagesDir)) {
    console.log('   ✅ content/pages directory exists')
} else {
    console.log('   ❌ content/pages directory missing')
}

// Test 3: Check if admin page exists
console.log('\n3. Checking admin page...')
const adminPagePath = path.join(process.cwd(), 'app/admin/page.tsx')
const adminLayoutPath = path.join(process.cwd(), 'app/admin/layout.tsx')

if (fs.existsSync(adminPagePath)) {
    console.log('   ✅ app/admin/page.tsx exists')
} else {
    console.log('   ❌ app/admin/page.tsx missing')
}

if (fs.existsSync(adminLayoutPath)) {
    console.log('   ✅ app/admin/layout.tsx exists')
} else {
    console.log('   ❌ app/admin/layout.tsx missing')
}

// Test 4: Check if Decap server is running
console.log('\n4. Checking Decap server (port 8081)...')
const req = http.request(
    {
        hostname: 'localhost',
        port: 8081,
        path: '/',
        method: 'GET',
        timeout: 2000,
    },
    () => {
        console.log('   ✅ Decap server is running on port 8081')
    }
)

req.on('error', (err) => {
    if (err.code === 'ECONNREFUSED') {
        console.log(
            '   ⚠️  Decap server not running. Start it with: npx decap-server'
        )
    } else {
        console.log(`   ❌ Error connecting to Decap server: ${err.message}`)
    }
})

req.on('timeout', () => {
    console.log('   ⚠️  Timeout connecting to Decap server')
    req.destroy()
})

req.end()

// Test 5: Check package.json dependencies
console.log('\n5. Checking dependencies...')
const packagePath = path.join(process.cwd(), 'package.json')
if (fs.existsSync(packagePath)) {
    const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'))

    if (packageJson.dependencies && packageJson.dependencies['decap-cms-app']) {
        console.log('   ✅ decap-cms-app dependency found')
    } else {
        console.log('   ❌ decap-cms-app dependency missing')
    }

    if (packageJson.dependencies && packageJson.dependencies['gray-matter']) {
        console.log('   ✅ gray-matter dependency found')
    } else {
        console.log('   ❌ gray-matter dependency missing')
    }

    if (
        packageJson.dependencies &&
        packageJson.dependencies['react-markdown']
    ) {
        console.log('   ✅ react-markdown dependency found')
    } else {
        console.log('   ❌ react-markdown dependency missing')
    }
}

console.log('\n📋 Setup Instructions:')
console.log('1. Run: npx decap-server (in one terminal)')
console.log('2. Run: npm run dev (in another terminal)')
console.log('3. Visit: http://localhost:3000/admin')
console.log('\n📖 For detailed instructions, see LOCALHOST_SETUP.md')
