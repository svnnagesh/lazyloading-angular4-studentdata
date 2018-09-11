import { StudentDetailsModule } from './student-details.module';

describe('StudentDetailsModule', () => {
  let studentDetailsModule: StudentDetailsModule;

  beforeEach(() => {
    studentDetailsModule = new StudentDetailsModule();
  });

  it('should create an instance', () => {
    expect(studentDetailsModule).toBeTruthy();
  });
});
