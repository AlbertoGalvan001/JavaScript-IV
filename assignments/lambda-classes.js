// CODE here for your Lambda Classes
class Person {
    constructor(attOne) {
        this.name = attOne.name,
            this.age = attOne.age,
            this.location = attOne.location,
            this.subject = attOne.subject
    }
    speak() {
        return `Hello, my is ${this.name} and I am from ${this.location}.`
    }
}
const james = new Person({
    name: "James",
    location: "Boston",
    age: 30,
    subject: "JavaScript-I"
})
const mary = new Person({
    name: "Mary",
    location: "Miami",
    age: 22,
    subject: "JavaScript-I"
})

class Instructor extends Person {
    constructor(attTwo) {
        super(attTwo);
        this.specialty = attTwo.specialty,
            this.favLanguage = attTwo.favLanguage,
            this.catchPhrase = attTwo.catchPrase
    }
    demo() {
        return `Today we are learning about ${james.subject}.`
    }
    grade() {
        return `${james.name} receives a perfect score on ${james.subject}.`
    }
}
const tom = new Instructor({
    specialty: "Python",
    favLanguage: "Spanish",
    catchPhrase: "Que Pasa?",

})
const laura = new Instructor({
    specialty: "Redux",
    favLanguage: "JavaScript",
    catchPhrase: "Hey you guys!",

})

class Student extends Person {
    constructor(attThree) {
        super(attThree);
        this.previousBackground = attThree.previousBackground,
            this.className = attThree.className,
            this.favSubjects = attThree.favSubjects
    }
    listSubjects() {
        return `I really like ${this.favSubjects}.`
    }
    PRAssignment() {
        return `${this.name} has submitted a PR for ${james.subject}.`
    }
    sprintChallenge() {
        return `${this.name} has begun sprint challenge on {subject}.`
    }
}
const harry = new Student({
    name: "Harry",
    previousBackground: "Nurse",
    className: 0101,
    favSubjects: "Computer science and biology"
})
const alexis = new Student({
    name: "Alexis",
    previousBackground: "Artist",
    className: 0101,
    favSubjects: "Art history and design"
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
    channel: "IOS3"
})
const may = new ProjectManager({
    name: "May",
    gradClassName: "B02",
    favInstructor: "Mark",
    channel: "WEB22"
})




console.log(james.speak());
console.log(mary.speak());
console.log(tom.demo());
console.log(laura.grade());
console.log(harry.listSubjects());
console.log(alexis.PRAssignment());
console.log(sally.standUp());
console.log(may.debugsCode());