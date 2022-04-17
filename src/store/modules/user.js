const state = {
	token : localStorage.getItem('token') || null,
	username : localStorage.getItem('username') || null,
	users : []
}

const getters = {
	getUserName : (state) => state.username,
	getToken : (state) => state.token,
	isLoggedIn : (state) => !!state.token,
	fetchUsers : (state) => state.users
}

const actions = {
	loginUser({commit}, user){
        if((user.username == "admin") && (user.password == "1234")){
            commit('SET_CURRENT_USER', user)
            return Promise.resolve({ success : true })
        }
		return Promise.reject({ success : false, "msg" : "Invalid user credentials" })
	},

	logoutUser({commit}){
		commit('LOGOUT')
	},

	loadUsers({commit}){
		return fetch('https://mock.follow.it/profiles.json')
        .then(res => res.json())
        .then(data => {
            console.log(data)
			commit('SET_USERS', data)
		})
	},

}

const mutations = {
	SET_USERS : (state, users) => {
		state.users = users
	},
	SET_CURRENT_USER : (state, {username}) => {
		const token = `${Date.now()}-${username}`
        state.username = username
		state.token = token

		localStorage.setItem('username', username)
		localStorage.setItem('token', token)		
	},

	LOGOUT : (state) => {
        localStorage.removeItem('username')
		localStorage.removeItem('token')
		state.username = null
        state.token = null
	},
}

export default{
	state, getters, actions, mutations
}