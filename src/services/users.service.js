import config from '../config/default'
import {
	payloadFetch,
	removeUserAndTokens,
	setAccessToken,
	setRefreshToken,
	setUser
} from '../utils'
import { history } from '../helpers'

const register = async (email, login, password) => {
	await payloadFetch(`${config.api.url}/auth/register`, { email, login, password })
	history.push('/')
}

const login = async (login, password) => {
	const res = await payloadFetch(`${config.api.url}/auth/login`, { login, password })

	const { refreshToken, accessToken, ...user } = await res.json()

	setRefreshToken(refreshToken)
	setAccessToken(accessToken)
	setUser(JSON.stringify(user))

	return {
		user,
		refreshToken,
		accessToken
	}
}

const logout = () => {
	removeUserAndTokens()
	history.push('/')
}

export const usersService = {
	register,
	login,
	logout
}
