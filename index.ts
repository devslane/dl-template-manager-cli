#! /usr/bin/env node
import inquirer from 'inquirer';
import shell from 'shelljs';
import chalk from 'chalk';
import { frameworkQuestion, frontendTemplates, projectName } from './utils/options';
import { FrameworkOptions, FrontendTemplateLinks } from './utils/enums';

shell.echo(chalk.green('Welcome to Devslane Template Manager'));

inquirer.prompt(projectName).then((pAnswer: any) => {
    const projectNameA = pAnswer.project_name;
    inquirer.prompt(frameworkQuestion).then((fAnswers: any) => {
        if (fAnswers.framework === FrameworkOptions.BACKEND) {
            shell.echo(chalk.red('Backend Templates are in progress'));
        }
        if (fAnswers.framework === FrameworkOptions.FRONTEND) {
            inquirer.prompt(frontendTemplates).then((fTemplate: any) => {
                const selectedTemplate = fTemplate.frontend_template;
                shell.echo(chalk.green(`STARTED : Cloning ${selectedTemplate}`));
                const cloneCommand = FrontendTemplateLinks[selectedTemplate];
                if (cloneCommand) {
                    shell.exec(`npx degit ${cloneCommand} ${projectNameA}`);
                    shell.echo(chalk.green(`COMPLETE : Cloning ${selectedTemplate}`));
                    shell.echo(chalk.bgWhite(chalk.blue('Follow these steps to start working')));
                    shell.echo(chalk.yellow(`1. cd ${projectNameA}`));
                    shell.echo(chalk.yellow('2. yarn'));
                    shell.echo(chalk.yellow('3. yarn run dev'));
                }
            });
        }
    });
});
