import { FrameworkOptions, FrontendTemplateOptions } from './enums';

export const projectName = [
    {
        name: 'project_name',
        message: 'Project Name ?',
        default: 'my-app',
    },
];

export const frameworkQuestion = [
    {
        type: 'list',
        name: 'framework',
        message: 'Choose the tech which you want to use:',
        choices: [FrameworkOptions.BACKEND, FrameworkOptions.FRONTEND],
    },
];

export const frontendTemplates = [
    {
        type: 'list',
        name: 'frontend_template',
        message: 'Choose the frontend template which you want to use:',
        choices: [
            FrontendTemplateOptions.VITE_REACT_TAILWIND,
            FrontendTemplateOptions.VITE_REACT_TAILWIND_REDUX,
            FrontendTemplateOptions.NEXT_TAILWIND_REDUX,
        ],
    },
];
