//--------------------------------------------------------------------------------------------//
//                                                                                            //
//	Name: Brandon Schultz                                                                     //
//	Date: 4-20-20                                                                             //
//  Description: Implementation of deep comparison exercise found at:                         //
//	https://eloquentjavascript.net/04_data.html#h_IJBU+aXOIC                                  //
//                                                                                            //
//--------------------------------------------------------------------------------------------//


// Function that takes two values and returns true only if they are the same value or are objects 
// with the same properties, where the values of the properties are equal when compared via a
// recursive call to deepEqual.
function deepEqual(obj1, obj2) 
{
	// Compares properties using typeof operator. If both values are determined to be of type "object"
	// a deep comparison is performed. Otherwise, input arent objects and dont match. False is returned.
	if((typeof(obj1) == "object" && obj1 != null) && (typeof(obj2) == "object" && obj2 != null))
	{
		// Object.keys are used to check for and compare individual properties between input values.
		// If input are both of type object, but contain an unequal num of properties they do
		// not match and false is returned.
		if(Object.keys(obj1).length != Object.keys(obj2).length)
		{
			return false;
		}

		// If input are both of type object, and contain an equal num of properties, individual
		// property names of obj1 are compared against those exhibitied by obj2...
		for (var prop in obj1)
		{
			// hasOwnProperty is used to specify property(ies) compared between obj2 and obj1 and
			// to check if obj2 contains property(ies) through inheritance. If obj2 doesnt have property 
			// as it's own false is returned.
			if(obj2.hasOwnProperty(prop))
			{
				// If property(ies) names vary, the two objects aren't the same and false is returned
				if(!deepEqual(obj1[prop], obj2[prop])) 
				{
					return false;
				}
			} 
			else 
			{
				return false;
			}
		}
		// True is returned if two values are of the same type and contain the same properties.
		return true;
	}

	// False is returned if passed arguement contains non-objects that don't match.
	else if (obj1 !== obj2) 
	{
		return false;
	}

	// False is returned if passed arguement contains non-objects that do match.
	else 
	{
		return true;
	}
}

var obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true