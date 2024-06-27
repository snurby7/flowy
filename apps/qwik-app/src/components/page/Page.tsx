import { component$, Slot } from "@builder.io/qwik";

export const Page = component$(() => {
  return (
    <article class="px-2 py-2 ">
      <Slot />
    </article>
  );
});
