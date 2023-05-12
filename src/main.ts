import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "./style.css";
import App from "./App.vue";

import { PanelProps, PanelState } from "primevue/panel";

const app = createApp(App);
app.use(PrimeVue, {
	ripple: true,
	pt: {
		panel: {
			// Panel Pass Through Options: https://primevue.org/panel
			root: { style: { fontWeight: "bold" } },
			header: (slotProps: { props: PanelProps; state: PanelState }) => {
				return {
					class: slotProps.state.d_collapsed ? "bg-green-500" : "bg-red-500",
					title: "My Custom Panel Component",
					"data-toggleable": slotProps.props.toggleable,
					"data-collapsed": slotProps.state.d_collapsed,
				};
			},
			title: { class: "text-white" },
		},
		card: {
			// Card Pass Through Options: https://primevue.org/card
			body: { class: "bg-cyan-300 border-round-lg" },
		},
	},
});
app.mount("#app");
