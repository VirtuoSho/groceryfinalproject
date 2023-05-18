class UserAccounts {
	constructor(username, password) {
		if(username === undefined && password === undefined){
			this.username = null;
			this.password = null;
		} else{
			this.username = username;
			this.password = password;
		}
	}
}