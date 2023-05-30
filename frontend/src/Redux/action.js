import * as types from './action.types'


export const GetRequest = () => async (dispatch) => {
    dispatch({ type: types.LOADING })
    try {
        let res = await fetch(`https://pear-thankful-reindeer.cyclic.app/notes/`, {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem('token')
            },
        })
        let data = await res.json();
        if (data) {
            dispatch({ type: types.GETNOTES, payload: data })
        }
        // console.log(data);
    } catch (error) {
        dispatch({ type: types.ERROR })
    }
}

export const PostRequest = (details) => async (dispatch) => {
    try {
        let res = await fetch(`https://pear-thankful-reindeer.cyclic.app/notes/add`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem('token')
            },
            body: JSON.stringify(details)
        })
        let data = await res.json();
        if (data) {
            dispatch({ type: types.ADDNOTES, payload: data })
            window.location.reload();
        }
        // console.log(data);
    } catch (error) {
        dispatch({ type: types.ERROR })
    }
}

export const UpdateRequest = (id, changes) => async (dispatch) => {
    try {
        let res = await fetch(`https://pear-thankful-reindeer.cyclic.app/notes/update/${id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem('token')
            },
            body: JSON.stringify(changes)
        })
        let data = await res.json();
        if (data) {
            dispatch({ type: types.UPDATENOTES, payload: data })
            window.location.reload();
        }
        // console.log(data);
    } catch (error) {
        dispatch({ type: types.ERROR })
    }
}

export const DeleteRequest = (id) => async (dispatch) => {
    try {
        let res = await fetch(`https://pear-thankful-reindeer.cyclic.app/notes/delete/${id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem('token')
            },
        })
        let data = await res.json();
        if (data) {
            dispatch({ type: types.DELETENOTES, payload: data })
            window.location.reload();
        }
        // console.log(data);
    } catch (error) {
        dispatch({ type: types.ERROR })
    }
}
