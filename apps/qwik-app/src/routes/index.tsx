import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { Button, Jumbotron } from "flowbite-qwik";

export default component$(() => {
  return (
    <>
      <Jumbotron>
        <Jumbotron.Heading>Welcome to Bite Club</Jumbotron.Heading>
        <Jumbotron.SubText>
          This is the one you can talk about. Was the food good? Would you go
          back? Would you go back for something special?
        </Jumbotron.SubText>
        <div class="flex justify-center gap-2">
          <Button href="/club">Enter the club</Button>
        </div>
      </Jumbotron>

      <div role="presentation" class="ellipsis"></div>
      <div role="presentation" class="ellipsis ellipsis-purple"></div>
    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Bite Club",
  meta: [
    {
      name: "description",
      content: "Was it good? Was it bad? Let them fight.",
    },
  ],
};
