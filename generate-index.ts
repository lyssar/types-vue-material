import fs from 'fs';

const componentPath = '../../vue-material/dist/components/';
    
fs.writeFileSync('./index.d.ts', `
declare module 'vue-material/dist/components' {
    import { PluginFunction } from 'vue';

    ${
        fs.readdirSync(componentPath)
            .filter(fileResult => fs.statSync(componentPath + fileResult).isDirectory())
            .map(file => `
                export const ${file}: PluginFunction<any>;
            `)
            .join('\n')
    }
}    
`);
