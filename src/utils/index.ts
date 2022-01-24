// validating the budget is 2 place dicimal 
const re = /^(\d+(\.\d{0,2})?|\.?\d{1,2})$/;

export const isValidDicimal = (input: string) => {
  return re.exec(input);
};


// generating square root curve to simulate the chart
let dataGen = () => {
  let dataSet = [];
  for (let i = 0; i < 2000; i++) {
    dataSet.push([i / 1000, 17.5 * i ** 0.5]);
  }
  return dataSet;
};

export const data = [["Fractions", "Spend"], ...dataGen()];