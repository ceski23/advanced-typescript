import { Equal, Expect } from './tests'

type RockPaperScissors = '👊🏻' | '🖐🏾' | '✌🏽'

type WinMap = {
    '👊🏻': '🖐🏾',
    '🖐🏾': '✌🏽',
    '✌🏽': '👊🏻'
}

type WhoWins<A extends RockPaperScissors, B extends RockPaperScissors> =
    A extends B ? 'Tie' : WinMap[A]


type Test1 = Expect<Equal<WhoWins<'👊🏻', '🖐🏾'>, '🖐🏾'>>
type Test2 = Expect<Equal<WhoWins<'🖐🏾', '✌🏽'>, '✌🏽'>>
type Test3 = Expect<Equal<WhoWins<'✌🏽', '👊🏻'>, '👊🏻'>>
type Test4 = Expect<Equal<WhoWins<'👊🏻', '👊🏻'>, 'Tie'>>
