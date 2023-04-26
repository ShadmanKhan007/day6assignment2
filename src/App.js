import ProfileCart from './components/profileCart'
import './App.css';

  



function App() {

  let arrayOfObject = [

    {
      productId : "1",
      productPic : "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-133980.jpg?size=626&ext=jpg&ga=GA1.1.1968142237.1682441443&semt=robertav1_2_sidr",
      productName : "Nike Shoes",
      productDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      Price : "$60",
      Rating : "Rating 4"
    }
    
    ,
    {
      productId : "2",
      productPic : "https://img.freepik.com/free-photo/stylish-golden-watch-white-surface_181624-27078.jpg?size=626&ext=jpg&ga=GA1.1.1968142237.1682441443&semt=robertav1_2_sidr",
      productName : "Titan Watch",
      productDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      Price : "$260",
      Rating : "Rating 5"
    }
    ,
    
     {
      productId : "3",
      productPic : "https://t4.ftcdn.net/jpg/05/29/97/73/240_F_529977383_cGYnU4PtYJBnPdLHzdA9qnfDzdLakRKi.jpg",
      productName : "Adidas Tshirt",
      productDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      Price : "32",
      Rating : "Rating 5"
    }
    ,
    
    {
      productId : "4",
      productPic : "https://img.freepik.com/free-photo/blue-visor-hat-cloth-baseball_1203-6404.jpg?size=626&ext=jpg&ga=GA1.1.1968142237.1682441443&semt=robertav1_2_sidr",
      productName : "Tommy Cap",
      productDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      Price : "$20",
      Rating : "Rating 5"
    }
    ,
     {
      productId : "5",
      productPic : "https://img.freepik.com/premium-psd/letterman-varsity-jacket-front-view-mockup_13598-329.jpg?size=626&ext=jpg&ga=GA1.1.1968142237.1682441443&semt=robertav1_2_sidr",
      productName : "Reebok Jacket",
      productDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
      Price : "$110",
      Rating : "Rating 5"
    }
    ]


  return (
    <div className="App">
    {
      arrayOfObject.map((elem, i) => 
        <ProfileCart obj={elem}  />
      )
    }
 
    </div>
  );
}

export default App;
