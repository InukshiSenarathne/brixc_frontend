export const DashboardNav = [
    {
        icon: 'pe-7s-graph1',
        label: 'Dashboard',
        to: '#/dashboards/basic',
    },
];

export const CalenderNav = [
    {
        icon: 'pe-7s-scissors',
        label: 'My Calendar',
        content: [
            {
                label: 'To Do',
                to: '#/reports/hourly-production',
            },
            {
                label: 'Schedule',
                to: '#/elements/dropdowns',

            },
            {
                label: 'Calender',
                to: '#/elements/icons',
            }
        ],
    },
    {
        icon: 'pe-7s-graph2',
        label: 'Company Calendar',
        to: '#/widgets/dashboard-boxes',
    }
];

export const JobsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'In Progress',
        to: '#/widgets/dashboard-boxes',
    },
    {
        icon: 'pe-7s-graph2',
        label: 'Manage Job Posts',
        to: '#/widgets/dashboard-boxes',
    }
];
export const CandidatesNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'Candidate List',
        to: '#/widgets/dashboard-boxes',
    }
];
export const TalentPoolNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'Talent Pool',
        to: '#/widgets/dashboard-boxes',
    },
];
export const SettingsNav = [
    {
        icon: 'pe-7s-graph2',
        label: 'User Settings',
        to: '#/settings/usersettings',
    },
    {
        icon: 'pe-7s-graph2',
        label: 'Job Types',
        to: '#/settings/jobtypes',
    },
    {
        icon: 'pe-7s-graph2',
        label: 'Departments',
        to: '#/settings/departments',
    },
    {
        icon: 'pe-7s-graph2',
        label: 'Tags',
        to: '#/settings/tags',
    },
];