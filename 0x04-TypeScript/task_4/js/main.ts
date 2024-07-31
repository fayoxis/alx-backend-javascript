interface Teacher {
  firstName: string;
  lastName: string;
  experienceTeachingC: number;
}

class Subject {
  private teacher: Teacher | null = null;

  setTeacher(teacher: Teacher) {
    this.teacher = teacher;
  }

  getRequirements(): string {
    return 'Default requirements';
  }

  getAvailableTeacher(): string {
    return this.teacher ? `Available Teacher: ${this.teacher.firstName} ${this.teacher.lastName}` : 'No available teacher';
  }
}

class Cpp extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for C++';
  }
}

class Java extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for Java';
  }
}

class React extends Subject {
  getRequirements(): string {
    return 'Here is the list of requirements for React';
  }
}

const cpp = new Cpp();
const java = new Java();
const react = new React();

const cTeacher: Teacher = {
  firstName: 'Dennis',
  lastName: 'Ritchie',
  experienceTeachingC: 10,
};

console.log('C++');
cpp.setTeacher(cTeacher);
console.log(cpp.getRequirements());
console.log(cpp.getAvailableTeacher());

console.log('Java');
java.setTeacher(cTeacher);
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

console.log('React');
react.setTeacher(cTeacher);
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
