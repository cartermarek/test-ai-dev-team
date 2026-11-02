export function greet(name) {
  return `Hello, ${name}!`;
}

export function add(a, b) {
  return a + b;
}

export function daysAlive(birthDate) {
  const birth = new Date(birthDate);

  if (Number.isNaN(birth.getTime())) {
    throw new Error("Invalid birth date");
  }

  const diffMs = Date.now() - birth.getTime();
  return Math.floor(diffMs / (1000 * 60 * 60 * 24));
}

console.log(greet("AI Developer Team"));
