// This is a basic JavaScript file for managing building rentals

// Example function to calculate rent
function calculateRent(apartmentSize, pricePerSquareMeter) {
    return apartmentSize * pricePerSquareMeter;
}

// Example usage
const apartmentSize = 100; // in square meters
const pricePerSquareMeter = 20; // in currency units

const totalRent = calculateRent(apartmentSize, pricePerSquareMeter);
console.log(`The total rent is: ${totalRent}`);