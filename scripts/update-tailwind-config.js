/* eslint-disable */
import fs from 'fs';
import utils from 'util';
import path from 'path';

export default function update() {
    const tailwindConfig = require(path.join(process.cwd(), 'tailwind.config.js'));
    tailwindConfig.safelist = ['h-[3.75rem]', 'h-[6.25rem]', 'w-[3.75rem]', 'w-[6.25rem]'];

    fs.writeFileSync(path.join(process.cwd(), 'tailwind.config.js'), 'module.exports = ');

    fs.appendFileSync(path.join(process.cwd(), 'tailwind.config.js'), utils.inspect(tailwindConfig));
}
