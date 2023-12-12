// Helper function to calculate age group
const getAgeGroup = (dob) => {
    const age = new Date().getFullYear() - new Date(dob).getFullYear();
    if (age >= 12 && age <= 17) {
      return 'minors';
    } else if (age >= 18 && age <= 25) {
      return 'middle group';
    } else if (age >= 26 && age <= 35) {
      return 'seniors';
    } else {
      return 'Unknown age group';
    }
  };
  
  // Helper function to calculate membership fee
  const calculateMembershipFee = (isIndividual) => {
    return isIndividual ? 1000 : 500;
  };
  
  // Function to enroll a member
  const enrollMember = (members, member) => {
    const updatedMembers = [...members, member];
    const membershipFee = calculateMembershipFee(member.isIndividual);
    const totalMembershipFee = members.reduce((total, m) => total + calculateMembershipFee(m.isIndividual), 0) + membershipFee;
  
    return {
      members: updatedMembers,
      totalMembershipFee,
    };
  };
  
  // Function to purchase items
  const purchaseItems = (storeItems, purchasedItem, quantity) => {
    const item = storeItems.find((item) => item.name === purchasedItem);
    if (!item || item.stock < quantity) {
      return {
        storeItems,
        totalItemsBought: 0,
      };
    }
  
    const totalPrice = item.price * quantity;
    const updatedStoreItems = storeItems.map((i) => (i.name === purchasedItem ? { ...i, stock: i.stock - quantity } : i));
    const totalItemsBought = totalPrice;
  
    return {
      storeItems: updatedStoreItems,
      totalItemsBought,
    };
  };
  
  // Function to facilitate an event
  const facilitateEvent = (facilitationEvent, teamMembers) => {
    const facilitationFee = facilitationEvent.facilitationFee * teamMembers.length;
    const patronsCommission = facilitationFee * 0.2;
  
    return {
      facilitationFee,
      patronsCommission,
    };
  };
  
  // Function to calculate discounted price
  const calculateDiscountedPrice = (totalAmount) => {
    return totalAmount > 10000 ? totalAmount * 0.95 : totalAmount;
  };
  
  // Function to calculate surcharge fee
  const calculateSurchargedFee = (itemValue) => {
    return itemValue * 0.1;
  };
  
  // Function to compute total income
  const computeTotalIncome = (totalMembershipFee, totalItemsBought, facilitationFee) => {
    return totalMembershipFee + totalItemsBought + facilitationFee;
  };
  
  // Example usage
  const members = [];
  const storeItems = [
    { name: 'Swimming Goggles', price: 500, maxStock: 100, stock: 100 },
    // Add more store items as needed
  ];
  const facilitationEvent = { eventName: 'Football Match', facilitationFee: 500 };
  
  const member1 = {
    // member details
    isIndividual: true,
  };
  
  const member2 = {
    // member details
    isIndividual: false,
    groupType: 'School',
    specificGroup: 'ABC School',
  };
  
  // Enroll members
  const enrolledMembers1 = enrollMember(members, member1);
  const enrolledMembers2 = enrollMember(enrolledMembers1.members, member2);
  
  // Purchase items
  const purchasedItems = purchaseItems(storeItems, 'Swimming Goggles', 2);
  
  // Facilitate an event
  const facilitatedEvent = facilitateEvent(facilitationEvent, [member1, member2]);
  
  // Compute each of the following
  const totalMembershipFee = enrolledMembers2.totalMembershipFee;
  const discountedPrices = calculateDiscountedPrice(purchasedItems.totalItemsBought);
  const totalAmountForItemsBought = purchasedItems.totalItemsBought;
  const surchargedFee = calculateSurchargedFee(5000);
  const facilitationFee = facilitatedEvent.facilitationFee;
  const patronsCommission = facilitatedEvent.patronsCommission;
  const totalIncome = computeTotalIncome(totalMembershipFee, totalAmountForItemsBought, facilitationFee);
  
  console.log('Total Membership Fee:', totalMembershipFee);
  console.log('Discounted Prices:', discountedPrices);
  console.log('Total Amount for Items Bought:', totalAmountForItemsBought);
  console.log('Surcharged Fee:', surchargedFee);
  console.log('Facilitation Fee:', facilitationFee);
  console.log('Patrons Commission:', patronsCommission);
  console.log('Total Income:', totalIncome);
  