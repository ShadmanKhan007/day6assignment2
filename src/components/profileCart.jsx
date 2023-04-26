import './profileCart.css';


export default function ProfileCard({obj}) {
    
    return (
        <div class="container">
        <p>{obj.productId}</p>
        <div class="img">
            <img src={obj.productPic}
              alt="image" height="120px" width="120px" />
        </div>
    
        <h3 class="heading-3">{obj.productName}</h3>
    
        <p class="para">{obj.productDescription}</p>
    
         <h2 class="price">{obj.Price}</h2>
    
         <h4 class="rating">{obj.Rating}</h4>
    
         <button class="btn">ADD TO CART</button>
    
        </div>
      )
    };
    
