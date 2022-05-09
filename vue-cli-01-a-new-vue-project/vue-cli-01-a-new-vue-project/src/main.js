import { createApp } from 'vue';

import App from "./App.vue"
import FriendContact from "./components/FriendContact.vue";
import NewFriend from "./components/NewFriend.vue";

const app1 = createApp(App)
app1.mount("#app");
app1.component('friend-contatct', FriendContact);
app1.component("new-friend", NewFriend);
