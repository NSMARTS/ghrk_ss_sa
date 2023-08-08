export const sidenavRouteInfo: any = [
    // dashboard
    { 
        type: 'link',
        label: 'Dashboard',
        route: '/main',
        icon: 'dashboard',
        isNsAdmin: true
    },
    {
		type: 'subheading',
		label: 'Leave ',
		children: [
			{
				type: 'dropdown',
				label: 'Leave Management',
				icon: 'event_available',
				isManager: false,
				children: [
					{
						type: 'link',
						label: 'My Leave Status',
						route: '/leave/my-status',
						icon: 'update',
						isManager: false,
						isReplacementDay: false,
					},
					{
						type: 'link',
						label: 'Leave Request',
						route: '/leave/leave-request-list',
						icon: 'update',
						isManager: false,
						isReplacementDay: false,
					},
					{
						type: 'link',
						label: 'Replacement Day Request',
						route: '/leave/rd-request-list',
						icon: 'update',
						isManager: false,
						isReplacementDay: true,
					},
				]
			},
			{
				type: 'dropdown',
				label: 'Employee Management',
				icon: 'groups',
				isManager: true,
				children: [  
					{
						type: 'link',
						label: 'Employee Leave Status',
						route: '/employee-mngmt/employee-leave-status',
						icon: 'update',
						isManager: true,
						isReplacementDay: false,
					},
					{
						type: 'link',
						label: 'Employee List',
						route: '/employee-mngmt/employee-list',
						icon: 'update',
						isManager: true,
						isReplacementDay: false,
					},
					{
						type: 'link',
						label: 'Employee Leave Request',
						route: '/approval-mngmt/leave-request',
						icon: 'update',
						isManager: true,
						isReplacementDay: false,
					},
					{
						type: 'link',
						label: 'RD Confirming Request',
						route: '/employee-mngmt/employee-rd-request',
						icon: 'update',
						isManager: true,
						isReplacementDay: true,
					},
					{
						type: 'link',
						label: 'Employee Register Request',
						route: '/employee-mngmt/register-request',
						icon: 'update',
						isManager: true,
						isReplacementDay: false,
					},
				]
			}
		]
	},
    //company
    {
        type: 'subheading',
        label: 'corporation',
        children: [
            {
                type: 'link',
                label: 'Company List',
                route: '/main',
                icon: 'update',
                isNsAdmin: true
            },
            {
                type: 'link',
                label: 'Admin List',
                route: '/main',
                icon: 'groups',
                isNsAdmin: true
            }
        ]
    },
    // National Holiday Management
    {
        type: 'subheading',
        label: 'holiday management',
        children: [
            {
                type: 'link',
                label: 'Country List',
                route: '/main',
                icon: 'holiday_village',
                isNsAdmin: true
            }
        ]
    }

    // subheading

]