namespace Subjects {
  export class Subject {
    private _teacher: Subjects.Teacher;

    public set teacher(value: Subjects.Teacher) {
      this._teacher = value;
    }

    public get teacher(): Subjects.Teacher {
      return this._teacher;
    }
  }
}
