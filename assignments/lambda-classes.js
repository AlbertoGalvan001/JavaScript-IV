// CODE here for your Lambda Classes
class Person {
    constructor(attOne) { /// Creates Props
        this.name = attOne.name,
            this.age = attOne.age,
            this.location = attOne.location,
            this.subject = attOne.subject
    } /// closes constructor props Person

    speak() {
        return `Hello, my is ${this.name} and I am from ${this.location}.`
    }//This closes speak method.

}////This closes Person Class

const james = new Person({
    name: "James",
    location: "Boston",
    age: 30,
    subject: "JavaScript-I"
})/// This closes Person Object 
const mary = new Person({
    name: "Mary",
    location: "Miami",
    age: 22,
    subject: "JavaScript-I"
})/// This closes Person Object 

class Instructor extends Person { ///Inherits Person-(Parent) attributes.

    constructor(attTwo) {
        super(attTwo);  /// establishes a subclass of Person - (Parent)
        this.specialty = attTwo.specialty,
            this.favLanguage = attTwo.favLanguage,
            this.catchPhrase = attTwo.catchPrase
    }// this closes constructor props for Instructor class.

    demo() {
        return `Today we are learning about ${james.subject}.`
    } /// this closes Demo method for Instructor class.
    grade() {
        return `${james.name} receives a perfect score on ${james.subject}.`
    }// this closes grade method for Instructor Class.

} //// this closes Instructor Class

const tom = new Instructor({
    specialty: "Python",
    favLanguage: "Spanish",
    catchPhrase: "Que Pasa?",
    subject: "JavaScript-I"
})/// this closes Instructor Object

const laura = new Instructor({
    specialty: "Redux",
    favLanguage: "JavaScript",
    catchPhrase: "Hey you guys!",
    subject: "JavaScript-I"
})/// this closes Instructor Object

class Student extends Person {/// Inherits Person-(Parent) attributes
    
    constructor(attThree) { /// Establishes a subclass of Person - (Parent)
        super(attThree);
        this.previousBackground = attThree.previousBackground,
            this.className = attThree.className,
            this.favSubjects = attThree.favSubjects
    }/// This closes constructor props for Student.

    listSubjects() {
        return `I really like ${this.favSubjects}.`
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${this.subject}.`
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on ${this.subject}.`
    }
} /// This closes Student Class

const harry = new Student({
    name: "Harry",
    previousBackground: "Nurse",
    className: 0101,
    favSubjects: "Computer science and biology",
    subject: "JavaScript-I"
})
const alexis = new Student({
    name: "Alexis",
    previousBackground: "Artist",
    className: 0101,
    favSubjects: "Art history and design",
    subject: "JavaScript-I"
})

class ProjectManager extends Instructor {
    constructor(attFour) {
        super(attFour);
        this.gradClassName = attFour.gradClassName,
            this.favInstructor = attFour.favInstructor,
            this.channel = attFour.channel
    }
    standUp() {
        return `${this.name} announces to ${this.channel}, @ ${this.channel} standy times!`
    }
    debugsCode() {
        return `${this.name} debugs ${mary.name}'s code on ${mary.subject}.`
    }
}

const sally = new ProjectManager({
    name: "Sally",
    gradClassName: "A01",
    favInstructor: "Tom",
    channel: "IOS3",
    subject: "JavaScript-I"
})
const may = new ProjectManager({
    name: "May",
    gradClassName: "B02",
    favInstructor: "Mark",
    channel: "WEB22",
    subject: "JavaScript-I"
})




console.log(james.speak());
console.log(mary.speak());
console.log(tom.demo());
console.log(laura.grade());
console.log(harry.listSubjects());
console.log(alexis.PRAssignment());
console.log(sally.standUp());
console.log(may.debugsCode());