import shell from 'shelljs';

const cloneTailwindUICommands = () => {
    shell.mkdir('src/shared-components');
    shell.cd('src/shared-components');

    // ** Clone Tailwind UI Component Repo
    shell.exec('npx degit https://github.com/devslane/tailwind-react-ui-components temp-repo');
    shell.cd('temp-repo');

    // ** Move required folders to the root
    shell.mv('src/components/*', '..');
    shell.mv('src/constants', '..');
    shell.mv('src/styles', '..');
    shell.mv('src/hooks', '../..');
    shell.cd('..');

    // ** Delete unnecessary data
    shell.rm('-r', 'temp-repo/');

    // ** Add required libraries
    shell.exec('npx sb init');
    shell.exec('yarn add -D @headlessui/react @heroicons/react');
    shell.exec('yarn add formik');

    shell.cd('..');
};

export default cloneTailwindUICommands;
