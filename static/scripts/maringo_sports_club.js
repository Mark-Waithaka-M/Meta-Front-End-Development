class SportsClub{
    constructor(clubs = [{club1:50}], sports = ['swimming', 'hockey', 'lawn_tennis'], storage_store_items = [{Bloomer:250, Gamer_shorts:750}], commerce_store_items=[{Bloomer:250, Gamer_shorts:750}], fees = [{Socks:{2: 700}}]){
        this.clubs = clubs
        this.sports = sports
        this.storage_store_items = storage_store_items
        this.commerce_store_items = commerce_store_items
        this.fees = fees

    }
    totalMembershipFees(){
        const per_person = 500;
    }
    discountedPrices(){

    }
    totalAmount(){

    }
    surchargedFee(){

    }
    facilitationFee(){

    }
    PatronsCommission(){

    }
    clubTotal(){

    }
}
class ClubMembers extends SportsClub{
    constructor(full_name = 'Mark Waithaka', gender = 'Male', next_of_kin = 'Hannah Muringo', date_of_birth = '08/11/2000', contact_details='07456363226273', sub_county = 'Mathira', school=true, college = false, religious_organization = false, individual = false, games_interested = ['volleyball', 'darts'], weight = 120, height = 6, special_needs = false, clubs, sports, storage_store_items, commerce_store_items, fees ){
        super(clubs, sports, storage_store_items, commerce_store_items, fees)
        this.full_name = full_name
        this.gender = gender
        this.next_of_kin = next_of_kin
        this.date_of_birth = date_of_birth
        this.contact_details = contact_details
        this.sub_county = sub_county
        this.school = school,
        this.college = college
        this.religious_organization = religious_organization
        this.individual = individual
        this.games_interested = games_interested
        this.weight = weight
        this.height = height
        this.special_needs = special_needs
    }
}

class ClubSports extends SportsClub{
    constructor(sports_club = ['swimming', 'hockey', 'lawn_tennis'], clubs, sports, storage_store_items, commerce_store_items, fees){
        super(clubs, sports, storage_store_items, commerce_store_items, fees)
        this.sports_club = sports_club
    }
}

class ClubStorageStore extends SportsClub{
    constructor(club_storage_store_items = [{Bloomer:250, Gamer_shorts:750}], clubs, sports, storage_store_items, commerce_store_items, fees){
        super(clubs, sports, storage_store_items, commerce_store_items, fees)
        this.storage_store_items = club_storage_store_items
    }
}

class ClubCommerceStore extends SportsClub{
    constructor(club_commerce_store = [{Bloomer:250, Gamer_shorts:750}], clubs, sports, storage_store_items, commerce_store_items, fees){
        super(clubs, sports, storage_store_items, commerce_store_items, fees)
        this.club_commerce_store = club_commerce_store
    }
}

class ClubPurchases extends SportsClub{
    constructor(max_stock = [{socks:100}],sold_items = [{socks:5}],stock_level = 80,  clubs, sports, storage_store_items, commerce_store_items, fees){
        super(clubs, sports, storage_store_items, commerce_store_items, fees)
        this.max_stock = max_stock
        this.sold_items = sold_items
        this.stock_level = stock_level
    }
}

class ClubFacilitation extends SportsClub{
    constructor(team = [{football:15}], total_cost = 7500, patrons_commission = 1500, clubs, sports, storage_store_items, commerce_store_items, fees){
        super(clubs, sports, storage_store_items, commerce_store_items, fees)
        this.team = team
        this.total_cost = total_cost
        this.patrons_commission = patrons_commission
    }
}