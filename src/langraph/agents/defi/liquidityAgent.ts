import { createReactAgent } from '@langchain/langgraph/prebuilt';
import { model } from '../../../agent.js';
import { liquidityPrompt } from '../../prompts/defi/liquidity.js';
import { addLiquidityTool } from '../../../tools.js';
import { HumanMessage } from '@langchain/core/messages';

export const liquidityGraph = createReactAgent({
  llm: model,
  tools: [addLiquidityTool],
  stateModifier: liquidityPrompt,
});

export const liquidityAgent = async (messages: string) => {
  const agent = await liquidityGraph.invoke({
    messages: [new HumanMessage(messages)],
  });
  console.log(agent);
};