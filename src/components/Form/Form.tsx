import React, { useState } from "react";
import { NumberInput, TextInput, Button, Box, TagsInput } from "@mantine/core";
import { useForm } from '@mantine/form';
import { DatePickerInput } from '@mantine/dates';

export const EmailFilterForm = () => {
  const [value, setValue] = useState<[Date | null, Date | null]>([null, null]);

  const form = useForm({
    validateInputOnChange: true,
    initialValues: {
      name: '',
      email: '',
      age: 0,
      emails: [] // Initialize the emails field for TagsInput
    },

    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      age: (value) => (value < 18 ? 'You must be at least 18 to register' : null),
      emails: (values) => {
        // Validate each email in the array
        for (let value of values) {
          if (!/^\S+@\S+$/.test(value)) {
            return 'One or more emails are invalid'; // Return an error message if any email is invalid
          }
        }
        return null; // Return null if all emails pass validation
      },
    },
  });

  return (
    <Box maw={400} mx="auto">
      <form onSubmit={form.onSubmit(console.log)}>
        {/* <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
        <TextInput mt="sm" label="Email" placeholder="Email" {...form.getInputProps('email')} />
        <NumberInput
          mt="sm"
          label="Age"
          placeholder="Age"
          min={0}
          max={99}
          {...form.getInputProps('age')}
        /> */}
        <TagsInput
          withAsterisk
          label="Press Enter to submit email(s)"
          placeholder="Enter email(s)"
          splitChars={[',', ' ', '|']}
          {...form.getInputProps('emails')}
        />

        <DatePickerInput
          type="range"
          label="Pick dates range"
          placeholder="Pick dates range"
          value={value}
          onChange={setValue}
        />
        
        <Button type="submit" mt="sm">
          Submit
        </Button>
      </form>
    </Box>
  );
}