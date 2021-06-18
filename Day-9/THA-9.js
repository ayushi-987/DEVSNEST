//1.Create 2 object and try to use call, apply and bind on them

const student = {
    name : "David Rayy",  
    f : function(a,b) {
        console.log("Hello "+ this.name);
        console.log(a+b);
    }
}
const student2 = {
    name : "Edson willam",  
}
student.f.call(student2,5,9);
student.f.apply(student,[7,3]);
const details = student.f.bind(student2,5,3);
details();


