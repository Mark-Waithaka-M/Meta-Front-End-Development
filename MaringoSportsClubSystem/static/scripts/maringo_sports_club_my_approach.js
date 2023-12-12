export class ClubMember{
    constructor(name = 'Paul', gender = 'Male', next_of_kin = 'Mom', date_of_birth = '2000', contact_details='0745636322', sub_county = 'North',  isGroup = false, games = ['volleyball', 'darts'], weight = 120, height = 6, details = {accountBalance:200000000},special_needs = false ){
        this.name = name
        this.gender = gender
        this.next_of_kin = next_of_kin
        this.date_of_birth = date_of_birth
        this.contact_details = contact_details
        this.sub_county = sub_county
        this.isGroup = isGroup
        this.games = games.split(',')
        this.weight = weight
        this.height = height
        this.details = details
        this.special_needs = special_needs
        this.ageGroup = ''
        this.SpecialGroup = ''
        this.personalGroup = ''
        this.gameInterestGroup = []
    }
    calculateMembershipFee(){
        return this.isGroup ? 500 : 1000
    }
    categorizeMember(date_of_birth) {
        const age = new Date().getFullYear() - new Date(date_of_birth).getFullYear();
        if (!this.isGroup){
            if(this.age >= 12 && this.age <= 17) {
                this.personalGroup = 'minors';
            }else if(this.age >= 18 && this.age <= 25){
                this.personalGroup = 'middle';
            }else if(this.age >= 26 && this.age <= 35) {
                this.personalGroup = 'seniors'
            }else{
                console.log('Members below the age of 12 and above the age of 35 are not eligible')
            }
        }
        if (this.isGroup){
            if(this.age >= 12 && this.age <= 17) {
                this.ageGroup = 'minors';
            }else if(this.age >= 18 && this.age <= 25){
                this.ageGroup = 'middle';
            }else if(this.age >= 26 && this.age <= 35) {
                this.ageGroup = 'seniors'
            }else{
                console.log('Members below the age of 12 and above the age of 35 are not eligible')
            }
        }
        if(this.special_needs){
            if(this.age >= 12 && this.age <= 17) {
                this.SpecialGroup = 'minors';
            }else if(this.age >= 18 && this.age <= 25){
                this.SpecialGroup = 'middle';
            }else if(this.age >= 26 && this.age <= 35) {
                this.SpecialGroup = 'seniors'
            }else{
                console.log('Members below the age of 12 and above the age of 35 are not eligible')
            }
        }
        this.gameInterestGroup = this.games
    }
    
}

export class ClubCommerceStore{
    constructor(items = [{Bloomer:250, Gamer_shorts:750}]){
        this.items = items
        this.stockLevels = {}
    }

    recordTransaction(member, itemsPurchased){
        const totalAmount = itemsPurchased.reduce((sum, item) => sum + item.price, 0);
        const discountedAmount = totalAmount > 10000 ? totalAmount * 0.05 : 'no discount';
        const buyingPrice = totalAmount > 10000 ? totalAmount * 0.95 : totalAmount;

        //update stock levels
        itemsPurchased.forEach((item) => {
            this.stockLevels[item.name] = (this.stockLevels[item.name] || 0) -1;
        });
        
        return {member, itemsPurchased, totalAmount, discountedAmount, buyingPrice};

    }
}

export class SportsClub{
    constructor(){
        this.members = [];
        this.sports = [];
        this.store = new ClubCommerceStore();
        this.facilitationFee = {}
        this.transactions = []
    }

    addMember(member) {
        member.categorizeMember();
        this.members.push(member);
    }

    calculateFacilitationFee(team, patron){
        const facilitationFee = 500 * team.length;
        const patronCommission = facilitationFee * 0.2;

        this.facilitationFee[team.join(', ')] = {facilitationFee, patronCommission}
    }

    handleEquipmentDamage(captain, item){
        const surchargeFee =  this.store.stockLevels[item.name] *1.1;

        //Deduct surcharge from captain's account 
        captain.details.accountBalance -= surchargeFee
    }
}