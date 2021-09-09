import React, { Suspense } from "react";

import { Container, Heading, Text } from "@chakra-ui/layout";
import { Select } from "@chakra-ui/select";
import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

const userIdState = atom<number | undefined>({
  key: "userId",
  default: undefined,
});

const userState = selector({
  key: "user",
  get: async ({ get }) => {
    const userId = get(userIdState);
    if (userId === undefined) return;
    const userData = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`).then((res) => res.json());
    return userData;
  },
});

export const Async = () => {
  const [userId, setUserId] = useRecoilState(userIdState);
  return (
    <Container py={10}>
      <Heading as="h1" mb={4}>
        View Profile
      </Heading>
      <Heading as="h2" size="md" mb={1}>
        Choose a user:
      </Heading>
      <Select
        placeholder="Choose a user"
        mb={4}
        value={userId}
        onChange={(event) => {
          const value = event.target.value;
          setUserId(value ? parseInt(value) : undefined);
        }}
      >
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
      </Select>
      <Suspense fallback={<div>loading ...</div>}>
        <UserData />
      </Suspense>
    </Container>
  );
};

const UserData = () => {
  const user = useRecoilValue(userState);
  if (!user) return null;
  return (
    <div>
      <Heading as="h2" size="md" mb={1}>
        User data:
      </Heading>
      <Text>
        <b>Name:</b> {user.name}
      </Text>
      <Text>
        <b>Phone:</b> {user.phone}
      </Text>
    </div>
  );
};
