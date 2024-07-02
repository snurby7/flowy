import { component$ } from "@builder.io/qwik";
import { Button } from "flowbite-qwik";
import { createBite } from "~/api/BiteClubApi";

export const CreateBiteForm = component$(() => {
  return (
    <div>
      Soon we shall have a form
      <Button
        onClick$={async () => {
          await createBite();
        }}
      >
        Just click it for now.
      </Button>
    </div>
  );
});
