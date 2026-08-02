import nextVitals from 'eslint-config-next/core-web-vitals'
import nextTs from 'eslint-config-next/typescript'
import prettier from 'eslint-config-prettier/flat'
import checkFile from 'eslint-plugin-check-file'
import { defineConfig, globalIgnores } from 'eslint/config'

const eslintConfig = defineConfig([
    ...nextVitals,
    ...nextTs,
    prettier,
    {
        files: ['**/*.{js,jsx,ts,tsx}'],
        plugins: { 'check-file': checkFile },
        rules: {
            'prefer-template': ['error'],
            'check-file/filename-naming-convention': [
                'error',
                {
                    // all files should be named in kebab-case except for file inside hooks folder
                    'app/**/*': 'KEBAB_CASE',
                    'components/**/*': 'KEBAB_CASE',
                    'lib/**/*': 'KEBAB_CASE',
                    'utils/**/*': 'KEBAB_CASE',
                    'store/**/*': 'KEBAB_CASE',
                    'types/**/*': 'KEBAB_CASE',
                },
                {
                    // ignore the middle extensions of the filename to support filename like bable.config.js or smoke.spec.ts
                    ignoreMiddleExtensions: true,
                },
            ],
            'check-file/folder-naming-convention': [
                'error',
                {
                    // all folders (except __tests__) should be named in kebab-case
                    '**/!(__tests__)': 'KEBAB_CASE',
                },
            ],
        },
    },
    // Restates the defaults from eslint-config-next, which get replaced rather
    // than merged as soon as this config declares any ignores of its own.
    globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
])

export default eslintConfig
