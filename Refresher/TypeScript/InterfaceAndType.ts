// Type is used in Unions, More flexible they can represent primitives, objects, tuples, intersections.
// Tuple used in Functions, tuples, unions, prmitives, intersections. 
// Interface maily for objects and classes.


// Example 1: Car 
type Car={
    drive:()=>{}
    fuelType: string
}
// Example 2: Using Unions  
type Vehicle=Car | Bike;

// Example 3: Prmitive Unions
type Status="loading"|"success"|"error"

// Example 4: Tuple
type coordinate=[number, number]

// Example 5: Intersection
type AdminUser=User&{permission:string[]}




