import { createApp } from "vue";
import PrimeVue from "primevue/config";
import "./style.css";
import App from "./App.vue";

import { PanelProps, PanelState } from "primevue/panel";

const app = createApp(App);
app.use(PrimeVue, {
	ripple: true,
	pt: {
		accordion: {
			root: {
				class: "border border-1 border-gray-200 overflow-hidden shadow-sm root",
			},
			header: ({ props, parent }) => ({
				class: parent.state.d_activeIndex === 0 ? "active" : "inactive",
			}),
			headerAction: {
				class: "block p-4 bg-gray-100 text-gray-800 font-bold",
			},
			content: {
				class: "p-4 bg-white text-gray-800 font-bold",
			},
		},
		panel: {
			// Panel Pass Through Options: https://primevue.org/panel
			root: { class: "border border-gray-100 rounded shadow-sm" },
			header: (slotProps: { props: PanelProps; state: PanelState }) => {
				return {
					class: "bg-slate-50 text-gray-700 p-4 border-b border-gray-200 flex justify-between items-center font-bold uppercase tracking-wide",
					title: "My Custom Panel Component",
					"data-toggleable": slotProps.props.toggleable,
					"data-collapsed": slotProps.state.d_collapsed,
				};
			},
			content: {
				class: "p-4",
			}
		},
		card: {
			// Card Pass Through Options: https://primevue.org/card 
			root: { class: 'block bg-white border border-gray-100 rounded shadow-md hover:shadow transition-shadow', },
			header: { class: "font-bold uppercase tracking-wide text-gray-700 border-b p-4 bg-slate-50" },
			body: { class: "p-4" },
		},
	},
});
app.mount("#app");
