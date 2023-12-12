// Club data structure
const club = {
    members: [],
    sports: [],
    store: { items: [], stockLevels: {} },
    facilitationFees: {},
    transactions: [],
  };
  
  // Function to add a new member to the club
  const addMember = (details, isGroup) => {
    const member = { details, isGroup, ageGroup: '', gameInterest: [] };
  
    // Calculate membership fee based on individual or group
    member.membershipFee = isGroup ? 500 : 1000;
  
    // Divide members into age groups
    if (!isGroup) {
      if (member.details.age >= 12 && member.details.age <= 17) {
        member.ageGroup = 'minors';
      } else if (member.details.age >= 18 && member.details.age <= 25) {
        member.ageGroup = 'middle';
      } else if (member.details.age >= 26 && member.details.age <= 35) {
        member.ageGroup = 'seniors';
      }
    }
  
    // Divide members into game interest groups
    member.gameInterest = member.details.games.split(',');
  
    club.members.push(member);
  };
  
  // Function to record store transactions
  const recordStoreTransaction = (member, itemsPurchased) => {
    const totalAmount = itemsPurchased.reduce((sum, item) => sum + item.price, 0);
  
    // Apply discount if total amount exceeds 10,000
    const discountedAmount = totalAmount > 10000 ? totalAmount * 0.95 : totalAmount;
  
    // Update stock levels
    itemsPurchased.forEach((item) => {
      club.store.stockLevels[item.name] = (club.store.stockLevels[item.name] || 0) - 1;
    });
  
    club.transactions.push({ member, itemsPurchased, totalAmount, discountedAmount });
  };
  
  // Function to calculate facilitation fee
  const calculateFacilitationFee = (team, patron) => {
    const facilitationFee = 500 * team.length;
    const patronCommission = facilitationFee * 0.2;
  
    club.facilitationFees[team.join(', ')] = { facilitationFee, patronCommission };
  };
  
  // Function to handle lost or damaged equipment
  const handleEquipmentDamage = (captain, team, item) => {
    const surchargeFee = club.store.stockLevels[item.name] * 1.1;
    const totalSurcharge = surchargeFee;
  
    // Deduct surcharge from member's account
    captain.details.accountBalance -= totalSurcharge;
  
    // Update stock levels
    club.store.stockLevels[item.name] = 0;
  };
  
  // Example usage:
  // Add members
  addMember({ name: 'John', age: 20, games: 'football', accountBalance: 10000 }, false);
  addMember({ name: 'Group A', age: 25, games: 'football,volleyball', accountBalance: 20000 }, true);
  
  // Record store transactions
  const itemsPurchased = [
    { name: 'football', price: 500 },
    { name: 'volleyball', price: 300 },
  ];
  recordStoreTransaction(club.members[0], itemsPurchased);
  
  // Calculate facilitation fee
  const team = ['John', 'Alice', 'Bob'];
  calculateFacilitationFee(team, club.members[0]);
  
  // Handle equipment damage
  const itemLost = { name: 'football' };
  handleEquipmentDamage(club.members[0], team, itemLost);
  
  console.log(club);
  