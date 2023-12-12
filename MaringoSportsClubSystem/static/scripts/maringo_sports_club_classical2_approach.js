// Define a Member class
class Member {
  constructor(name, age, games, isGroup, details) {
    this.name = name;
    this.age = age;
    this.games = games.split(',');
    this.isGroup = isGroup;
    this.details = details;
    this.ageGroup = '';
    this.gameInterestGroup = [];
  }

  calculateMembershipFee() {
    return this.isGroup ? 500 : 1000;
  }

  categorizeMember() {
    if (!this.isGroup) {
      if (this.age >= 12 && this.age <= 17) {
        this.ageGroup = 'minors';
      } else if (this.age >= 18 && this.age <= 25) {
        this.ageGroup = 'middle';
      } else if (this.age >= 26 && this.age <= 35) {
        this.ageGroup = 'seniors';
      }
    }
    this.gameInterestGroup = this.games; // Pass all selected games
  }
}

// Define a Store class
class Store {
  constructor() {
    this.items = [];
    this.stockLevels = {};
  }

  recordTransaction(member, itemsPurchased) {
    const totalAmount = itemsPurchased.reduce((sum, item) => sum + item.price, 0);
    const discountedAmount = totalAmount > 10000 ? totalAmount * 0.95 : totalAmount;

    // Update stock levels
    itemsPurchased.forEach((item) => {
      this.stockLevels[item.name] = (this.stockLevels[item.name] || 0) - 1;
    });

    return { member, itemsPurchased, totalAmount, discountedAmount };
  }
}

// Define a Club class
class Club {
  constructor() {
    this.members = [];
    this.sports = [];
    this.store = new Store();
    this.facilitationFees = {};
    this.transactions = [];
  }

  addMember(member) {
    member.categorizeMember();
    this.members.push(member);
  }

  calculateFacilitationFee(team, patron) {
    const facilitationFee = 500 * team.length;
    const patronCommission = facilitationFee * 0.2;

    this.facilitationFees[team.join(', ')] = { facilitationFee, patronCommission };
  }

  handleEquipmentDamage(captain, item) {
    const surchargeFee = this.store.stockLevels[item.name] * 1.1;
    const totalSurcharge = surchargeFee;

    // Deduct surcharge from member's account
    captain.details.accountBalance -= totalSurcharge;

    // Update stock levels
    this.store.stockLevels[item.name] = 0;
  }
}

// Example usage:
const club = new Club();

// Add members
const member1 = new Member('John', 20, 'football', false, { accountBalance: 10000 });
const member2 = new Member('Group A', 25, 'football,volleyball', true, { accountBalance: 20000 });

club.addMember(member1);
club.addMember(member2);

// Record store transactions
const itemsPurchased = [
  { name: 'football', price: 500 },
  { name: 'volleyball', price: 300 },
];
const transaction = club.store.recordTransaction(member1, itemsPurchased);
club.transactions.push(transaction);

// Calculate facilitation fee
const team = ['John', 'Alice', 'Bob'];
club.calculateFacilitationFee(team, member1);

// Handle equipment damage
const itemLost = { name: 'football' };
club.handleEquipmentDamage(member1, itemLost);

console.log(club);
