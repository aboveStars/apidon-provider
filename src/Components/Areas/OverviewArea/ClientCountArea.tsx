import { currentUserStateAtom } from "@/atoms/currentUserStateAtom";
import { Flex, Text } from "@chakra-ui/react";
import React from "react";
import { useRecoilValue } from "recoil";



export default function ClientCountArea() {

  const currentUserState = useRecoilValue(currentUserStateAtom)

  return (
    <Flex id="client-count-area" direction="column">
      <Text color="gray.700" fontWeight="500" fontSize="15pt">
        Client Count
      </Text>
      <Text color="red" fontWeight="700" fontSize="20pt">
        {currentUserState.clientCount ? currentUserState.clientCount : "NaN"}
      </Text>
    </Flex>
  );
}
