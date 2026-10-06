class Cinema{
    static theatre_name = "GPR";
    static location = "Hyderabad";
    constructor(movie, language, screen, seat, price, showTime) {
        this.movie_name = movie;
        this.language = language;
        this.screen = screen;
        this.seat = seat;
        this.price = price;
        this.showTime = showTime;
    }
    display() {
        console.log("Theatre name is:", Cinema.theatre_name);
        console.log("Theatre location:", Cinema.location);
        console.log("Movie name is:", this.movie_name);
        console.log("Movie language is:", this.language);
        console.log("Movie screen number:", this.screen);
        console.log("Seat number is:", this.seat);
        console.log("Ticket price is:", this.price);
        console.log("Show time is:", this.showTime);
    }
}
console.log("-------- Audience 1 --------");
let audience1 = new Cinema("IRUMUDI", "TELUGU", 3, 29, "$325", "11.00 AM");
audience1.display();

console.log("-------- Audience 2 --------");
let audience2 = new Cinema("PARADISE", "HINDI", 4, 16, "$550", "2.00 PM");
audience2.display();

console.log("-------- Audience 3 --------");
let audience3 = new Cinema("VARANASI", "TELUGU", 5, 8, "$250", "6.00 PM");
audience3.display();

//2.Youtube
class Youtube {
    static platform_name = "YouTube";
    static owner = "Google";
    constructor(channel, video, subscribers, views, likes, duration) {
        this.channel_name=channel;
        this.video_name=video;
        this.subscribers=subscribers;
        this.views=views;
        this.likes=likes;
        this.duration=duration;
    }
    display() {
        console.log("Platform name:",Youtube.platform_name);
        console.log("Owner:",Youtube.owner);
        console.log("Channel name:",this.channel_name);
        console.log("Video name:",this.video_name);
        console.log("Subscribers:",this.subscribers);
        console.log("Total views:",this.views);
        console.log("Total likes:",this.likes);
        console.log("Video duration:",this.duration);
    }
}
console.log("-------- Channel 1 --------");
let channel1=new Youtube("AlwaysArjun", "cooking", "280M", "500M", "5M", "1   min");
channel1.display();

console.log("-------- Channel 2 --------");
let channel2=new Youtube("Sadguru","spiritual-life wisdom", "12.7M", "100M", "10M", "15 min");
channel2.display();

console.log("-------- Channel 3 --------");
let channel3=new Youtube("yoga with Adriene", "Yoga", "23M", "2M", "100K", "12 min");
channel3.display();

//shopping mall
class ShoppingMall {
    static mall_name = "Chandana Brother's Shopping Mall";
    static location = "hyderabad";
    constructor(customer,product,category,quantity,price,payment) {
        this.customer_name=customer;
        this.product_name=product;
        this.category=category;
        this.quantity=quantity;
        this.price=price;
        this.payment_method=payment;
    }
    display() {
        console.log("Mall name:",ShoppingMall.mall_name);
        console.log("Location:",ShoppingMall.location);
        console.log("Customer name:",this.customer_name);
        console.log("Product name:",this.product_name);
        console.log("Category:",this.category);
        console.log("Quantity:",this.quantity);
        console.log("Price:",this.price);
        console.log("Payment method:",this.payment_method);
    }
}
console.log("-------- Customer 1 --------");
let customer1 = new ShoppingMall("Gopika","Saree","Clothing",2,2500,"UPI");
customer1.display();

console.log("-------- Customer 2 --------");
let customer2 = new ShoppingMall("Priya","Gold Chain","Jewellery",1,15000,"Cash");
customer2.display();

console.log("-------- Customer 3 --------");
let customer3 = new ShoppingMall("Anu","Handbag","Accessories",2,3000,"Card");
customer3.display();