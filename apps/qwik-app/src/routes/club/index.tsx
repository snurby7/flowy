import { component$, Resource, useResource$ } from "@builder.io/qwik";
import { Alert, Jumbotron } from "flowbite-qwik";
import { getBites } from "~/api/BiteClubApi";
import { Page } from "~/components/page/Page";

export default component$(() => {
  const bites = useResource$(async () => {
    const biteResponse = await getBites();
    console.log(biteResponse);
    return biteResponse;
  });
  return (
    <Page>
      <Jumbotron>Let's put some food on the map</Jumbotron>
      <div class="flex flex-wrap">
        <Resource
          value={bites}
          onPending={() => <div>Warming up some bites</div>}
          onRejected={() => (
            <Alert>Something went very very wrong getting your bites</Alert>
          )}
          onResolved={(bites) => bites.map((bite) => <div>{bite.id}</div>)}
        />
      </div>
    </Page>
  );
});
