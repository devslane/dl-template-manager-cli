#! /usr/bin/env node
import inquirer from 'inquirer';
import frameworkQuestion from './utils/framework';
import shell from "shelljs"

shell.echo("Welcome to Devslane Template Manager");

inquirer.prompt(frameworkQuestion).then((answers: any) => {
    if (answers.framework === 'Backend') {
        shell.echo("Backend Templates are in progress");
    }
});
