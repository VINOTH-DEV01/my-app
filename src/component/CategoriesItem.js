import CateImg from '../assests/images/cat-1.png'
import '../assests/css/CategoriesItem.css'
// import './Categories.css';

function CategoriesItem() {
    return (
        <div class="cateItem">
            <img src={CateImg} />
            <h6>Grocery</h6>
        </div>
    );
}

export default CategoriesItem;
