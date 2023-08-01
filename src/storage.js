const storage = window.localStorage

export const setItem = (key, value) => {
	try {
		storage.setItem(key, value)
	} catch (e) {
		console.log(e)
	}
}

export const getItem = (key, defalutValue) => {
	try {
		const storedValue = storage.getItem(key)

		if (storedValue) {
			return JSON.parse(storedValue)
		}
		return defalutValue;
	} catch (e) {
		console.log(e)
		return defalutValue
	}
}