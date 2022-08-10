import { derived, writable } from "svelte/store";
import { projects, jobs } from "./data/const";

const createActiveCategory = () => {
  const { subscribe, set, update } = writable("jobs");

  return {
    subscribe,
    toggle: () => update((c) => (c === "jobs" ? "projects" : "jobs")),
  };
};

export const activeCategory = createActiveCategory();

export const activeTab = writable("jobs_1");

export const activeProjectInfo = derived(activeTab, ($activeTab) => {
  return [...projects, ...jobs].find((p) => p.id === $activeTab);
});
