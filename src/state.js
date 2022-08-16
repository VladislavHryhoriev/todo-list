let initialState = {
	_state: {
		theme: 'dark-theme',
		newPostText: '',
		statusButton: 'ALL', // ACTIVE, COMPLETED
		posts: [
			{
				id: 1,
				isChecked: false,
				postText: 'Testing new post',
			},
			{
				id: 1,
				isChecked: false,
				postText: 'Testing second new post',
			},
		],
	},
	postsCount() {
		return this.getState().posts.length;
	},
	getState() {
		return this._state;
	}
}

export default initialState;