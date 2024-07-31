namespace Subjects {
  export interface Teacher {
    experienceTeachingJava?: number;
  }

  export class Java extends Subjects.Subject {
    getRequirements(): string {
      return 'Here is the list of requirements for Java';
    }

    getAvailableTeacher(): string {
      const { teacher } = this;
      if (!teacher || (teacher.experienceTeachingJava && teacher.experienceTeachingJava <= 0)) {
        return 'No available teacher';
      }
      return `Available Teacher: ${teacher.firstName}`;
    }
  }
}
