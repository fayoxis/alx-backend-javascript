namespace Subjects {
  export interface Teacher {
    experienceTeachingC?: number;
  }

  export class Cpp extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Cpp';
    }

    getAvailableTeacher(): string {
      const { teacher } = this;
      const hasExperiencedTeacher = teacher && teacher.experienceTeachingC > 0;
      return hasExperiencedTeacher
        ? `Available Teacher: ${teacher.firstName}`
        : 'No available teacher';
    }
  }
}
