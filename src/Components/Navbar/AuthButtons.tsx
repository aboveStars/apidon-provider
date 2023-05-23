
import { authenticationModalsStatusAtom } from "@/atoms/authenticationModalsStatusAtom";
import { currentUserStateAtom } from "@/atoms/currentUserStateAtom";
import useSignOut from "@/hooks/authHooks/useSignOut";

import { Button, Flex } from "@chakra-ui/react";
import { useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";

export default function AuthButtons() {
  const currentUserState = useRecoilValue(currentUserStateAtom);
  const setAuthenticationModalsStatusState = useSetRecoilState(
    authenticationModalsStatusAtom
  );

  const [signOutButtonLoading, setSignOutButtonLoading] = useState(false);
  const { handleSignOut } = useSignOut();

  const handleSignUpButton = () => {
    setAuthenticationModalsStatusState({
      currentPanelName: "signup",
      open: true,
    });
  };
  const handleLoginButton = () => {
    setAuthenticationModalsStatusState({
      currentPanelName: "login",
      open: true,
    });
  };

  const handleSignOutButton = async () => {
    setSignOutButtonLoading(true);
    setAuthenticationModalsStatusState({
      currentPanelName: "login",
      open: true,
    });

    // We don't need to know if op is successfull.
    await handleSignOut();

    setSignOutButtonLoading(false);
  };

  return (
    <>
      {!currentUserState.isThereCurrentUser ? (
        <Flex gap="1">
          <Button
            variant="solid"
            colorScheme="blue"
            onClick={handleSignUpButton}
          >
            Sign Up
          </Button>
          <Button
            variant="outline"
            colorScheme="blue"
            onClick={handleLoginButton}
          >
            Log In
          </Button>
        </Flex>
      ) : (
        <Button
          variant="outline"
          colorScheme="red"
          onClick={handleSignOutButton}
          isLoading={signOutButtonLoading}
        >
          Sign Out
        </Button>
      )}
    </>
  );
}
