

export default class Actions {
    
    static snackbarOpenRequest(msg) {
        return {
            type: 'SNACKBAR_OPEN_REQUEST',
            msg: msg
        }
    }

    static snackbarCloseRequest() {
        return {
            type: 'SNACKBAR_CLOSE_REQUEST',
            msg: ''
        }
    }
}