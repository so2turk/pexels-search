import jwt from 'jsonwebtoken'
const accessTokenKey = process.env.ACCESS_TOKEN_KEY

export const genAccessToken = (date) => {
	return jwt.sign(
		{
			date: date,
		},
		accessTokenKey,
		{
			expiresIn: '10m',
		}
	)
}
