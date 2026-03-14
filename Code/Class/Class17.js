// Lexical Scoping and Closure. 
// 1. Whats Lexical Scoping 
// Documentation 
const myArr=[]
%DebugPrint(myArr)
// V8 engine is Google open source JavaScript Engine.
// JSVU JavaScript Version Updater
// There are two types of arrays internally strucutureed in the V8 Engine: Continuous and Holey
// SMI, Packed Element and Double(Float, String, Function)

const myArr1=[1,2,3,4,5]
// This is PACKED_SMI_ELEMENTS
// SMI is most optimised and remains orimary choice
// Only numbers no decimals like decimal and floats or float. 

const myArray2=[1,2, , 4, 5]
// Holey Elements
// Whenever Engine checks for an element in an array, Following elemets are visible
// 1. BoundCheck -- Based on length of array is the user askign for out of boubds value then return undefined. 
// 2. hasOwnProperty(arrTwo, 9)
// 3. hasOwnProperty(arrTwo.prototype, 10)
// 4. hasOwnProperty(Object.prototype, 10)
// It keeps checking object and parents object hence Holes are expensive Operation
// SMI>DOUBLE>PACKED
// H_SMI> H_DOUBLE > H_PACKED