const myConfig = {
    SERVER_URL: "http://localhost:3000",

    CACHE_STATIC: "version_static_test",
    CACHE_DYNAMIC: "version_dynamic_test",

    //Generate this using "npm run web-push generate-vapid-keys" in the backend node,
    WEBSITE_NAME: 'Generic Website',
    //Types of push notifications
    DEFAULT_PUSH_TYPE: 'default_push_type',
    SAFARI_PUSH_TYPE: 'safari_push_type',
    sidebarContext: undefined,
    FACEBOOK_APP_ID: 'test',
    FACEBOOK_APP_VERSION: 'v3.1',
    role: [
        {
            role_Id: 1,
            permissions: ["general_read", "general_create", "general_update", "general_delete", "general_report",
                "admin_read", "admin_create", "admin_update", "admin_delete", "admin_report"],
            name: 'Super Admin',
        },
        {
            role_Id: 2,
            permissions: ["general_read", "general_create", "general_update", "general_delete", "general_report"],
            name: 'Subscriber',
        },
        {
            role_Id: 3,
            permissions: ["general_read", "general_report"],
            name: 'Report',
        }
    ],
}