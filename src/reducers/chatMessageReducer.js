export default function chatMessageReducer(state, action) {
    switch (action.type) {
        case 'add' :
            return [...state, action.data]

        case 'replace_state' :
            return [
                ...action.data
            ]
    }


}

