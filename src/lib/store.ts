import { writable } from 'svelte/store';
export enum Tabs {
    Projects= 'projects',
    Favorites = 'favorites',
    Interests = 'interests',

}
export const activeTab = writable(Tabs.Projects);


export const StartChnageMusicTimingFromSlider = writable(false);
export const activeMusicId = writable<number | null>(null);

export enum MusicState {
    Playing = 'playing',
    Paused = 'paused',
}

export const OnTimeMusicStateChange = writable<MusicState>(MusicState.Paused);
export const LastPlaybackTime = writable(0)
