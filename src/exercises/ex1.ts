/*

Dado um array de números inteiros e um número inteiro alvo, retorne os índices de dois números que somados resultem no valor alvo.

Você pode assumir que cada entrada terá exatamente uma solução, e não é permitido usar o mesmo elemento duas vezes.

Você pode retornar a resposta em qualquer ordem.

*/

export function twoSum(nums: number[], target: number): number[] | undefined {
  for (let i: number = 0; i < nums.length; i++) {
    for (let k: number = i + 1; k < nums.length; k++) {
      if (nums[k] == target - nums[i]) {
        return [i, k];
      }
    }
  }
}
