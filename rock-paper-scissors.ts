import { Equal, Expect } from './tests'

type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽'

type WhoWins = unknown

type Test1 = Expect<Equal<WhoWins<'👊🏻', '🖐🏾'>, '🖐🏾'>>
type Test2 = Expect<Equal<WhoWins<'🖐🏾', '✌🏽'>, '🖐🏾'>>
type Test3 = Expect<Equal<WhoWins<'✌🏽', '👊🏻'>, '👊🏻'>>
type Test4 = Expect<Equal<WhoWins<'👊🏻', '👊🏻'>, 'Tie'>>
