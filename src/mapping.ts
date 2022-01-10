
import { BigInt } from '@graphprotocol/graph-ts'
import { Metadata } from "../generated/schema"
import {IncreaseLiquidity} from "../generated/NFT-V1/Contract";

export function handleIncreaseLiquidity(event: IncreaseLiquidity): void{
  let entity = Metadata.load('0')
  if (entity == null) {
    entity = new Metadata('0')
  }
  entity.value = BigInt.fromI32(event.params.tokenId.toI32())
  entity.save()
}
