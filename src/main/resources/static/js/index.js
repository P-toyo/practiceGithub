const app = Vue.createApp({
	data: () => ({
		display: ""
	}),
	methods: {
		appendToDisplay(value) {
			this.display += value;
		},
		calculate() {
			try {
				this.display = eval(this.display);
			} catch (error) {
				this.display = "Error";
			}
		},
		clear() {
			this.display = "";
		}
	}
})
app.mount("#app");