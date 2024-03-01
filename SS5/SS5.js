// Es6, cú pháp mới:
// let, const, map(), filter(), Spread syntax(...), ()=> {}
/*
OOP:
- Object: đối tượng cụ thể
- class: đối tượng đại diên => Tạo kiểu dực liệu
+ Kế thừa: kế thựa các thuộc tính, phương thức và phát triển thêm (constructor)
- Làm việc nhiieuf với chuỗi: (xử lý chuỗi) => Chuỗi -> danh sách, danh sách -> chuỗi

*/

/*
1.d
2.c
3.b
4.c
5.c
6.a
7.d
8.c

*/ 
// bai 1
// let arr = [1, 2, 3, 4, 5, 6, "hh", "9", 80, 100]
// arr.splice(7, 1);
// arr.splice(6,1);
// let mSquared = arr.map((ar)=>{return Math.pow(ar,2)})
// console.log(mSquared);

//bai 10

// bai 11
// class people {
//     constructor(name, age, address){
//         this._name = name;
//         this._age = age;
//         this._address = address;
//     }

//     setName(newName){
//         this._name = newName;
//     }

//     setAge(newAge){
//         this.age = newAge;
//     }

//     setAddress(newAddress){
//         this._address = newAddress;
//     }

//     getName(){
//         return this._name
//     }

//     getAge(){
//         return this._age;
//     }

//     getAddress(){
//         return this._address;
//     }
// }

// class Students extends people{
//     constructor(name, age, address, id, math, physical, chemistry){
//         super(name, age, address);
//         this._id = id;
//         this._math = math;
//         this._physical = physical;
//         this._chemistry = chemistry;
        
//     }
//     setId(newId){
//         this._id = newId;
//     }

//     setMath(newMath){
//         this._math = newMath;
//     }

//     setPhysical(newPhysical){
//         this._physical = newPhysical
//     }

//     setChemistry(newChemistry){
//         this._chemistry = newChemistry;
//     }

//     getId(){
//         return this._id;
//     }

//     getMath(){
//         return this._math;
//     }

//     getPhysical(){
//         return this._physical;
//     }

//     getChemistry(){
//         return this._chemistry;
//     }

//     GPA(){
//         return (this._chemistry + this._math + this._physical)/3;
//     }
// }

// let students = new Students("nk", 14, "l", 10, 10, 10, 10)
// console.log(students.getName());
// console.log(students.getAge());
// console.log(students.getAddress());
// console.log(students.getId());
// console.log(students.getMath());
// console.log(students.getPhysical());
// console.log(students.getChemistry());
// console.log(students.GPA());

// // bai  13
// class animal{
//     constructor(ten, tuoi){
//         this._ten = ten;
//         this._tuoi = tuoi;
//     }

//     setTen(newTen){
//         this._ten = newTen;
//     }

//     setTuoi(newTuoi){
//         this._tuoi = newTuoi;
//     }

//     getTen(){
//         return this._ten;
//     }

//     getTuoi(){
//         return this._tuoi;
//     }

//     introduction(){
//         return `name: ${this._ten}. tuoi: ${this._tuoi}`;
//     }
// }


// let dolphin = new animal("dolphin", 10);
// let zebra = new animal("zebra", 10);
// console.log(dolphin.info);
// console.log(zebra.info);















