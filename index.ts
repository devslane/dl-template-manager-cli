#! /usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer';
import shell from 'shelljs';
import cloneTailwindUICommands from './utils/cloneTailwindUI.command';
import cloneTemplateCommands from './utils/cloneTemplate.command';
import { FrameworkOptions } from './utils/enums';
import { frameworkQuestion, frontendTemplates, projectName } from './utils/options';

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

                cloneTemplateCommands(projectNameA, selectedTemplate);
                cloneTailwindUICommands();

                shell.echo(chalk.green(`COMPLETE : Cloning ${selectedTemplate}`));
            });
        }
    });
});
