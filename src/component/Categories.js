import CateImg from '../assests/images/cat-1.png'
import '../assests/css/CategoriesItem.css'
import ItemPrice from './ItemPrice'
import React from 'react';
// import './Categories.css';
const x = [{
    name: "vinoth",
    location: "blore"
},
{
    name: "Ishkan",
    location: "Abc"
},
{
    name: "Bageshsree",
    location: "Chennai"
},
{
    name: "Rahul",
    location: "Mumbai"
}];
function Categories(props) {
    const getDatafromChildComponent = (data) => {
      alert("your gender values is updated! " + data);
    }
    return (
        <React.Fragment>
            <div className="Categoriesection">
                <div class="cateItem">
                    <img src={CateImg} />
                    <h6>{props.cat}</h6>
                </div>
                <div class="cateItem">
                    <img src={CateImg} />
                    <h6>{props.cat}</h6>
                </div>
                <div class="cateItem">
                    <img src={CateImg} />
                    <h6>{props.cat}</h6>
                </div>
                <div class="cateItem">
                    <img src={CateImg} />
                    <h6>{props.cat}</h6>
                </div>
                <div class="cateItem">
                    <img src={CateImg} />
                    <h6>{props.cat}</h6>
                </div>
                <div class="cateItem">
                    <img src={CateImg} />
                    <h6>{props.cat}</h6>
                </div>
                <div class="cateItem">
                    <img src={CateImg} />
                    <h6>{props.cat}</h6>
                </div>
                <div class="cateItem">
                    <img src={CateImg} />
                    <h6>{props.cat}</h6>
                </div>
                {/* <CategoriesItem />
                    <CategoriesItem />
                    <CategoriesItem />
                    <CategoriesItem />
                    <CategoriesItem />
                    <CategoriesItem />
                    <CategoriesItem />
                    <CategoriesItem /> */}
            </div>
            <div className="itemPrizeSection">
              <ItemPrice 
              value={x} 
              getDatafromChildComponent={getDatafromChildComponent}
              />
            </div>

        </React.Fragment>
    );
}

export default Categories;
