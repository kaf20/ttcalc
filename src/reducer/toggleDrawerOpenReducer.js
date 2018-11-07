export default function toggleDrawerOpenReducer(state = {
    drawerOpen: true
}, action) {
    switch (action.type) {
        case 'RDX_TOGGLE_DRAWER_OPEN':
            const drawerState = {drawerOpen: !state.drawerOpen}
            return Object.assign({}, state, drawerState)
        default:
            return state
    }
}