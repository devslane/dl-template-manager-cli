import shell from 'shelljs';

const cloneTailwindUICommands = () => {
    shell.mkdir('src/shared-components');
    shell.cd('src/shared-components');
    shell.exec('npx degit https://github.com/devslane/tailwind-react-ui-components temp-repo');
    shell.cd('temp-repo');

    //! TEMP COMMANDS START
    shell.mkdir('src');
    shell.mkdir('src/components');
    shell.mkdir('src/constants');
    shell.mkdir('src/styles');
    shell.mkdir('src/hooks');
    shell.touch(['src/components/test1.txt', 'src/components/test2.txt']);
    shell.touch(['src/constants/constant1.txt', 'src/constants/constant2.txt']);
    shell.touch(['src/styles/style1.txt', 'src/styles/style2.txt']);
    shell.touch(['src/hooks/hooks1.txt', 'src/hooks/hooks2.txt']);
    //! TEMP COMMANDS END

    shell.mv('src/components/*', '..');
    shell.mv('src/constants', '..');
    shell.mv('src/styles', '..');
    shell.mv('src/hooks', '../..');
    shell.cd('..');
    shell.rm('-r', 'temp-repo/');
    shell.cd('..');
};

export default cloneTailwindUICommands;
