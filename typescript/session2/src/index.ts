const studentName: string = "Mithula";
const score: number = 95;

function displayResult(name: string, marks: number): string {
  return `${name} scored ${marks} marks`;
}

console.log(displayResult(studentName, score));