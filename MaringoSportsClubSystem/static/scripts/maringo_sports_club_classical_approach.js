// Define a class for Club Members
class ClubMember {
    constructor(fullName, gender, nextOfKin, dob, contactDetails, subCounties, schoolOrCollege, gamesOfInterest, weight, height, specialNeeds) {
      this.fullName = fullName;
      this.gender = gender;
      this.nextOfKin = nextOfKin;
      this.dob = dob;
      this.contactDetails = contactDetails;
      this.subCounties = subCounties;
      this.schoolOrCollege = schoolOrCollege;
      this.gamesOfInterest = gamesOfInterest;
      this.weight = weight;
      this.height = height;
      this.specialNeeds = specialNeeds;
    }
  
    getAgeGroup() {
      const age = new Date().getFullYear() - new Date(this.dob).getFullYear();
      if (age >= 12 && age <= 17) {
        return 'minors';
      } else if (age >= 18 && age <= 25) {
        return 'middle group';
      } else if (age >= 26 && age <= 35) {
        return 'seniors';
      } else {
        return 'Unknown age group';
      }
    }
  }
  
  // Define a class for Store Items
  class StoreItem {
    constructor(name, price, maxStock) {
      this.name = name;
      this.price = price;
      this.maxStock = maxStock;
      this.stock = maxStock;
    }
  
    sell(quantity) {
      if (this.stock <= quantity) {
        this.stock -= quantity;
        return this.price * quantity;
      } else {
        console.log(`Not enough stock for ${this.name}`);
        return 0;
      }
    }
  
    reorderAlert() {
      if (this.stock <= 0.2 * this.maxStock) {
        console.log(`Alert: Reorder ${this.name}`);
      }
    }
  }
  
  // Define a class for Sports Events
  class SportsEvent {
    constructor(eventName, facilitationFee) {
      this.eventName = eventName;
      this.facilitationFee = facilitationFee;
    }
  }
  
  // Define a class for the Club
  class MaringoSportsClub {
    constructor() {
      this.members = [];
      this.storeItems = [
        new StoreItem('Swimming Goggles', 500, 100),
        // Add more store items as needed
      ];
      this.sportsEvents = [
        new SportsEvent('Football Match', 500),
        // Add more sports events as needed
      ];
      this.totalMembershipFee = 0;
      this.totalItemsBought = 0;
      this.totalFacilitationFee = 0;
      this.totalIncome = 0;
    }
  
    enrollMember(member) {
      this.members.push(member);
      const membershipFee = member.getAgeGroup() === 'minors' ? 500 : 1000;
      this.totalMembershipFee += membershipFee;
    }
  
    buyItem(member, itemName, quantity) {
      const item = this.storeItems.find((i) => i.name === itemName);
      if (item) {
        const totalPrice = item.sell(quantity);
        this.totalItemsBought += totalPrice;
      } else {
        console.log(`Item ${itemName} not found in the store.`);
      }
    }
  
    facilitateEvent(event, teamMembers) {
      const facilitationFee = event.facilitationFee * teamMembers.length;
      this.totalFacilitationFee += facilitationFee;
      const patronCommission = facilitationFee * 0.2;
      return patronCommission;
    }
  
    computeDiscountedPrice(totalAmount) {
      return totalAmount > 10000 ? totalAmount * 0.95 : totalAmount;
    }
  
    surchargeFee(itemValue) {
      return itemValue * 1.1;
    }
  
    computeTotalIncome() {
      this.totalIncome = this.totalMembershipFee + this.totalItemsBought + this.totalFacilitationFee;
      return this.totalIncome;
    }
  }
  
  // Example usage
  const club = new MaringoSportsClub();
  
  const member1 = new ClubMember(/* member details */);
  const member2 = new ClubMember(/* member details */);
  
  club.enrollMember(member1);
  club.enrollMember(member2);
  
  club.buyItem(member1, 'Swimming Goggles', 2);
  
  const event = club.sportsEvents[0];
  const patronCommission = club.facilitateEvent(event, [member1, member2]);
  
  const discountedPrice = club.computeDiscountedPrice(club.totalItemsBought);
  
  const surchargedFee = club.surchargeFee(5000);
  
  const totalIncome = club.computeTotalIncome();
  
  console.log('Total Membership Fee:', club.totalMembershipFee);
  console.log('Discounted Price:', discountedPrice);
  console.log('Total Items Bought:', club.totalItemsBought);
  console.log('Surcharged Fee:', surchargedFee);
  console.log('Facilitation Fee:', club.totalFacilitationFee);
  console.log('Patron Commission:', patronCommission);
  console.log('Total Income:', totalIncome);
  