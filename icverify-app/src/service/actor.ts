import {
  createActor as azleActor,
  canisterId as azleCanisterId,
} from "../azle/src//declarations/internet_identity/index";

export const makeActorAzle = async (canisterId: string, createActor: any) => {
  return await createActor(canisterId, {
    agentOptions: {
      host: process.env.NEXT_PUBLIC_IC_HOST,
    },
  });
};

export function makeAzleActor() {
  return makeActorAzle(process.env.NEXT_PUBLIC_CANISTER_ID_AZLE!, azleActor);
}

