import Utils from "../../utils/Utils";

export const MENUITEMS = [
	{
		menutitle: 'DASHBOARD',
		permission: Utils.can('View Dashboard'),
		Items: [
			{
				path: `${process.env.PUBLIC_URL}/landingpage`,
				icon: 'ti-layout',
				type: 'link',
				active: false,
				selected: false,
				title: 'Home',
				permission: true,
			},
			{
				path: `${process.env.PUBLIC_URL}/dashboard`,
				icon: 'ti-home',
				type: 'link',
				active: false,
				selected: false,
				title: 'Dashboard',
				permission: Utils.can('View Dashboard'),
			},
			{
				path: `${process.env.PUBLIC_URL}/users`,
				icon: 'fa fa-users',
				type: 'link',
				active: false,
				selected: false,
				title: 'Users',
				permission: Utils.can('View User'),
			},
			{
				path: `${process.env.PUBLIC_URL}/aboutus`,
				icon: 'fa fa-list',
				type: 'link',
				active: false,
				selected: false,
				title: 'About Us',
				permission: true,
			},
			{
				icon: 'ti-shopping-cart-full',
				path: `${process.env.PUBLIC_URL}/products`,
				type: 'link',
				active: false,
				selected: false,
				title: 'Products',
				permission: true,//Utils.can('View Products'),
			},
			{
				title: 'History',
				icon: 'ti-wallet',
				path: `${process.env.PUBLIC_URL}/history`,
				type: 'link',
				active: false,
				selected: false,
				permission: true,
			},
			{
				path: `${process.env.PUBLIC_URL}/productdeatils`,
				type: 'link',
				active: false,
				selected: false,
				title: 'Product Details',
				permission: false,
				icon: 'fa fa-calendar-times-o',
			},
			{
				icon: 'ti-shopping-cart-full',
				path: `${process.env.PUBLIC_URL}/cheackout`,
				type: 'link',
				active: false,
				selected: false,
				title: 'Checkout',
				permission: false,
			},
			{
				path: `${process.env.PUBLIC_URL}/cart`,
				type: 'link',
				active: false,
				selected: false,
				title: 'Cart',
				permission: false,
				icon: 'fa fa-book',
			},
			{
				path: `${process.env.PUBLIC_URL}/order`,
				type: 'link',
				icon: 'fa fa-boxes',
				active: false,
				selected: false,
				title: 'Orders',
				permission: Utils.can('View Order'),
			},
			{
				icon: 'ti-briefcase',
				path: `${process.env.PUBLIC_URL}/pages/faq`,
				type: 'link',
				active: false,
				selected: false,
				title: 'Faqs',
				permission: true,
			},
			{
				path: `${process.env.PUBLIC_URL}/notificationlist`,
				type: 'link',
				active: false,
				selected: false,
				title: 'Notifications',
				permission: true,
				icon: 'fa fa-bookmark',
			},
		]
	},

	{
		menutitle: 'SETTINGS',
		permission: true,
		Items: [
			{
				path: `${process.env.PUBLIC_URL}/permissions`,
				icon: 'fa fa-lock',
				type: 'link',
				active: false,
				selected: false,
				title: 'Permissions',
				permission: Utils.can('View Permissions'),
			},
			{
				path: `${process.env.PUBLIC_URL}/profile`,
				icon: 'fe fe-user',
				type: 'link',
				active: false,
				selected: false,
				title: 'My Profile',
				permission: true,
			},
		]
	},
	{
		menutitle: 'COMPONENTS',
		permission: false,
		Items: [
			{
				title: 'Elements',
				icon: 'ti-package',
				path: `${process.env.PUBLIC_URL}/elements/alerts`,
				type: 'link',
				active: false,
				selected: false,
				title: 'Alerts',
				permission: false,
			},
			{
				icon: 'ti-briefcase',
				permission: true,
				path: `${process.env.PUBLIC_URL}/advanceUI/carousels`,
				type: 'link',
				active: false,
				selected: false,
				title: 'Carousel',
				permission: false,
			}
		]
	},

	{
		menutitle: 'OTHER PAGES',
		permission: false,
		Items: [
			{
				title: 'Pages',
				icon: 'ti-palette',
				type: 'sub',
				menutitle: '',
				active: false,
				selected: false,
				permission: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/pages/messagesuccess`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Success Message',
						permission: false,
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/messagedanger`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Danger Message',
						permission: false,
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/messagewarning`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Warning Message',
						permission: false,
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/emptypage`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Empty Page',
						permission: false,
					},
					{
						path: `${process.env.PUBLIC_URL}/pages/switcherpages`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Switcher Page',
						permission: false,
					}
				]
			},
			{
				title: 'Authentication',
				icon: 'ti-lock',
				type: 'sub',
				permission: false,
				children: [
					{
						path: `${process.env.PUBLIC_URL}/custompages/signin`,
						type: 'link',
						active: false,
						selected: false,
						title: ' Sign In',
						permission: false,
					},
					{
						path: `${process.env.PUBLIC_URL}/signup`,
						type: 'link',
						active: false,
						selected: false,
						title: ' Sign Up',
						permission: false,
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/forgotpassword`,
						type: 'link',
						active: false,
						selected: false,
						title: ' Forgot Password',
						permission: false,
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/resetpassword`,
						type: 'link',
						active: false,
						selected: false,
						title: ' Reset Password',
						permission: false,
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/underConstruction`,
						type: 'link',
						active: false,
						selected: false,
						title: ' UnderConstruction',
						permission: false,
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/lockscreen`,
						type: 'link',
						active: false,
						selected: false,
						title: 'Lockscreen',
						permission: false,
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/error404`,
						type: 'link',
						active: false,
						selected: false,
						title: ' Error404',
						permission: false,
					},
					{
						path: `${process.env.PUBLIC_URL}/custompages/error505`,
						type: 'link',
						active: false,
						selected: false,
						title: ' Error505',
						permission: false,
					}
				]
			}
		]
	},
];