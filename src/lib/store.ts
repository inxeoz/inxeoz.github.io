import { writable } from 'svelte/store';
export enum Tabs {
    Projects= 'projects',
    Favorites = 'favorites',
    Interests = 'interests',

}
export const activeTab = writable(Tabs.Projects);