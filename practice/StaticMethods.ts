class MathUtil {
    /**加法 */
    static add(a: number, b: number) {
        return a + b;
    }

    /**乘法 */
    static multiply(a: number, b: number) {
        return a * b;
    }
}

console.log(MathUtil.add(10, 5));
console.log(MathUtil.multiply(10, 5));

// 第二題

class Student {
    static schoolName: string = "Default School";

    static changeSchoolName(newName: string) {
        this.schoolName = newName;
    }
}

Student.changeSchoolName("SMK RAJA JUMAAT");
console.log(Student.schoolName);
