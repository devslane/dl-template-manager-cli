/* eslint-disable */
import path from 'path';

const ALREADY_INSTALLED = ['react', 'react-dom'];

export default function getPackages(): string {
    const packageJson = require(path.join(process.cwd(), 'package.json'));
    const allPackages = Object.keys(packageJson.dependencies ?? {});
    return allPackages.filter((item: string) => !ALREADY_INSTALLED.includes(item)).join(' ');
}
