import { $, component$, type QRL } from "@builder.io/qwik";
import { routeLoader$ } from "@builder.io/qwik-city";
import type { InitialValues, SubmitHandler } from "@modular-forms/qwik";
import { formAction$, useForm, valiForm$ } from "@modular-forms/qwik";
import { Button, Input } from "flowbite-qwik";
import * as v from "valibot";

const CreateBiteSchema = v.object({
  name: v.pipe(v.string(), v.nonEmpty("Please enter your email.")),
});

type CreateBiteForm = v.InferInput<typeof CreateBiteSchema>;

export const useFormLoader = routeLoader$<InitialValues<CreateBiteForm>>(
  () => ({
    name: "",
  })
);

export const useFormAction = formAction$<CreateBiteForm>((values) => {
  // Runs on server
}, valiForm$(CreateBiteSchema));

export default component$(() => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, { Form, Field }] = useForm<CreateBiteForm>({
    loader: useFormLoader(),
    // action: useFormAction(),
    validate: valiForm$(CreateBiteSchema),
  });

  const handleSubmit: QRL<SubmitHandler<CreateBiteForm>> = $((values) => {
    fetch("http://localhost:3000/v1/bites", {
      method: "POST",
      body: {
        name: values.name,
      },
    });
    // Runs on client
    console.log(values);
  });

  return (
    <Form onSubmit$={handleSubmit}>
      <Field name="name">
        {(field) => (
          <div>
            <Input bind:value={field.value} label="Name" />
            {field.error && <div>{field.error}</div>}
          </div>
        )}
      </Field>

      <Button type="submit">Create</Button>
    </Form>
  );
});
