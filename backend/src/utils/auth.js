import jwt from 'jsonwebtoken'
const accessTokenKey = process.env.ACCESS_TOKEN_KEY

export const genAccessToken = (date, user) => {
	return jwt.sign(
		{
			date: date,
			name: user.name,
			id: user._id,
		},
		accessTokenKey,
		{
			expiresIn: '10m',
		}
	)
}
