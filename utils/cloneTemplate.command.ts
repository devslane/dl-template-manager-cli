import shell from 'shelljs';
import { FrontendTemplateLinks } from './enums';

const cloneTemplateCommands = (projectName: string, selectedTemplate: string) => {
    const cloneCommand = FrontendTemplateLinks[selectedTemplate];
    // ** Clone Template from the required repo
    shell.exec(`npx degit ${cloneCommand} ${projectName}`);
    shell.cd(projectName);

    // ** Initialize git
    shell.exec('git init');

    // ** Install dependencies
    shell.exec('yarn');
};

export default cloneTemplateCommands;
