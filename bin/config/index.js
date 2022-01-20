module.exports = {
    npmUrl: 'https://registry.npmjs.org/zhangwm-cli',
    promptTypeList: [
        {
            type: 'list',
            message: 'Please select the template type to pull:',
            name: 'type',
            choices: [
                {
                name: 'strview-app',
                    value: {
                        url: 'https://github.com/iFaded/zhangwm-cli.git',
                        gitName: 'zhangwm-app',
                        val: 'zhangwm-app',
                    },
                },
            ],
        },
    ],
};