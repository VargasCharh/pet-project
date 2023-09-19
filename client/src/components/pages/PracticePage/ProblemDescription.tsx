import React from 'react';
import '../../../css/PracticePage.css';

const p = `Найдите сумму всех кратных n, меньших m
Имейте в виду n и m - натуральные числа (целые положительные числа)m исключается из кратных чисел
Примеры
sumMul(2, 9) ==> 2 + 4 + 6 + 8 = 20
sumMul(3, 13) ==> 3 + 6 + 9 + 12 = 30
sumMul(4, 123) ==> 4 + 8 + 12 + ... = 1860
sumMul(4, -7) ==> "INVALID"`;

export default function ProblemDescription(): JSX.Element {
  return (
    <div className="bg-[#161717] rounded-md p-4 h-[400px] z-10 overflow-auto">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl font-semibold text-[#a9a9a9]">Описание</h3>
      </div>
      <p className="text-[#a9a9a9] pt-1 pb-5">{p}</p>
    </div>
  );
}

const Obj = {
  description: 'Напишите решение по тестам',
  jestCode: `const Test = require('@elbrus/test-compat');
describe("testMe", function() {
it("Tests", function() {
Test.assertEquals(testMe(),1);`,
};
