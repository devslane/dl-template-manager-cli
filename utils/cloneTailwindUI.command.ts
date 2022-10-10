import chalk from 'chalk';
import shell from 'shelljs';
import getPackages from '../scripts/get-package';
import updateTailwindConfig from '../scripts/update-tailwind-config';

const cloneTailwindUICommands = () => {
    shell.cd('src');

    // ** Clone Tailwind UI Component Repo
    shell.echo(chalk.green('STARTED: Cloning Shared Components'));
    shell.exec('npx degit https://github.com/devslane/tailwind-react-ui-components temp-repo');

    shell.cd('temp-repo');

    // ** Move required folders to the root
    shell.mv('src/shared-resources', '..');
    shell.mv('src/hooks', '..');
    shell.mv('src/index.scss', '..');
    shell.echo(chalk.green('COMPLETE: Cloning Shared Components'));
    const packages = getPackages();
    shell.cd('..');

    // ** Delete unnecessary data
    shell.rm('-r', 'temp-repo/');

    shell.cd('..');

    // ** Add required libraries
    shell.echo(chalk.green('STARTED: Dependencies ADD'));
    shell.exec('yarn add -D classnames');
    shell.exec(`yarn add ${packages}`);

    shell.echo(chalk.green('COMPLETE: Dependencies ADD'));

    updateTailwindConfig();

    shell.cd('..');
};

export default cloneTailwindUICommands;
