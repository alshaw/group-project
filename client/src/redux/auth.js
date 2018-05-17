import axios from "axios";

const profileAxios = axios.create();
profileAxios.interceptors.request.use(config => {
    const token = localStorage.getItem("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

// let initialState = {  
//     drinks: [],
//     user: {
//         username: "",
//         admin: false,
//         _id: ""
//     },
//     authErrCode: {
//         signup: "",
//         login: ""
//     },
//     isAuthenticated: false
// }

const initialState = {
    loading: true,
    // name: "",
    username: "",
    isAdmin: false,
    isAuthenticated: false,
    authErrCode: {
        signup: "",
        login: "",
    },
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case "AUTH_ERROR":
            return {
                ...state,
                authErrCode: {
                    ...state.authErrCode,
                    [action.key]: action.errCode,
                },
                loading: false
            }
        case "AUTHENTICATE":
            return {
                ...state,
                ...action.user,
                isAuthenticated: true,
                authErrCode: initialState.authErrCode,
                loading: false
            }
        case "LOGOUT":
            return {
                ...initialState,
                loading: false
            }
        case "STOP_LOADING":
            return {
                ...state,
                loading: false
            }
        default:
            return state;
    }
}

function authenticate(user) {
    return {
        type: "AUTHENTICATE",
        user
    }
}

export function verify() {
    return dispatch => {
        profileAxios.get("/api/profile")
            .then(response => {
                const { user } = response.data;
                dispatch(authenticate(user));
            })
            .catch((err) => {
                dispatch({
                    type: "STOP_LOADING"
                })
            })

    }
}

export function signup(credentials) {
    return dispatch => {
        axios.post("/auth/signup", credentials)
            .then(response => {
                const { user, token } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(authenticate(user));
            })
            .catch(err => {
                dispatch(authError("signup", err.response.status));
            })
    }
}

export function authError(key, errCode) {
    return {
        type: "AUTH_ERROR",
        key,
        errCode
    }
}

export function login(credentials) {
    return dispatch => {
        axios.post("/auth/login", credentials)
            .then(response => {
                const { token, user } = response.data;
                localStorage.setItem("token", token);
                localStorage.setItem("user", JSON.stringify(user));
                dispatch(authenticate(user));
            })
            .catch(err => {
                dispatch(authError("login", err.response.status))
            })
    }
}

export function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return {
        type: "LOGOUT"
    }
}