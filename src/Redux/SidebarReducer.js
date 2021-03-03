let initialState = {
    Sidebar: {
        friends: [
            { id: 1, name: 'Zheka' },
            { id: 2, name: 'Andrey' },
            { id: 3, name: 'Rodik' }
        ]
    }
}

const SidebarReducer = (state = initialState, action) => {
	return state;
}

export default SidebarReducer;