function parseCount(valueToParse) {
  const parsedValue = Number.parseFloat(valueToParse);
  if (isNaN(parsedValue)) {
    throw new Error("Невалидное значение");
  }
  return parsedValue;
}

function validateCount(valueToParse) {
  try {
    return parseCount(valueToParse);
  } catch (error) {
    return error;
  }
}

class Triangle {
  constructor(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;

    if (a + b < c || a + c < b || b + c < a) {
      throw new Error("Треугольник с такими сторонами не существует");
    }
  }

  get perimeter() {
    return this.a + this.b + this.c;
  }

  get area() {
    const p = this.perimeter / 2;
    return parseFloat(
      Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c)).toFixed(3)
    );
  }
}

function getTriangle(a, b, c) {
  try {
    return new Triangle(a, b, c);
  } catch {
    const errorTriangle = {};
    Object.defineProperty(errorTriangle, "area", {
      get: () => "Ошибка! Треугольник не существует",
    });
    Object.defineProperty(errorTriangle, "perimeter", {
      get: () => "Ошибка! Треугольник не существует",
    });
    return errorTriangle;
  }
}
