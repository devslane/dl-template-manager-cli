import shell from 'shelljs';
import { FrontendTemplateLinks } from './enums';

const cloneTemplateCommands = (projectName: string, selectedTemplate: string) => {
    const cloneCommand = FrontendTemplateLinks[selectedTemplate];
    shell.exec(`npx degit ${cloneCommand} ${projectName}`);
    shell.cd(projectName);
    shell.exec('git init');
    shell.exec('yarn');
};

export default cloneTemplateCommands;
