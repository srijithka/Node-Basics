const product={
    label:"statinonary",
    cost:13,
    company:"CAMEL",
    type:"pencil"
}
//demonstrating destrcuting

const {label,type}=product
console.log(label+" is the label and the type is "+type)

//shorthand property
//here the prod2 has a property of label whose value is "stationary"
const prod2={
    label,
    cost:25,
    company:"Cello",

}
console.log(prod2)
//destructing a label whose value isn't defined in the prod2
const {cost,company,rating}=prod2
console.log(cost+", "+company+" , "+rating)
//assigning a default value to any proprety and using the different property names 
const {gel="no",label:productLabel}=prod2
console.log(gel+" , "+productLabel)